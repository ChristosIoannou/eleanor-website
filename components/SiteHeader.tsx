"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

/* Nav order on the live site reads About, Works, Contact from left to right. */
const nav = [
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  /*
   * Single-page site, so navigating to "/" is a no-op and the click does
   * nothing. Scroll to the top instead — but leave modifier-clicks alone so
   * open-in-new-tab still works, and keep the href for middle-click.
   */
  function scrollToTop(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    window.scrollTo({ top: 0 });
  }

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 flex items-start justify-between bg-[var(--base-1)]">
      <Link
        href="/"
        onClick={scrollToTop}
        aria-label="Eleanor Cousins Brown — back to top"
      >
        <span className="wordmark block text-[var(--accent-1)]">
          <em>Eleanor</em>
          <br />
          Cousins
          <br />
          Brown
        </span>
      </Link>

      <nav className="site-nav mono flex self-center">
        {nav.map((item) => (
          <a key={item.label} href={item.href} className="underline hover:opacity-60">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
