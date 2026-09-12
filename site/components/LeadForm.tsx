"use client";
// CHRM — Lead form. Posts to FORM_ENDPOINT when configured; otherwise opens a pre-filled email.
// Either way, no lead is lost to a dead "#" link.
import { useState } from "react";
import { CONTACT_EMAIL, FORM_ENDPOINT } from "@/lib/site";

type State = "idle" | "sending" | "sent" | "error";

export default function LeadForm() {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("company_website")) return; // honeypot
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      crm: String(data.get("crm") || ""),
      aes: String(data.get("aes") || ""),
      provider: String(data.get("provider") || ""),
      notes: String(data.get("notes") || ""),
      page: typeof window !== "undefined" ? window.location.pathname : "",
    };

    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(`CHRM beta · ${payload.crm} · ${payload.aes} AEs · ${payload.provider}`);
      const body = encodeURIComponent(
        `Name: ${payload.name}\nWork email: ${payload.email}\nCRM: ${payload.crm}\nAEs: ${payload.aes}\nLLM key: ${payload.provider}\n\n${payload.notes}`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setState("sent");
      return;
    }

    try {
      setState("sending");
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="lf lf--done" role="status">
        <p className="lf__done-h">Got it.</p>
        <p className="lf__done-p">
          We reply within one business day with a 20-minute slot to set the beta up with you. If you would rather skip the wait,
          email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="lf" onSubmit={onSubmit} aria-label="Join the free beta">
      <div className="lf__row">
        <label className="lf__field">
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label className="lf__field">
          <span>Work email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <div className="lf__row">
        <label className="lf__field">
          <span>Your CRM</span>
          <select name="crm" defaultValue="HubSpot" required>
            <option>HubSpot</option>
            <option>Pipedrive</option>
            <option>Salesforce</option>
            <option>Other</option>
          </select>
        </label>
        <label className="lf__field">
          <span>Account executives</span>
          <select name="aes" defaultValue="5–10" required>
            <option>1–4</option>
            <option>5–10</option>
            <option>11–25</option>
            <option>26–50</option>
            <option>50+</option>
          </select>
        </label>
      </div>
      <label className="lf__field">
        <span>LLM key you’d bring</span>
        <select name="provider" defaultValue="Anthropic">
          <option>Anthropic</option>
          <option>OpenAI</option>
          <option>Google</option>
          <option>Other / not sure yet</option>
        </select>
      </label>
      <label className="lf__field">
        <span>Anything we should know (optional)</span>
        <textarea name="notes" rows={3} placeholder="Notetaker you use, fields you care about, what broke last time." />
      </label>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
      <div className="lf__actions">
        <button type="submit" className="btn btn--primary" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Join the free beta"}
        </button>
        <span className="lf__fine">Free during the beta. We reply with a 20-minute slot to configure it with you.</span>
      </div>
      {state === "error" && (
        <p className="lf__error" role="alert">
          That didn’t send. Email us directly at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      )}
    </form>
  );
}
