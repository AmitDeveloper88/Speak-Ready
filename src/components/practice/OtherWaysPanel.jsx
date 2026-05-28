import { useState } from 'react';
import Icon from '../ui/Icon';
import { altEnglish, altHindi } from '../../utils/altPhrase';

export default function OtherWaysPanel({
  alternatives,
  onPlay,
  accent = 'user',
}) {
  const [open, setOpen] = useState(false);

  if (!alternatives?.length) return null;

  const toggleClass =
    accent === 'partner' ? 'other-ways-toggle-partner' : 'other-ways-toggle-user';

  return (
    <div className="other-ways-box">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`other-ways-toggle ${toggleClass}`}
        aria-expanded={open}
      >
        <span>Other ways to say this</span>
        <span className="text-[11px] opacity-80" aria-hidden>
          {open ? '▲' : '▼'}
        </span>
      </button>

      {open && (
        <ul>
          {alternatives.map((alt, i) => {
            const english = altEnglish(alt);
            const hindi = altHindi(alt);

            return (
              <li
                key={`${english}-${i}`}
                className={i > 0 ? 'border-t border-white/[0.04]' : ''}
              >
                <button
                  type="button"
                  onClick={() => onPlay?.(english)}
                  className="flex w-full items-start gap-3 px-3 py-2.5 text-left transition hover:bg-white/[0.04] active:scale-[0.99]"
                >
                  <span
                    className={`w-4 shrink-0 pt-0.5 text-sm font-bold ${
                      accent === 'partner' ? 'text-partner' : 'text-brand'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] leading-snug text-white/90">
                      {english}
                    </span>
                    {hindi && (
                      <span className="hi-text mt-1 block text-[12px] leading-snug text-white/45">
                        {hindi}
                      </span>
                    )}
                  </span>
                  <span
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      accent === 'partner'
                        ? 'bg-partner/20 text-partner'
                        : 'bg-brand/20 text-brand'
                    }`}
                    style={
                      accent === 'partner'
                        ? { background: 'rgba(155, 138, 251, 0.2)' }
                        : undefined
                    }
                  >
                    <Icon name="play" className="h-3.5 w-3.5" />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
