import Link from "next/link";
import { Camera, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-16">
      <div className="text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-md bg-primary text-primary-fg shadow-medium">
          <Camera className="h-7 w-7" strokeWidth={2.4} />
        </span>
        <p className="mt-8 text-sm font-semibold text-primary">404</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
          Page not found.
        </h1>
        <p className="mt-3 max-w-md text-muted">
          The link looks broken — but the leaky pipe at home still isn&apos;t.
          Let&apos;s get you back.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-fg shadow-medium hover:scale-[1.02]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
