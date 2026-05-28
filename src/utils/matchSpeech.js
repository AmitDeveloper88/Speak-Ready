/** Normalize text for fuzzy comparison. */
export function normalizeSpeechText(text) {
  return (text || '')
    .toLowerCase()
    .replace(/[\u2018\u2019']/g, "'")
    .replace(/[^a-z0-9\s']/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;

  const row = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    let prev = row[0];
    row[0] = i;
    for (let j = 1; j <= n; j++) {
      const temp = row[j];
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + cost);
      prev = temp;
    }
  }
  return row[n];
}

function levenshteinRatio(a, b) {
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 1;
  return 1 - levenshtein(a, b) / maxLen;
}

function wordF1(expected, spoken) {
  const wordsA = expected.split(' ').filter(Boolean);
  const wordsB = spoken.split(' ').filter(Boolean);
  if (!wordsA.length || !wordsB.length) return 0;

  const setB = new Set(wordsB);
  let matches = 0;
  for (const w of wordsA) {
    if (setB.has(w)) matches += 1;
  }

  const precision = matches / wordsB.length;
  const recall = matches / wordsA.length;
  if (precision + recall === 0) return 0;
  return (2 * precision * recall) / (precision + recall);
}

/** @returns {{ score: number, ok: boolean }} */
export function scoreSpeechMatch(expected, spoken) {
  const a = normalizeSpeechText(expected);
  const b = normalizeSpeechText(spoken);

  if (!a) return { score: 0, ok: false };
  if (!b) return { score: 0, ok: false };
  if (a === b) return { score: 1, ok: true };

  const f1 = wordF1(a, b);
  const lev = levenshteinRatio(a, b);
  const score = Math.max(f1, lev);
  const ok = score >= 0.72;

  return { score, ok };
}
