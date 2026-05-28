import OtherWaysPanel from './OtherWaysPanel';
import Icon from '../ui/Icon';

export default function ChatTurnBubble({
  turn,
  isUser,
  partnerLabel = 'Person',
  userLabel = 'You',
  isActive,
  isSelected,
  showAlternatives,
  onSelectPractice,
  onPlayLine,
  onPlayPhrase,
}) {
  const label = isUser ? userLabel : partnerLabel;
  const showSelected = isSelected && !isActive;

  const playBtn = (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onPlayLine?.();
      }}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/20 text-white/85 transition hover:bg-black/30 active:scale-95"
      aria-label="Listen"
    >
      <Icon name="volume" className="h-4 w-4" />
    </button>
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelectPractice?.();
    }
  };

  return (
    <div
      className={`w-full max-w-[min(100%,21rem)] ${
        isUser ? 'ml-auto' : 'mr-auto'
      }`}
    >
      <article
        role="button"
        tabIndex={0}
        onClick={onSelectPractice}
        onKeyDown={handleKeyDown}
        aria-pressed={isSelected}
        aria-label={`Practice: ${turn.text}`}
        className={[
          'cursor-pointer transition-shadow',
          isUser ? 'chat-bubble-user' : 'chat-bubble-partner',
          isActive
            ? isUser
              ? 'chat-bubble-highlight-active-user'
              : 'chat-bubble-highlight-active-partner'
            : '',
          showSelected
            ? isUser
              ? 'chat-bubble-selected-user'
              : 'chat-bubble-selected-partner'
            : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div
          className={`mb-2 flex items-center gap-2 ${
            isUser ? '' : 'justify-between'
          }`}
        >
          {isUser ? (
            <>
              {playBtn}
              <span className="ml-auto text-xs font-bold text-brand">{label}</span>
            </>
          ) : (
            <>
              <span className="text-xs font-bold text-partner">{label}</span>
              {playBtn}
            </>
          )}
        </div>

        <p className="text-[15px] font-semibold leading-snug text-white">
          {turn.text}
        </p>
        {turn.hi && (
          <p className="hi-text mt-2 text-[14px] leading-relaxed text-white/55">
            {turn.hi}
          </p>
        )}
      </article>

      {showAlternatives && (
        <div onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()}>
          <OtherWaysPanel
            alternatives={turn.alternatives}
            accent={isUser ? 'user' : 'partner'}
            onPlay={onPlayPhrase}
          />
        </div>
      )}
    </div>
  );
}
