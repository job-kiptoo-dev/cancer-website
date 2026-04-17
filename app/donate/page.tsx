"use client";

import { createDonationAction } from "@/action/donate";
import { useActionState, useState } from "react";
// import { createDonationAction } from "@/actions/donate";

const PRESET_AMOUNTS = ["10", "25", "50", "100", "250"];

const CURRENCIES = [
  { value: "USDT", label: "USDT", symbol: "₮" },
  { value: "USDC", label: "USDC", symbol: "$" },
  { value: "BNB",  label: "BNB",  symbol: "◈" },
  { value: "BTC",  label: "BTC",  symbol: "₿" },
  { value: "ETH",  label: "ETH",  symbol: "Ξ" },
] as const;

export default function DonatePage() {
  const [state, formAction, isPending] = useActionState(createDonationAction, {});
  const [selectedAmount, setSelectedAmount] = useState("25");
  const [selectedCurrency, setSelectedCurrency] = useState("USDT");
  const [showCustom, setShowCustom] = useState(false);

  function handleAmountClick(amt: string) {
    setShowCustom(amt === "custom");
    setSelectedAmount(amt);
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="line-gold mb-8" />

          <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm border border-secondary/30 bg-emerald-glass mb-6">
            <svg
              className="w-6 h-6 text-secondary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>

          <h1 className="font-display text-4xl font-light text-foreground tracking-wide mb-3">
            Make a Donation
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto font-body">
            Your contribution supports cancer research and helps families in
            their fight. 100% of donations go directly to our programs.
          </p>

          <div className="line-gold mt-8" />
        </div>

        {/* Card */}
        <div className="bg-card border border-border rounded-sm p-8 shadow-soft">
          <form action={formAction} className="space-y-8">

            {/* Step 1 — Currency */}
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-body mb-4">
                01 — Choose cryptocurrency
              </p>
              <div className="grid grid-cols-5 gap-2">
                {CURRENCIES.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => setSelectedCurrency(c.value)}
                    className={[
                      "flex flex-col items-center justify-center py-3 px-1 rounded-sm border transition-all duration-200 text-xs font-body font-medium",
                      selectedCurrency === c.value
                        ? "border-secondary bg-accent text-secondary shadow-glow-gold"
                        : "border-border text-muted-foreground hover:border-secondary/40 hover:text-foreground",
                    ].join(" ")}
                  >
                    <span className="text-base mb-1 leading-none">{c.symbol}</span>
                    <span className="text-[11px]">{c.label}</span>
                  </button>
                ))}
              </div>
              <input type="hidden" name="currency" value={selectedCurrency} />
            </div>

            <div className="line-gold" />

            {/* Step 2 — Amount */}
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-body mb-4">
                02 — Select amount ({selectedCurrency})
              </p>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {PRESET_AMOUNTS.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => handleAmountClick(amt)}
                    className={[
                      "py-3 rounded-sm border text-sm font-body font-medium transition-all duration-200",
                      selectedAmount === amt
                        ? "border-secondary bg-accent text-secondary shadow-glow-gold"
                        : "border-border text-muted-foreground hover:border-secondary/40 hover:text-foreground",
                    ].join(" ")}
                  >
                    {amt}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => handleAmountClick("custom")}
                  className={[
                    "py-3 rounded-sm border text-sm font-body font-medium transition-all duration-200",
                    selectedAmount === "custom"
                      ? "border-secondary bg-accent text-secondary shadow-glow-gold"
                      : "border-border text-muted-foreground hover:border-secondary/40 hover:text-foreground",
                  ].join(" ")}
                >
                  Custom
                </button>
              </div>

              {!showCustom && (
                <input type="hidden" name="amount" value={selectedAmount} />
              )}

              {showCustom && (
                <div className="relative mt-3">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-body pointer-events-none">
                    {selectedCurrency}
                  </span>
                  <input
                    type="number"
                    name="customAmount"
                    min="1"
                    step="0.01"
                    placeholder="Enter amount"
                    autoFocus
                    className="w-full pl-20 pr-4 py-3 bg-muted border border-border rounded-sm text-sm font-body text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none transition-colors"
                  />
                  <input type="hidden" name="amount" value="custom" />
                </div>
              )}
            </div>

            <div className="line-gold" />

            {/* Step 3 — Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-[0.15em] text-muted-foreground font-body mb-4"
              >
                03 — Your email (for receipt)
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-sm font-body text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none transition-colors"
              />
            </div>

            {/* Error */}
            {state?.error && (
              <div className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/30 rounded-sm text-sm text-destructive font-body">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{ width: 16, height: 16, marginTop: 2, flexShrink: 0 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                {state.error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-secondary hover:bg-secondary/90 disabled:bg-secondary/40 text-secondary-foreground font-body font-semibold py-4 rounded-sm transition-all duration-200 text-sm flex items-center justify-center gap-2 shadow-glow-gold"
            >
              {isPending ? (
                <>
                  <svg
                    className="animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                    style={{ width: 16, height: 16 }}
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Connecting to Binance Pay…
                </>
              ) : (
                <>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ width: 16, height: 16 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Donate with Binance Pay
                </>
              )}
            </button>

          </form>

          {/* Trust footer */}
          <div className="mt-6 pt-5 border-t border-border flex items-center justify-center gap-4 text-[11px] text-muted-foreground font-body tracking-wide">
            <span className="flex items-center gap-1.5">
              <svg fill="currentColor" viewBox="0 0 20 20" style={{ width: 12, height: 12 }}>
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              Secured by Binance Pay
            </span>
            <span className="opacity-30">·</span>
            <span>Receipt via email</span>
            <span className="opacity-30">·</span>
            <span>No wallet needed</span>
          </div>
        </div>

      </div>
    </main>
  );
}
