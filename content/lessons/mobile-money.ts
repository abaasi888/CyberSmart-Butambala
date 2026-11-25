import type { Lesson } from "@/content/lessons/types";

export const lesson: Lesson = {
  slug: "mobile-money",
  title: "Mobile Money & Transaction Integrity",
  summary: "PINs, callback verification, HMAC, replay and spoofing, and confirmation logic.",
  systemsSecurityCore: "How systems prove a transaction is genuine, and how that proof fails.",
  studentSection: {
    bigIdea: "Mobile money moves real money through systems — and those systems must be able to prove a transaction is genuine. When verification fails, attackers can trick a system into confirming a payment that never happened, or into sending money to the wrong place. This is transaction integrity.",
    howItWorks: "When you pay with mobile money, several steps happen: you enter the amount and the recipient; you confirm with your PIN; the system sends a request to the payment provider; the provider processes it and sends a callback (a notification) back to confirm success; the system marks the payment as complete. The PIN proves it's you. The callback proves the payment actually happened. If a system trusts a callback without verifying it, an attacker can spoof a fake 'payment successful' message.",
    whereSystemsFail: "Shared PINs let someone authorize payments. Social engineering: 'an agent' calls asking for your PIN or OTP, though no legitimate agent ever needs it. Fake confirmations: attackers send fake SMS 'payment received' messages to trick sellers. Unverified callbacks: weak systems accept payment confirmations without cryptographic checks (HMAC signatures), enabling replay or spoofing attacks. Replay attacks resend a valid confirmation to trigger a duplicate payment.",
    howToDefend: [
      "Never share your PIN or OTP — with anyone, ever.",
      "Confirm in the app, not from an SMS alone — check your actual balance.",
      "Verify the recipient before sending.",
      "Treat urgency as a red flag — scammers rush you.",
      "Report suspicious calls to your provider.",
      "For developers: verify callbacks with HMAC signatures, check timestamps and nonces to prevent replay, and never trust client-side confirmations."
    ],
    selfCheck: [
      "What does your PIN prove, and what does a callback prove?",
      "Why should you never share your PIN or OTP?",
      "What is a fake confirmation scam?",
      "What is a replay attack?",
      "Why is checking your actual balance safer than trusting an SMS?"
    ]
  },
  teacherSection: {
    technicalFraming: [
      "Transaction integrity requires authenticity (the request came from the right party), integrity (it wasn't altered), and freshness (it isn't a replay). HMAC (hash-based message authentication code) with a shared secret provides authenticity and integrity.",
      "Replay protection uses nonces or timestamps with a validity window; the server rejects duplicates.",
      "Webhook and callback verification: payment providers sign callbacks; systems must verify signatures before marking a payment complete. Trusting unsigned callbacks enables payment spoofing.",
      "Idempotency keys prevent duplicate processing if a callback is retried.",
      "Social engineering targets the human layer: PIN or OTP disclosure defeats technical controls. Out-of-band verification (checking balance in-app) is a defense.",
      "Mobile money fraud often combines technical weakness (unverified callbacks) with human weakness (shared PINs) — defense in depth applies to both."
    ],
    teachingTip: "Walk through a payment step by step on the board, marking where verification happens — then ask where an attacker could interfere.",
    discussionPrompt: "A seller receives an SMS saying 'Payment received' but the money never arrives. What system failure could explain this, and how should the seller verify?",
    extension: "Explain HMAC in one sentence — a way to prove a message came from someone who holds a shared secret and wasn't changed in transit."
  }
};
