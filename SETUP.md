# منصة مكتب طلال — Setup & Deployment

This is the real implementation of the Claude Design handoff in `project/منصة مكتب طلال.dc.html`
(see `README.md` and `chats/chat1.md` for the original design brief). It's a **React + Vite +
TypeScript** frontend with **Firebase** (Auth + Firestore) for accounts/data, and the free AI
legal consultation powered by the **Claude API**.

There are two ways to run the AI consultation backend — pick one:

- **Vercel (recommended)** — the Claude call runs as a Vercel serverless function
  (`app/api/consult.ts`). Free, no credit card, no Firebase Blaze upgrade needed — Firebase stays
  on the free **Spark** plan for Auth + Firestore only.
- **Firebase Cloud Functions** — the Claude call runs as a Firebase Function
  (`functions/src/index.ts`). Requires upgrading the Firebase project to the **Blaze**
  (pay-as-you-go) plan, since Spark can't make outbound calls to external APIs. Useful if you want
  everything on one platform.

Both implementations do the exact same thing (classify the question, ground the answer in Saudi
law with a citation, match a lawyer from Firestore by specialty/rating) — the code just lives in
different places. The rest of this doc covers the **Vercel path**; see the bottom section for the
Firebase Functions alternative.

## Structure

```
app/                 React frontend (Vite + TS) + app/api/consult.ts (Vercel function)
functions/           Alternative: Firebase Cloud Function version of the same endpoint
firebase.json, .firebaserc, firestore.rules, firestore.indexes.json   Firebase project config
```

## 1. Prerequisites

- Node.js 20+
- A Firebase project (**Spark/free plan is enough** for this path — Auth + Firestore only)
- A Vercel account (free) — vercel.com, sign in with GitHub
- `npm i -g firebase-tools` (or use `npx firebase-tools`) — still needed to deploy Firestore
  rules/indexes and for local Auth/Firestore emulation
- An Anthropic API key (console.anthropic.com)

## 2. Create and connect the Firebase project (Auth + Firestore only)

1. Create a project at console.firebase.google.com.
2. Enable **Authentication → Sign-in method → Email/Password**.
3. Enable **Firestore Database** (production mode, pick a region).
4. In **Project settings → General → Your apps**, add a Web app and copy the config values.
5. Edit `.firebaserc` at the repo root and replace `REPLACE_WITH_YOUR_FIREBASE_PROJECT_ID` with
   your project ID.
6. `cp app/.env.example app/.env.local` and fill in the `VITE_FIREBASE_*` values from step 4.
7. Deploy the security rules: `firebase login && firebase deploy --only firestore:rules,firestore:indexes`

## 3. Get a Firebase service-account key (so the Vercel function can read Firestore)

Vercel functions run outside Google Cloud, so `app/api/consult.ts` authenticates with a service
account instead of Firebase's default credentials:

1. Firebase console → **Project settings → Service accounts → Generate new private key** →
   downloads a JSON file.
2. Keep it — you'll paste three fields from it into Vercel env vars in the next step.

## 4. Deploy to Vercel

1. Push this repo to GitHub, then **import it in Vercel** (vercel.com → Add New → Project).
2. Set **Root Directory** to `app` (important — the frontend and `api/` live there, not at the repo root).
3. Under **Environment Variables**, add:

   | Name | Value |
   |---|---|
   | `ANTHROPIC_API_KEY` | your Claude API key |
   | `FIREBASE_PROJECT_ID` | `project_id` from the service-account JSON |
   | `FIREBASE_CLIENT_EMAIL` | `client_email` from the service-account JSON |
   | `FIREBASE_PRIVATE_KEY` | `private_key` from the service-account JSON (paste as-is, including the `\n`s — Vercel preserves them) |
   | `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_STORAGE_BUCKET`, `VITE_FIREBASE_MESSAGING_SENDER_ID`, `VITE_FIREBASE_APP_ID` | from `app/.env.local` (step 2) |

