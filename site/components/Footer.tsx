// CHRM marketing — Footer.
import Link from "next/link";
import { COMPARE_PAGES } from "@/lib/compare-pages";
import { TAGLINE, CONTACT_EMAIL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="m-footer" data-screen-label="Footer">
      <div className="m-footer__inner">
        <div>
          <img src="/assets/logo-wordmark.svg" alt="CHRM" className="m-footer__brand" />
          <p className="m-footer__tag">{TAGLINE}</p>
          <p className="m-footer__tag2">A second AE for every closer. Works with HubSpot &amp; Pipedrive.</p>
        </div>
        <div className="m-footer__cols">
          <div className="m-footer__col">
            <p className="m-footer__col-h">Product</p>
            <ul>
              <li><Link href="/product">All features</Link></li>
              <li><Link href="/features">How it works</Link></li>
              <li><Link href="/product/crm-hygiene">CRM hygiene</Link></li>
              <li><Link href="/product/follow-up-emails">Follow-up emails</Link></li>
              <li><Link href="/product/linkedin-outreach">LinkedIn outreach</Link></li>
              <li><Link href="/product/risk-detection">Risk detection</Link></li>
            </ul>
          </div>
          <div className="m-footer__col">
            <p className="m-footer__col-h">Integrations</p>
            <ul>
              <li><Link href="/integrations/hubspot">HubSpot</Link></li>
              <li><Link href="/integrations/pipedrive">Pipedrive</Link></li>
              <li><Link href="/integrations/gmail">Gmail</Link></li>
              <li><Link href="/integrations/outlook">Outlook</Link></li>
              <li><Link href="/integrations/linkedin">LinkedIn</Link></li>
              <li><Link href="/integrations/apollo">Apollo</Link></li>
              <li><Link href="/integrations/fireflies">Fireflies</Link></li>
            </ul>
          </div>
          <div className="m-footer__col">
            <p className="m-footer__col-h">Compare</p>
            <ul>
              {COMPARE_PAGES.map((p) => (
                <li key={p.slug}><Link href={"/compare/" + p.slug}>{p.short}</Link></li>
              ))}
            </ul>
          </div>
          <div className="m-footer__col">
            <p className="m-footer__col-h">Company</p>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/setup">Setup</Link></li>
              <li><Link href="/#stories">Stories</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
              <li><a href="https://www.linkedin.com/company/chrm-app">LinkedIn</a></li>
              <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="m-footer__rule"></div>
      <div className="m-footer__base">
        <span>&copy; 2026 CHRM &middot; All rights reserved &middot; <Link href="/privacy">Privacy</Link> &middot; <Link href="/terms">Terms</Link></span>
        <span>CHRM is not a CRM. It works inside yours. People shown on this site are illustrative.</span>
      </div>
    </footer>
  );
}
