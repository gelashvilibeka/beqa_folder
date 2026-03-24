export function countSymbols(text: string): Record<string, number> {
  const symbols = ['.', ',', ':', ';', '?'] as const;

  function escapeRegex(symbol: string): string {
    return symbol.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  return Object.fromEntries(
    symbols.map(symbol => [
      symbol,
      (text.match(new RegExp(escapeRegex(symbol), 'g')) || []).length
    ])
  ) as Record<string, number>;
}

document.addEventListener('DOMContentLoaded', () => {
  const poemEl = document.getElementById('poem');
  if (!poemEl) return;

  const text = poemEl.textContent || '';
  const counts = countSymbols(text);

  const display = document.createElement('div');
  display.style.cssText =
    'background-color: white; border-radius: 13px; padding: 10px; margin-top: 50px; display: inline-block; margin-left: 20px; font-family: monospace; font-size: large; vertical-align: top; ';

  display.innerHTML =
    '<strong>Symbol Counts</strong><br><br>' +
    Object.entries(counts)
      .map(([sym, cnt]) => `${sym} <strong>:</strong> ${cnt}`)
      .join('<br><br>');

  poemEl.parentNode!.insertBefore(display, poemEl.nextSibling);
});