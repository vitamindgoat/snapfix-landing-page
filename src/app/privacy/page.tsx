import { LegalShell } from "@/components/site/legal-shell";

export const metadata = { title: "Privacy Policy — SnapFix" };

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="May 11, 2026">
      <p>
        SnapFix takes your privacy seriously. This policy explains what we
        collect, why we collect it, and what controls you have.
      </p>
      <h2 className="text-xl font-semibold mt-8">What we collect</h2>
      <p>
        Photos you submit, approximate location (city-level by default), email,
        and basic usage telemetry. We do not sell personal data.
      </p>
      <h2 className="text-xl font-semibold mt-8">How we use it</h2>
      <p>
        Photos train the AI diagnosis model only after you opt in. Location is
        used to surface nearby pros. Email is used for booking confirmations
        and (if you subscribe) product updates.
      </p>
      <h2 className="text-xl font-semibold mt-8">Your controls</h2>
      <p>
        You can delete your account and all associated photos at any time from
        Settings → Account → Delete data. We honor deletion requests within 30
        days.
      </p>
      <p className="text-sm text-muted mt-8">
        This is placeholder copy. Consult counsel before going to production.
      </p>
    </LegalShell>
  );
}
