import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { z } from 'zod';

export const RESOURCE_DIR = path.join(process.cwd(), 'content', 'resources');

const resourceSchema = z.object({
  title: z.string().min(5),
  description: z.string().min(20),
  date: z.string(),
  updated: z.string().optional(),
  lastReviewed: z.string().optional(),
  tags: z.array(z.string()).optional().default([]),
  relatedServices: z.array(z.string()).optional().default([]),
  noindex: z.boolean().optional().default(false)
});

export type ResourceFrontmatter = z.infer<typeof resourceSchema> & {
  slug: string;
};

export type ResourceArticle = ResourceFrontmatter & {
  content: string;
  excerpt: string;
  wordCount: number;
  readTime: number;
  headings: { level: number; text: string; id: string }[];
  lastUpdated: string;
  lastReviewed: string;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function extractHeadings(content: string) {
  const lines = content.split('\n');
  const headings: { level: number; text: string; id: string }[] = [];

  lines.forEach((line) => {
    const match = line.match(/^(##|###)\s+(.*)/);
    if (match) {
      const level = match[1] === '##' ? 2 : 3;
      const text = match[2].trim();
      headings.push({ level, text, id: slugify(text) });
    }
  });

  return headings;
}

function computeReadTime(wordCount: number) {
  return Math.max(1, Math.round(wordCount / 200));
}

export function getAllResourceSlugs() {
  return fs
    .readdirSync(RESOURCE_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getResourceBySlug(slug: string): ResourceArticle | null {
  const filePath = path.join(RESOURCE_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const file = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(file);
  const parsed = resourceSchema.safeParse(data);
  if (!parsed.success) {
    throw new Error(`Invalid frontmatter for ${slug}: ${parsed.error.message}`);
  }

  const excerpt = content.split('\n').find((line) => line.trim() && !line.startsWith('#')) || '';
  const wordCount = content.replace(/\n/g, ' ').split(/\s+/).filter(Boolean).length;
  const readTime = computeReadTime(wordCount);
  const headings = extractHeadings(content);
  const lastUpdated = parsed.data.updated || parsed.data.date;
  const lastReviewed = parsed.data.lastReviewed || lastUpdated;

  return {
    ...parsed.data,
    slug,
    content,
    excerpt: excerpt.trim().replace(/\*|\#/g, ''),
    wordCount,
    readTime,
    headings,
    lastUpdated,
    lastReviewed
  };
}

export function getAllResources() {
  return getAllResourceSlugs()
    .map((slug) => getResourceBySlug(slug))
    .filter((item): item is ResourceArticle => Boolean(item))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
