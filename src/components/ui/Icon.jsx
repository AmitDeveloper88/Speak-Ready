const paths = {
  back: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19l-7-7 7-7"
    />
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path
        strokeLinecap="round"
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </>
  ),
  moon: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
    />
  ),
  play: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 5v14l11-7L8 5z"
    />
  ),
  stop: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h12v12H6z" />
  ),
  pause: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 5v14M14 5v14" />
  ),
  repeat: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 12a8 8 0 0113.66-5.66M20 12a8 8 0 01-13.66 5.66M9 5H4V0M15 19h5v5"
    />
  ),
  headphones: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 14v3a2 2 0 002 2h1M20 14v3a2 2 0 01-2 2h-1"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 14a8 8 0 0116 0"
      />
    </>
  ),
  chevronLeft: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  ),
  chevronRight: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  ),
  chat: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 10h8M8 14h5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  ),
  mic: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14a3 3 0 003-3V6a3 3 0 00-6 0v5a3 3 0 003 3z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 11v1a7 7 0 01-14 0v-1M12 18v3"
      />
    </>
  ),
};

export default function Icon({ name, className = 'w-5 h-5' }) {
  const d = paths[name];
  if (!d) return null;

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      {d}
    </svg>
  );
}
