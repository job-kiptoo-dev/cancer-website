import Link from "next/link";

interface ThankYouPageProps {
  searchParams: Promise<{ order?: string }>;
}

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const { order: merchantTradeNo } = await searchParams;

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">

        <div className="line-gold mb-10" />

        {/* Check icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm border border-secondary/30 bg-emerald-glass mb-6">
          <svg
            className="text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ width: 24, height: 24 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="font-display text-4xl font-light text-foreground tracking-wide mb-3">
          Thank You
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed mb-2 font-body">
          Your donation has been received and will go directly towards cancer
          research and patient support programs.
        </p>
        <p className="text-muted-foreground/60 text-xs mb-8 font-body">
          A confirmation receipt has been sent to your email address.
        </p>

        {merchantTradeNo && (
          <div className="bg-card border border-border rounded-sm px-6 py-4 mb-8 text-left">
            <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground font-body mb-1">
              Order reference
            </p>
            <p className="text-sm font-mono text-accent-foreground">{merchantTradeNo}</p>
          </div>
        )}

        <div className="line-gold mb-8" />

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm font-body font-semibold px-6 py-3 rounded-sm transition-all duration-200 shadow-glow-gold"
          >
            Donate again
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-border text-muted-foreground hover:border-secondary/40 hover:text-foreground text-sm font-body font-semibold px-6 py-3 rounded-sm transition-all duration-200"
          >
            Back to home
          </Link>
        </div>

      </div>
    </main>
  );
}
