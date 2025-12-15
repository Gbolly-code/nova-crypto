## Crypto Checkout UI

Frontend implementation of a simple crypto checkout flow (similar to Stripe Checkout, but for crypto) using **Next.js 16** and **TypeScript**.

Implemented screens:
- `Recipient Details` – form to capture recipient email and phone number
- `Send ETH` – payment instruction screen with address, payment details, and confirmation button

---

## Setup

1. **Clone the repository**

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open the app**

Visit `http://localhost:3000` in your browser.

Key routes:
- `/recipient-details` – Recipient details form (email + phone number with country code)
- `/send-eth` – Send ETH instructions page shown after clicking **Next**

---

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 (utility classes)
- **Icons / Flags**: `country-flag-icons` for country flags

---

## Assumptions & Trade-offs

- **Frontend-only**: No backend or real payment integration. All data (amount, network, wallet, address) is mocked on the client.
- **Flow**: Simple linear flow – `Recipient Details` → `Send ETH` page. State is not persisted across reloads.
- **Validation**:
  - Email: basic format check using a simple regex.
  - Phone: basic length check after stripping non-numeric characters.
  These are intentionally minimal to keep focus on UI and component structure.
- **Country list**: Only a subset of countries is included for the dropdown (enough to demonstrate the UX).
- **Accessibility**: Inputs and buttons have labels and focus styles, but the app is not a full accessibility audit.

---

## Running Linting

```bash
npm run lint
```

---

## Deployment

This app is designed to be deployed on **Vercel**:

1. Push the project to a GitHub repository.
2. Go to Vercel, import the GitHub repo, and select the project.
3. Accept the default Next.js settings and deploy.

Vercel will automatically build and provide a live URL you can share as part of the assessment.

