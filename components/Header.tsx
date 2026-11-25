import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";
import { Nav } from "@/components/Nav";

function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 4 34 9v10c0 9-5.8 14.7-14 18C11.8 33.7 6 28 6 19V9l14-5Z" />
      <path d="m13.5 20 4.5 4.5 9-10" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="CyberSmart Butambala home">
          <BrandMark />
          <span>CyberSmart <strong>Butambala</strong></span>
        </Link>
        <MobileMenu>
          <Nav />
        </MobileMenu>
      </div>
    </header>
  );
}
