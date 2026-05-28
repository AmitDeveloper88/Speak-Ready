import Icon from '../ui/Icon';

export default function PageHeader({
  title,
  subtitle,
  onBack,
  right,
  accent = 'emerald',
  compact = false,
}) {
  const badge = 'bg-brand-soft text-brand';

  return (
    <header
      className={`flex shrink-0 items-start gap-2 ${compact ? 'mb-2' : 'mb-4 gap-3'}`}
    >
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          aria-label="Go back"
          className={`flex shrink-0 items-center justify-center rounded-xl border-0 bg-white/10 text-white/80 shadow-sm backdrop-blur transition active:scale-95 ${
            compact ? 'h-9 w-9' : 'mt-0.5 h-10 w-10'
          }`}
        >
          <Icon name="back" className="h-5 w-5" />
        </button>
      )}

      <div className="min-w-0 flex-1">
        {subtitle && (
          <p
            className={`inline-flex rounded-full font-semibold uppercase tracking-wide ${badge} ${
              compact
                ? 'mb-0.5 px-2 py-px text-[10px]'
                : 'mb-1 px-2.5 py-0.5 text-[11px]'
            }`}
          >
            {subtitle}
          </p>
        )}
        <h1
          className={`truncate font-bold tracking-tight text-white ${
            compact ? 'text-lg leading-tight' : 'text-xl'
          }`}
        >
          {title}
        </h1>
      </div>

      {right && <div className="shrink-0">{right}</div>}
    </header>
  );
}
