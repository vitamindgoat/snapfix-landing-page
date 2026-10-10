"use client";

import { Camera } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <a href="#" className="flex items-center gap-2 font-bold text-lg">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-fg shadow-subtle">
                <Camera className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <span className="tracking-tight">SnapFix</span>
            </a>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Snap the problem. Fix the problem. Take a photo of a home
              problem and SnapFix helps you figure out what is wrong and who
              can fix it.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#features" className="text-muted hover:text-foreground">
              How it works
            </a>
            <a href="#faq" className="text-muted hover:text-foreground">
              FAQ
            </a>
            <a
              href="https://github.com/vitamindgoat/snapfix-landing-page"
              target="_blank"
              rel="noopener"
              className="text-muted hover:text-foreground"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-6 text-xs text-muted">
          © {new Date().getFullYear()} SnapFix. A project by Oleksandr Rybitskyi.
        </div>
      </div>
    </footer>
  );
}
