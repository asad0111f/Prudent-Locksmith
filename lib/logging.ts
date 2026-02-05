type LogLevel = 'info' | 'warn' | 'error';

type LogEvent = {
  level: LogLevel;
  event: string;
  at: string;
  message?: string;
  meta?: Record<string, string | number | boolean | undefined>;
};

function safeValue(value: unknown) {
  if (value === null || value === undefined) return undefined;
  if (typeof value === 'string') return value.slice(0, 200);
  if (typeof value === 'number' || typeof value === 'boolean') return value;
  return undefined;
}

export function logEvent(level: LogLevel, event: string, meta?: Record<string, unknown>, message?: string) {
  const safeMeta: Record<string, string | number | boolean | undefined> = {};
  if (meta) {
    Object.entries(meta).forEach(([key, value]) => {
      safeMeta[key] = safeValue(value);
    });
  }

  const payload: LogEvent = {
    level,
    event,
    at: new Date().toISOString(),
    message,
    meta: Object.keys(safeMeta).length ? safeMeta : undefined
  };

  const output = JSON.stringify(payload);
  if (level === 'error') {
    console.error(output);
  } else if (level === 'warn') {
    console.warn(output);
  } else {
    console.info(output);
  }
}
