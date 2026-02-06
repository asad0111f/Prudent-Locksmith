import Image from 'next/image';
import clsx from 'clsx';

const overlayClassName = 'absolute inset-0 bg-gradient-to-t from-slate-900/35 via-slate-900/10 to-transparent';

type BaseImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  wrapperClassName?: string;
  imageClassName?: string;
  overlay?: boolean;
};

function BaseImage({
  src,
  alt,
  sizes,
  priority = false,
  wrapperClassName,
  imageClassName,
  overlay = false
}: BaseImageProps) {
  return (
    <div className={clsx('relative overflow-hidden bg-slate-100', wrapperClassName)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={clsx('object-cover', imageClassName)}
      />
      {overlay ? <div className={overlayClassName} aria-hidden="true" /> : null}
    </div>
  );
}

type ImageVariantProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
};

export function HeroImage({ src, alt, sizes, priority, className, imageClassName }: ImageVariantProps) {
  return (
    <BaseImage
      src={src}
      alt={alt}
      sizes={sizes ?? '(max-width: 1024px) 100vw, 520px'}
      priority={priority}
      overlay
      wrapperClassName={clsx('aspect-[4/3] rounded-3xl shadow-soft', className)}
      imageClassName={imageClassName}
    />
  );
}

export function ServiceImage({ src, alt, sizes, className, imageClassName }: ImageVariantProps) {
  return (
    <BaseImage
      src={src}
      alt={alt}
      sizes={sizes ?? '(max-width: 1024px) 100vw, 360px'}
      wrapperClassName={clsx('aspect-[4/3] rounded-2xl shadow-sm', className)}
      imageClassName={clsx('transition duration-300', imageClassName)}
    />
  );
}

export function FeatureImage({ src, alt, sizes, priority, className, imageClassName }: ImageVariantProps) {
  return (
    <BaseImage
      src={src}
      alt={alt}
      sizes={sizes ?? '(max-width: 1024px) 100vw, 640px'}
      priority={priority}
      overlay
      wrapperClassName={clsx('aspect-[16/9] rounded-3xl shadow-soft', className)}
      imageClassName={imageClassName}
    />
  );
}
