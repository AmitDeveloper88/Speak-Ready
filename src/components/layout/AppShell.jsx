export default function AppShell({ children, fillHeight = false }) {
  if (fillHeight) {
    return (
      <div className="flex h-[100dvh] max-h-[100dvh] w-full flex-col overflow-hidden bg-app">
        <div className="mx-auto flex h-full min-h-0 w-full max-w-lg flex-col overflow-hidden px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-[max(0.5rem,env(safe-area-inset-top))] sm:px-4">
          <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-app">
      <div className="mx-auto flex min-h-[100dvh] w-full max-w-lg flex-col px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))]">
        {children}
      </div>
    </div>
  );
}
