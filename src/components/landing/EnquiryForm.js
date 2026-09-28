"use client";

import { useRef, useState } from "react";
import { landing, serviceTypes } from "@/data/landing";
import { metaTrack, newEventId, track } from "@/lib/track";
import styles from "./landing.module.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your work email.";
  else if (!EMAIL_RE.test(values.email.trim()))
    errors.email = "Please enter a valid email address, like name@company.com.";
  if (!values.company.trim()) errors.company = "Please enter your company name.";
  if (!values.serviceType) errors.serviceType = "Please choose a service type.";
  if (!values.consent)
    errors.consent = "Please confirm we can use your details to reply.";
  return errors;
}

const EMPTY = {
  name: "",
  email: "",
  company: "",
  website: "",
  serviceType: "",
  challenge: "",
  consent: false,
};

/**
 * Enquiry form used in the hero and again in the closing section.
 * `id` keeps field ids unique when both instances are on the page, and is
 * sent to analytics as `form_location`.
 */
export default function EnquiryForm({ id, heading }) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | failed
  const [failMessage, setFailMessage] = useState("");
  const started = useRef(false);
  const formRef = useRef(null);
  const resultRef = useRef(null);

  const f = (name) => `${id}-${name}`;

  function update(e) {
    const { name, value, type, checked } = e.target;
    if (!started.current) {
      started.current = true;
      track("form_start", { form_location: id });
    }
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  }

  async function submit(e) {
    e.preventDefault();
    if (status === "sending") return;

    const found = validate(values);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("sending");
    setFailMessage("");
    // Shared with the server-side Conversions API event for deduplication.
    const metaEventId = newEventId();
    try {
      const res = await fetch(landing.enquiryEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          // Honeypot: real people never see or fill this field.
          url2: formRef.current?.elements.url2?.value || "",
          page: typeof window !== "undefined" ? window.location.href : "",
          formLocation: id,
          metaEventId,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Submission failed");
      }
      setStatus("sent");
      track("generate_lead", {
        form_location: id,
        service_type: values.serviceType,
      });
      metaTrack("Lead", { eventId: metaEventId });
      requestAnimationFrame(() => resultRef.current?.focus());
    } catch {
      setStatus("failed");
      setFailMessage(
        "Sorry, your enquiry could not be sent. Nothing was submitted. Please try again, or email us directly at hello@fastexmedia.com."
      );
      track("form_error", { form_location: id });
      requestAnimationFrame(() => resultRef.current?.focus());
    }
  }

  if (status === "sent") {
    return (
      <div
        className={`${styles.formCard} ${styles.thanks}`}
        ref={resultRef}
        tabIndex={-1}
        role="status"
      >
        <span className={styles.thanksMark} aria-hidden="true">
          ✓
        </span>
        <h3>Thank you, {values.name.trim().split(" ")[0]}.</h3>
        <p>
          Your enquiry has been sent. We will reply to{" "}
          <strong>{values.email.trim()}</strong> within one business day to
          arrange a time to talk.
        </p>
        {landing.calendarUrl && (
          <p>
            Prefer to pick a slot now?{" "}
            <a
              href={landing.calendarUrl}
              target="_blank"
              rel="noopener"
              onClick={() => {
              track("calendar_click", { cta_location: id });
              metaTrack("Contact", { server: true });
            }}
            >
              Open the calendar
            </a>
            .
          </p>
        )}
      </div>
    );
  }

  const describe = (name) => (errors[name] ? f(`${name}-error`) : undefined);
  const fieldError = (name) =>
    errors[name] ? (
      <span className={styles.fieldError} id={f(`${name}-error`)}>
        {errors[name]}
      </span>
    ) : null;

  return (
    <form
      ref={formRef}
      className={styles.formCard}
      onSubmit={submit}
      noValidate
      aria-labelledby={f("heading")}
    >
      <h3 id={f("heading")} className={styles.formHeading}>
        {heading}
      </h3>
      <p className={styles.formNote}>
        Takes under a minute. Fields marked * are required.
      </p>

      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label htmlFor={f("name")}>Name *</label>
          <input
            id={f("name")}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update}
            aria-invalid={!!errors.name}
            aria-describedby={describe("name")}
            maxLength={120}
          />
          {fieldError("name")}
        </div>

        <div className={styles.field}>
          <label htmlFor={f("email")}>Work email *</label>
          <input
            id={f("email")}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={update}
            aria-invalid={!!errors.email}
            aria-describedby={describe("email")}
            maxLength={200}
          />
          {fieldError("email")}
        </div>

        <div className={styles.field}>
          <label htmlFor={f("company")}>Company name *</label>
          <input
            id={f("company")}
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={update}
            aria-invalid={!!errors.company}
            aria-describedby={describe("company")}
            maxLength={160}
          />
          {fieldError("company")}
        </div>

        <div className={styles.field}>
          <label htmlFor={f("website")}>Website</label>
          <input
            id={f("website")}
            name="website"
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder="yourcompany.com"
            value={values.website}
            onChange={update}
            maxLength={200}
          />
        </div>

        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label htmlFor={f("serviceType")}>Service type *</label>
          <select
            id={f("serviceType")}
            name="serviceType"
            value={values.serviceType}
            onChange={update}
            aria-invalid={!!errors.serviceType}
            aria-describedby={describe("serviceType")}
          >
            <option value="">Choose what you sell</option>
            {serviceTypes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {fieldError("serviceType")}
        </div>

        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label htmlFor={f("challenge")}>
            What is your main growth challenge?
          </label>
          <textarea
            id={f("challenge")}
            name="challenge"
            rows={3}
            value={values.challenge}
            onChange={update}
            maxLength={2000}
          />
        </div>
      </div>

      {/* Honeypot, hidden from people and assistive tech. */}
      <div className={styles.hp} aria-hidden="true">
        <label htmlFor={f("url2")}>Leave this empty</label>
        <input id={f("url2")} name="url2" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={styles.consent}>
        <input
          id={f("consent")}
          name="consent"
          type="checkbox"
          checked={values.consent}
          onChange={update}
          aria-invalid={!!errors.consent}
          aria-describedby={describe("consent")}
        />
        <label htmlFor={f("consent")}>
          I agree that Fastex Media may use these details to reply to my
          enquiry. We will not add you to a mailing list or share your details.
          See our{" "}
          <a href={landing.privacyPolicyUrl} target="_blank" rel="noopener">
            privacy policy
          </a>
          .
        </label>
      </div>
      {fieldError("consent")}

      {status === "failed" && (
        <p className={styles.formFail} role="alert" ref={resultRef} tabIndex={-1}>
          {failMessage}
        </p>
      )}

      <button
        type="submit"
        className={`${styles.btn} ${styles.btnFull}`}
        disabled={status === "sending"}
        aria-busy={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "BOOK YOUR CALL NOW"}
      </button>

      {landing.calendarUrl && (
        <p className={styles.formAlt}>
          Rather pick a time yourself?{" "}
          <a
            href={landing.calendarUrl}
            target="_blank"
            rel="noopener"
            onClick={() => {
              track("calendar_click", { cta_location: id });
              metaTrack("Contact", { server: true });
            }}
          >
            Open the calendar
          </a>
        </p>
      )}
    </form>
  );
}
