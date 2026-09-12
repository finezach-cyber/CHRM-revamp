// CHRM marketing — Features teaser on the homepage. Four steps, links into /features.
import Link from "next/link";

const STEPS = [
  { n: "01", name: "Capture", desc: "Every call, every email, every thread. In, automatically." },
  { n: "02", name: "Structure", desc: "Conversation becomes structured CRM data. Your fields, your rules." },
  { n: "03", name: "Activate", desc: "Follow-ups send. Risks flag. The next action happens." },
  { n: "04", name: "Iterate", desc: "CHRM learns what works. Your playbook gets sharper." },
];

export default function FeaturesTeaser() {
  return (
    <section className="m-fteaser" id="features" data-screen-label="Features teaser">
      <header className="m-fteaser__head">
        <div>
          <div className="t-eyebrow">Features</div>
          <h2 className="m-fteaser__h">
            Four steps. <em>One system.</em>
          </h2>
        </div>
        <Link href="/product" className="m-fteaser__more">
          See every feature page &rarr;
        </Link>
      </header>

      <div className="m-fteaser__grid">
        {STEPS.map((s) => (
          <Link key={s.n} href={"/features#" + s.name.toLowerCase()} className="m-fteaser__cell">
            <span className="m-fteaser__num">{s.n}</span>
            <h3 className="m-fteaser__step">{s.name}.</h3>
            <p className="m-fteaser__desc">{s.desc}</p>
            <span className="m-fteaser__arrow">&rarr;</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
