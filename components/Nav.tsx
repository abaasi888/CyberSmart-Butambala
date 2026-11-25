"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { T } from "@/components/T";

const links = [
  { href: "/", key: "nav.home" as const },
  { href: "/about/", key: "nav.about" as const },
  { href: "/lessons/", key: "nav.lessons" as const },
  { href: "/scan/", key: "nav.scan" as const },
  { href: "/downloads/", key: "nav.downloads" as const },
  { href: "/license/", key: "nav.license" as const }
];

export function Nav() {
  const pathname = (usePathname() ?? "/").replace(/\/+$/, "") || "/";

  return (
    <>
      {links.map(({ href, key }) => {
        const path = href.replace(/\/+$/, "") || "/";
        const isCurrent = pathname === path || (path !== "/" && pathname.startsWith(`${path}/`));
        return (
          <Link className="nav-link" href={href} key={href} aria-current={isCurrent ? "page" : undefined}>
            <T k={key} />
          </Link>
        );
      })}
    </>
  );
}
