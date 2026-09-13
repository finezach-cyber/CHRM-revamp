// 2nd Closer About — design philosophy. Three editorial notes + a sign-off.
export default function About() {
  return (
    <main className="a-page" id="top">
      <header className="a-hero">
        <p className="a-hero__eye">About &middot; 2nd Closer</p>
        <h1 className="a-hero__h">
          Stay human. <em>Let AI do the rest.</em>
        </h1>
        <p className="a-hero__sub">
          A design philosophy, in three notes. About what AI should do, what it shouldn&rsquo;t,
          and why most enterprise software is currently doing the opposite.
        </p>
      </header>

      <section className="sp-answer a-answer" aria-labelledby="answer-h">
        <h2 className="sp-answer__h" id="answer-h">Who is behind 2nd Closer, and why the name?</h2>
        <p className="sp-answer__p">
          2nd Closer was founded by Zach Fine and was called CHRM until September 2026. The company builds an AI
          account executive for sales teams on HubSpot or Pipedrive, on one belief: a person on a sales team should
          spend their time on the two things software will never do, building trust and providing direction, and a
          machine should do the execution around them. The name comes from the ring. A boxer&rsquo;s second never
          throws a punch; the second does everything else so the fighter can. 2nd Closer never speaks on a call and
          never negotiates. It updates the CRM, sends the follow-up, maps the committee, flags the risk, and learns
          from every deal, in the five minutes after the closer hangs up. The three notes below are the argument for
          building it that way, and the free public beta is the offer to test it on your own pipeline.
        </p>
      </section>

      <section className="a-section" data-screen-label="01 Work surface">
        <header className="a-section__head">
          <div className="a-section__num">Note 01</div>
          <h2 className="a-section__h">
            AI that creates more work <em>is a failure.</em>
          </h2>
        </header>

        <div className="a-body">
          <div className="a-body__aside">The thesis</div>
          <div className="a-body__prose">
            <p>
              Most enterprise AI products in the last three years have made the same mistake.
              They generated something (a draft, a summary, a score) and handed it to a human to
              review, edit, approve, and file. The interface looks like progress. The work it
              produced is new work.
            </p>
            <p>
              A salesperson now reviews the AI&rsquo;s call summary. Then edits it. Then copies the
              relevant bits into the CRM. Then approves the AI&rsquo;s drafted follow-up. Then edits
              it. Then sends it. The human is now doing what they did before, plus checking the
              AI&rsquo;s homework.
            </p>
            <p>
              <em>Work surface</em> is the right unit to measure. Anything that adds dashboards,
              review queues, approval steps, or another tab to open in the morning is failure
              &mdash; even if the model behind it is excellent. AI should reduce the work surface to
              zero in the places it can. Where it can&rsquo;t, it shouldn&rsquo;t be there at all.
            </p>
            <p>
              2nd Closer is built around this. It does the work end to end. It writes to your CRM
              directly. It sends the follow-up directly. It flags the risk to the person who
              needs to act on it, not to a queue nobody opens. If a feature can&rsquo;t do its work
              without asking the human to do more work first, it isn&rsquo;t shipped.
            </p>

            <blockquote className="a-pull">
              &ldquo;Work surface is the right unit. <br />
              <em>AI that adds it is a failure, however good the model is.</em>&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      <section className="a-section" data-screen-label="02 Trust and direction">
        <header className="a-section__head">
          <div className="a-section__num">Note 02</div>
          <h2 className="a-section__h">
            What humans are for, <em>and AI never will be.</em>
          </h2>
        </header>

        <div className="a-body">
          <div className="a-body__aside">The two jobs</div>
          <div className="a-body__prose">
            <p>
              There are two things AI cannot do. Not in this generation, not in the next one, not
              in any version we can see from here. Building trust, and providing direction.
              Everything else is execution, and execution is where AI belongs.
            </p>
            <p>
              A great salesperson is not faster at typing notes than the next person. They are
              the person a buyer trusts in the room when the quarter is closing and the technical
              answer is incomplete. A great sales leader is not better at reading dashboards. They
              are the person who decides which deals get protected and which campaigns get killed
              when the data is ambiguous.
            </p>

            <div className="a-two">
              <div className="a-two__cell">
                <div className="a-two__n">Job 01</div>
                <h3 className="a-two__h">Build trust.</h3>
                <p className="a-two__p">
                  The room with the buyer. The candid moment with a teammate. The conversation
                  that decides whether your customer renews. These are not productivity problems.
                  AI doesn&rsquo;t belong here &mdash; except to clear the path so the human can be present
                  for them.
                </p>
              </div>
              <div className="a-two__cell">
                <div className="a-two__n">Job 02</div>
                <h3 className="a-two__h">Provide direction.</h3>
                <p className="a-two__p">
                  Where to point the team. Which deals to fight for. Which experiments to kill.
                  Which playbook chapter is wrong. These are judgement calls, not output. AI can
                  surface the evidence; only humans can decide.
                </p>
              </div>
            </div>

            <p>
              The 2nd Closer product is a long argument that these two jobs deserve most of a working
              day. Right now they get the leftovers. The average closer spends two to four hours a
              day on admin and the people they meet feel it. We&rsquo;re building the layer that gives
              those hours back.
            </p>
          </div>
        </div>
      </section>

      <section className="a-section" data-screen-label="03 Implementation Industrial Complex">
        <header className="a-section__head">
          <div className="a-section__num">Note 03</div>
          <h2 className="a-section__h">
            GTM engineers are the new <em>Implementation Industrial Complex.</em>
          </h2>
        </header>

        <div className="a-body">
          <div className="a-body__aside">The complaint</div>
          <div className="a-body__prose">
            <p>
              Twenty years ago, large enterprises ran on Oracle. The Oracle licence cost a million
              dollars. The Oracle <em>implementation</em> cost ten. A whole consulting industry
              grew around the gap &mdash; Accenture, Deloitte, the staff at boutique system
              integrators &mdash; paid handsomely to wire the product to the company that bought it.
            </p>
            <p>
              That industry never disappeared. It evolved. Today its modern form sits inside
              revenue organisations under the title <em>GTM engineer.</em> The job is to wire your
              sales stack together. To connect Salesforce to Outreach to Gong to Apollo to Common
              Room to Clay to the next thing your CRO read about on LinkedIn. To maintain the
              wiring as each of those tools changes its API every quarter, deprecates its webhooks,
              and ships a new MCP server that doesn&rsquo;t quite work yet.
            </p>
            <p>
              The output of that work is fragile. The integrations break. The workflows degrade.
              The maintenance never ends. Mid-stage companies are spending the equivalent of two
              senior engineering salaries to keep the duct tape stuck to a stack that was supposed
              to be
              <em> off-the-shelf software.</em>
            </p>

            <blockquote className="a-pull">
              &ldquo;We&rsquo;re paying GTM engineers to maintain APIs <br />
              <em>between products that should have just worked.</em>&rdquo;
            </blockquote>

            <p>
              2nd Closer is built so that this job doesn&rsquo;t exist for our customers. You connect four
              things. We read your schema. We do the work. If an upstream API changes, we absorb
              it &mdash; you find out by reading our changelog, not by paying a contractor to fix it.
            </p>
            <p>
              That is the bet. Not better AI. Not more workflow nodes. Software that does not
              require an Industrial Complex to make it run.
            </p>
          </div>
        </div>
      </section>

      <section className="a-section" data-screen-label="Sign-off">
        <header className="a-section__head">
          <div className="a-section__num">Sign-off</div>
          <h2 className="a-section__h">
            Stay human. <em>Let AI do the rest.</em>
          </h2>
        </header>
        <div className="a-body">
          <div className="a-body__aside">The line</div>
          <div className="a-body__prose">
            <p>
              That sentence is the product. The first half is a promise to the people on your
              team: that the work that requires a human is the work they&rsquo;ll get to do. The
              second half is a promise to you &mdash; that the rest of it will be handled, by software
              that doesn&rsquo;t need a quarterly project plan to deliver on its end of the deal.
            </p>
            <p>If you&rsquo;re building a revenue team and that resonates, talk to us.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
