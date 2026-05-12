import { LegalShell } from "@/components/site/legal-shell";

export const metadata = { title: "Terms of Service — SnapFix" };

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="May 11, 2026">
      <p>
        These Terms govern your use of SnapFix, operated by SnapFix Labs, Inc.
        By creating an account, snapping a photo, or booking a pro through our
        services, you agree to these Terms.
      </p>
      <h2 className="text-xl font-semibold mt-8">Using the service</h2>
      <p>
        SnapFix matches users with independent third-party service
        professionals. We do not perform the work ourselves and are not
        responsible for the workmanship of any pro you book.
      </p>
      <h2 className="text-xl font-semibold mt-8">Payments</h2>
      <p>
        Quotes shown in-app are binding for the scope captured in your photo.
        Any change-orders requested by a pro on-site require your written
        approval in the app before work continues.
      </p>
      <h2 className="text-xl font-semibold mt-8">Account suspension</h2>
      <p>
        We may suspend accounts that abuse the matching system, submit
        fraudulent photos, or violate community guidelines.
      </p>
      <p className="text-sm text-muted mt-8">
        This is placeholder copy. Consult counsel before going to production.
      </p>
    </LegalShell>
  );
}
