// 2nd Closer — Free public beta page. What you get, what you bring, why BYOK, what "beta" means, and the form.
import Link from "next/link";
import LeadForm from "./LeadForm";
import AfterTheCall from "./AfterTheCall";
import { BETA } from "@/lib/site";

const GET: [string, string][] = [
  ["Everything 2nd Closer does", "CRM hygiene, follow-ups sent, sequences, committee mapping, LinkedIn warm-up, Apollo enrichment, risk detection, competitor handling, win/loss iteration. No feature gates."],
  ["The built-in notetaker", "Joins every booked call on Zoom, Meet and Teams. Or we ingest Fireflies, Fathom, Otter or Gong."],
  ["Configuration with us", "A 20-minute call to map your fields and stages. Live the next morning."],
  ["Unlimited manager, RevOps and leadership seats", "Only closers are seats. Everyone else reads for free."],
  ["A direct line", "Beta teams talk to the people building it. Bugs get fixed, requests get heard."],
];

const BRING: [string, string][] = [
  ["Admin access to HubSpot or Pipedrive", "OAuth. We read your pipelines, stages and custom fields; we don’t store credentials."],
  ["A Google or Microsoft calendar", "So the notetaker knows which calls to join."],
  ["An API key from any LLM provider", "Anthropic, OpenAI, Google or another. Create a key, set a spend cap if you like, paste it on the call. The provider bills you for what 2nd Closer uses."],
  ["Optional: LinkedIn and Apollo", "For warm-up outreach and enrichment. Five minutes each. Skip them and add later."],
  ["Thirty minutes", "Twenty on the call, ten to decide what a well-filled deal record looks like to your team."],
];

export default function BetaPage() {
  return (
    <main className="sp-page" id="top" data-screen-label="Beta">
      <p className="sp-crumbs">
        <Link href="/">2nd Closer</Link>
        <span>/</span>
        <span style={{ color: "var(--ink)" }}>Free beta</span>
      </p>

      <header className="sp-hero">
        <p className="cd-eyebrow">{BETA.name} &middot; bring your own key</p>
        <h1 className="sp-hero__h">
          Free while we’re in beta. <em>You bring the key.</em>
        </h1>
        <p className="sp-hero__sub">
          {BETA.line} Works with any provider. No seat cap, no end date announced, no card. A
          20-minute call to configure it, then the after-call work handled for every rep by the next morning.
        </p>
      </header>

      <div className="sp-meta">
        <div className="sp-meta__cell"><p className="sp-meta__k">2nd Closer during the beta</p><p className="sp-meta__v">Free</p></div>
        <div className="sp-meta__cell"><p className="sp-meta__k">You bring</p><p className="sp-meta__v">Any LLM API key</p></div>
        <div className="sp-meta__cell"><p className="sp-meta__k">Setup</p><p className="sp-meta__v">20-min call · live next morning</p></div>
        <div className="sp-meta__cell"><p className="sp-meta__k">Limits</p><p className="sp-meta__v">None stated</p></div>
      </div>

      <div className="beta-grid">
        <div className="beta-col beta-col--chrm">
          <p className="beta-col__h">What you get</p>
          <ul>
            {GET.map(([t, d]) => (
              <li key={t}><strong>{t}</strong><span>{d}</span></li>
            ))}
          </ul>
        </div>
        <div className="beta-col">
          <p className="beta-col__h">What you bring</p>
          <ul>
            {BRING.map(([t, d]) => (
              <li key={t}><strong>{t}</strong><span>{d}</span></li>
            ))}
          </ul>
        </div>
      </div>

      <header className="sec-head" style={{ marginTop: "clamp(32px,4vw,56px)" }}>
        <div className="t-eyebrow">Why bring your own key</div>
        <h2 className="sec-head__h">
          Your data, your provider, <em>your invoice.</em>
        </h2>
      </header>
      <div className="beta-why">
        <div>
          <h3>Control</h3>
          <p>Your transcripts and CRM data go to the model provider you chose, under your own account, terms and retention settings. Not through a reseller you’ve never vetted. Rotate or revoke the key any time.</p>
        </div>
        <div>
          <h3>Honest cost</h3>
          <p>You see exactly what the AI costs on your own invoice, per token, not a marked-up seat bundle. Set a spend cap at the provider and it can never surprise you.</p>
        </div>
        <div>
          <h3>An honest beta</h3>
          <p>We’re early. SOC 2 is ahead of us, the product is moving weekly, and we would rather you pay your provider than pay us for something still being shaped. Free is what a beta should be.</p>
        </div>
      </div>

      <header className="sec-head" style={{ marginTop: "clamp(32px,4vw,56px)" }}>
        <div className="t-eyebrow">What runs on your key</div>
        <h2 className="sec-head__h">
          The five minutes after every call, <em>on your key.</em>
        </h2>
        <p className="sec-head__sub">
          Every row below is a model call billed to your provider account. Nothing runs that you can’t see.
        </p>
      </header>
      <AfterTheCall />

      <section className="cd-faq" style={{ marginTop: "clamp(32px,4vw,56px)" }}>
        <p className="cd-faq__h">Beta questions</p>
        <dl>
          <div>
            <dt>Which providers and models?</dt>
            <dd>Any LLM provider with an API key. We recommend a current mid-tier model for extraction and a stronger one for drafting; we set that up with you on the call and you can change it.</dd>
          </div>
          <div>
            <dt>How much will the usage cost?</dt>
            <dd>It depends on your provider, model and call volume. Beta teams find it a small fraction of a seat licence. We show the estimate for your team on the call and you can cap spend at the provider.</dd>
          </div>
          <div>
            <dt>What happens when the beta ends?</dt>
            <dd>Pricing will be per account-executive seat, shared on the call. Beta teams hear first and keep beta terms for a period we announce before any change. Manager, RevOps and leadership seats stay free.</dd>
          </div>
          <div>
            <dt>Can I leave?</dt>
            <dd>Any time. Everything 2nd Closer wrote lives in your CRM as ordinary fields and activities. Revoke the key and the OAuth grants and it stops.</dd>
          </div>
          <div>
            <dt>Do I need an engineer?</dt>
            <dd>No. Four OAuth sign-ins, one key, one call. <Link href="/setup">See setup.</Link></dd>
          </div>
        </dl>
      </section>

      <section className="beta-form" id="join">
        <h2 className="beta-form__h">Join the free beta.</h2>
        <p className="beta-form__p">Tell us your CRM, team size and the key you’d bring. We reply within a business day with a 20-minute slot.</p>
        <LeadForm />
      </section>
    </main>
  );
}
