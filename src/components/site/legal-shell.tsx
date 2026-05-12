import Link from "next/link";
import { Camera, ArrowLeft } from "lucide-react";

export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <header className="border-b border-border bg-surface">
        <div className="container-page flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-fg shadow-subtle">
              <Camera className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <span>SnapFix</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Home
          </Link>
        </div>
      </header>
      <article className="container-page max-w-3xl py-12 md:py-16">
        <p className="text-sm text-muted">Last updated: {updated}</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
          {title}
        </h1>
        <div className="prose-snapfix mt-8 space-y-5 text-base leading-relaxed text-foreground">
          {children}
        </div>
      </article>
    </main>
  );
}
