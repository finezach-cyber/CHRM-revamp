// CHRM marketing — Onboarding section on the homepage.
const CONNECTORS: [string, string, string][] = [
  ["01", "Your CRM", "HubSpot or Pipedrive. OAuth in fifteen minutes. CHRM reads your existing fields and stages. We do not impose a schema."],
  ["02", "Your calendar", "Google or Microsoft. CHRM’s built-in notetaker joins every booked call automatically. No third-party tool to install."],
  ["03", "LinkedIn", "For stakeholder context. Champions, blockers, decision-makers — pulled per deal, kept current."],
  ["04", "Apollo", "For firmographics and prospect data. Every account record arrives populated."],
];

export default function Onboarding() {
  return (
    <section className="m-onboard" id="onboarding" data-screen-label="Onboarding">
      <header className="m-onboard__head">
        <div>
          <div className="t-eyebrow">Setup</div>
          <h2 className="m-onboard__h">
            Connect four things. <em>You&rsquo;re done.</em>
          </h2>
        </div>
        <p className="m-onboard__lead">
          No workflow design. No automation builder. No engineer on a call explaining your
          sales process.
        </p>
      </header>

      <div className="m-onboard__grid">
        <div className="m-onboard__left">
          <p className="m-onboard__leftH">What you connect</p>
          <ul className="m-onboard__connectors">
            {CONNECTORS.map(([num, name, what]) => (
              <li key={num}>
                <span className="num">{num}</span>
                <div>
                  <span className="name">{name}</span>
                  <span className="what">{what}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="m-onboard__right">
          <p className="m-onboard__rightH">What you don&rsquo;t do</p>
          <h3 className="m-onboard__claim">
            From four OAuth clicks, <em>CHRM is fully configured</em> to run every deal end to
            end.
          </h3>
          <p className="m-onboard__body">
            Every other category of sales tool asks you to build a workflow. Drag the trigger
            node. Connect it to the action node. Define the conditions. Test it. Document it.
            Maintain it as your process changes. Hire a GTM engineer to own it.
          </p>
          <p className="m-onboard__body">
            CHRM doesn&rsquo;t do that. You connect the four sources above. We read your CRM schema
            and your calendar. The execution layer turns on. Calls are captured, fields are
            populated, follow-ups are sent, risks are flagged. From day one, without an
            automation diagram anywhere on the page.
          </p>
          <div className="m-onboard__rule">
            <div>
              <span className="k">Setup time</span>
              <span className="v">&lt; 1 day</span>
            </div>
            <div>
              <span className="k">Engineers needed</span>
              <span className="v">Zero</span>
            </div>
            <div>
              <span className="k">Workflow nodes</span>
              <span className="v">None</span>
            </div>
            <div>
              <span className="k">Public beta</span>
              <span className="v">Free · BYOK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
