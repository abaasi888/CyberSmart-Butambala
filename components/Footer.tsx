import Link from "next/link";
import { T } from "@/components/T";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="footer-brand" href="/">CyberSmart Butambala</Link>
        <p className="footer-acknowledgement"><T k="footer.acknowledgement" /></p>
        <nav className="footer-nav" aria-label="Footer">
          <Link href="/accessibility/"><T k="footer.accessibility" /></Link>
          <Link href="/license/"><T k="footer.license" /></Link>
          <span><T k="footer.contact" />: <T k="footer.contactPlaceholder" /></span>
        </nav>
        <p className="footer-copyright">© {new Date().getFullYear()} CyberSmart Butambala</p>
      </div>
    </footer>
  );
}
