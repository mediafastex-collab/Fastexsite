This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## IT and AI landing page: enquiry emails

`/it-ai-lead-generation/` posts its enquiry form to `/api/enquiry`, a
Cloudflare Pages Function in `functions/api/enquiry.js`. It validates the
submission on the server and emails it to hello@fastexmedia.com through
[Resend](https://resend.com). Until the steps below are done, the form shows
visitors an error and does **not** claim their enquiry was sent.

1. Create a Resend account and add the domain `fastexmedia.com`. Add the DNS
   records Resend lists (SPF, DKIM) in Cloudflare DNS, then wait for Resend to
   mark the domain as verified.
2. Create a Resend API key with sending access.
3. In Cloudflare: Workers & Pages → fastexsite → Settings → Variables and
   Secrets, add these for Production (and Preview if you test there):
   - `RESEND_API_KEY`: the key, stored as a **Secret**
   - `ENQUIRY_FROM`: e.g. `Fastex Media Website <enquiries@fastexmedia.com>`
   - `ENQUIRY_TO`: optional, defaults to `hello@fastexmedia.com`
4. Redeploy, submit a test enquiry, and confirm it arrives at
   hello@fastexmedia.com. Check spam the first time. Replying to the email
   goes straight to the person who enquired.

`next dev` does not run Pages Functions, so the form always shows its error
state locally. To test end to end: `npm run build`, then
`npx wrangler pages dev out` with the variables in a `.dev.vars` file (git-ignored).

Placeholders to fill in `src/data/landing.js` before sending paid traffic:
`calendarUrl`, `privacyPolicyUrl` (no privacy page exists yet), and `proof`
(approved case studies or testimonials).

Conversion events sent to GA4 and `dataLayer`: `cta_click`, `form_start`,
`generate_lead` (successful submission only), `form_error`, `calendar_click`.
Mark `generate_lead` as a key event in GA4.

### Meta pixel and Conversions API

The landing page (only) loads Meta pixel `2238203073389220` and sends:

| Event | When | Browser | Server (Conversions API) |
|---|---|---|---|
| PageView | page load | yes | no |
| Contact | a BOOK YOUR CALL NOW button or calendar link is clicked | yes | `/api/meta-event` |
| Lead | an enquiry email is actually sent | yes | `/api/enquiry` |

Browser and server copies share an `event_id`, so Meta counts each once.
Server events include the IP, user agent, `_fbp`/`_fbc` cookies, and hashed
email (Lead only), city and country.

To switch on the server side, add `META_CAPI_TOKEN` as a **Secret** in
Cloudflare (same place as the Resend variables) and redeploy. To check
events, temporarily add `META_TEST_EVENT_CODE` with the code from
Events Manager → Test events, then remove it. The code lives in
`server/metaCapi.js`.
