export const resolveAssetUrl = (path?: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  const base = import.meta.env.BASE_URL || '/';
  const baseSegment = base.replace(/^\/+|\/+$/g, '');

  let cleanPath = path.startsWith('/') ? path.slice(1) : path;
  if (baseSegment && cleanPath.startsWith(baseSegment + '/')) {
    cleanPath = cleanPath.slice(baseSegment.length + 1);
  }

  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${cleanPath}`;
};
