/** @param {string | { text: string, hi?: string }} alt */
export function altEnglish(alt) {
  if (typeof alt === 'string') return alt;
  return alt?.text ?? '';
}

/** @param {string | { text: string, hi?: string }} alt */
export function altHindi(alt) {
  if (typeof alt === 'string') return '';
  return alt?.hi ?? '';
}