4. Deploy. Vercel auto-detects the Vite build and picks up `app/api/consult.ts` as a serverless
   function at `/api/consult`.

You'll get a real URL like `https://talal-law-platform.vercel.app`.

## 5. Bootstrap the first staff account

Membership requests can only be approved by an **already-active** staff account — so the very
first one has to be activated by hand:

1. On your deployed site, go to `/signup` → "محامٍ / موظف" → create the account.
2. In the Firebase console → Firestore → `users/{that uid}`, change `status` from `pending` to
   `active`.
3. Log in — you now have a working admin/staff account that can approve every future lawyer
   signup from the dashboard's "المحامون والأعضاء" tab.

## 6. (Optional) Seed demo data

Populates a few lawyers (active + pending), clients, cases, consultations and one appointment so
the dashboards aren't empty:

```
cd functions
npm install
GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json npm run seed
```

Uses the same service-account JSON from step 3. All seeded accounts share the password
`Talal@12345`.

## Local development

```
cd app
npm install
npm run dev
```

The frontend runs against your **live** Firebase project by default (fastest way to iterate on
UI). `/api/consult` won't work under plain `vite dev` though, since that route only exists once
Vercel (or its CLI) is serving the app — for local testing of the consultation flow, install the
Vercel CLI and run `vercel dev` from `app/` instead (create an `app/.env.local` with the same
`ANTHROPIC_API_KEY` / `FIREBASE_*` values as the Vercel dashboard — `vercel dev` reads them from
there).

For fully offline development (no live Firebase project needed at all), run
`firebase emulators:start --only auth,firestore` and set `VITE_USE_FIREBASE_EMULATORS=true` in
`app/.env.local` — Auth and Firestore will point at the emulator (`app/src/firebase.ts` already
has this wired up). The consultation endpoint still needs real credentials either way, since it
calls the live Claude API.

## What's real vs. simplified

- **Real**: Firebase Auth (email/password), Firestore-backed clients/lawyers/cases/consultations,
  role-based security rules, the lawyer approval workflow, and the AI consultation calling Claude
  live and matching a real lawyer from Firestore by specialty/rating.
- **Simplified / not wired up**: the "نفاذ الوطني الموحّد" SSO button is presentational only (real
  government SSO integration is out of scope); "عميل جديد" in the admin Clients tab copies the
  signup link rather than creating accounts server-side (creating other users' accounts requires
  an admin-privileged backend endpoint, which wasn't in the original design's scope).

---

## Alternative: all-Firebase path (Cloud Functions + Blaze)

If you'd rather keep everything on Firebase instead of splitting hosting to Vercel:

1. Do steps 1–2 above, but also **upgrade the Firebase project to the Blaze plan**
   (Settings → Usage and billing) — required for Cloud Functions to call the external Anthropic API.
2. Set the Claude key as a Functions secret instead of a Vercel env var:
   ```
   cd functions
   npm install
   firebase functions:secrets:set ANTHROPIC_API_KEY
   ```
3. Deploy rules, indexes and the function together:
   ```
   firebase deploy --only firestore:rules,firestore:indexes,functions
   ```
4. Build and deploy the frontend to Firebase Hosting instead of Vercel:
   ```
   cd app && npm install && npm run build && cd ..
   firebase deploy --only hosting
   ```
5. In this path, the frontend should call the Firebase Function instead of `/api/consult` — swap
   `app/src/lib/consultApi.ts` back to using `httpsCallable(functions, 'aiConsult')` (see git
   history for the pre-Vercel version) and re-add `functions`/`connectFunctionsEmulator` to
   `app/src/firebase.ts`.
6. Local full-stack testing: `firebase emulators:start --only auth,firestore,functions` with
   `functions/.secret.local` holding `ANTHROPIC_API_KEY=...` for the emulator to pick up.

Steps 5–6 in the main bootstrap/seed sections above apply the same way regardless of which backend
you choose.
