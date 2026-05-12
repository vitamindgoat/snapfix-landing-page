import { LegalShell } from "@/components/site/legal-shell";

export const metadata = { title: "Cookie Policy — SnapFix" };

export default function CookiesPage() {
  return (
    <LegalShell title="Cookie Policy" updated="May 11, 2026">
      <p>
        SnapFix uses cookies and similar technologies to keep you signed in,
        remember your preferences, and measure how the site is used.
      </p>
      <h2 className="text-xl font-semibold mt-8">Essential cookies</h2>
      <p>
        These cookies are required to make the site work — for example, to
        keep your account logged in.
      </p>
      <h2 className="text-xl font-semibold mt-8">Analytics cookies</h2>
      <p>
        We use Vercel Analytics to understand which pages and features are
        used. These analytics are aggregated and do not identify you
        personally.
      </p>
      <h2 className="text-xl font-semibold mt-8">Your choices</h2>
      <p>
        You can disable non-essential cookies in your browser settings. Doing
        so may affect some site functionality.
      </p>
      <p className="text-sm text-muted mt-8">
        This is placeholder copy. Consult counsel before going to production.
      </p>
    </LegalShell>
  );
}
