type ConversionKey = {
  pageType: string;
  service?: string;
  city?: string;
  device: string;
};

const conversionCounts = new Map<string, number>();

function keyToString(key: ConversionKey) {
  return `${key.pageType}|${key.service || ''}|${key.city || ''}|${key.device}`;
}

export function recordConversion(key: ConversionKey) {
  const mapKey = keyToString(key);
  const current = conversionCounts.get(mapKey) || 0;
  conversionCounts.set(mapKey, current + 1);
}

export function getConversionSummary() {
  const byPageType: Record<string, number> = {};
  const byDevice: Record<string, number> = {};
  const byService: Record<string, number> = {};
  const byCity: Record<string, number> = {};
  let total = 0;

  conversionCounts.forEach((count, key) => {
    total += count;
    const [pageType, service, city, device] = key.split('|');
    if (pageType) byPageType[pageType] = (byPageType[pageType] || 0) + count;
    if (device) byDevice[device] = (byDevice[device] || 0) + count;
    if (service) byService[service] = (byService[service] || 0) + count;
    if (city) byCity[city] = (byCity[city] || 0) + count;
  });

  return { total, byPageType, byDevice, byService, byCity };
}
