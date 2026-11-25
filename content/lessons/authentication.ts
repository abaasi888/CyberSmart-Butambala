import type { Lesson } from "@/content/lessons/types";

export const lesson: Lesson = {
  slug: "authentication",
  title: "Authentication & Identity Systems",
  summary: "Passwords vs passphrases, hashing, MFA, session tokens, and credential reuse.",
  systemsSecurityCore: "How systems verify identity, and where that verification fails.",
  studentSection: {
    bigIdea: "Authentication is how a system answers one question: 'Are you really who you say you are?' Every account you use — email, social media, mobile money — relies on authentication. When it's weak, anyone can pretend to be you.",
    howItWorks: "There are three ways a system can check who you are: something you know (a password or PIN), something you have (your phone for an OTP code, or a security key), and something you are (a fingerprint or face). Strong systems combine two or more. That's multi-factor authentication (MFA). Good systems don't store your password — they store a hash, a scrambled version created by a one-way function. When you log in, the system hashes what you typed and compares the hashes. After you log in, the system gives your device a session token — like a temporary key — so you don't re-enter your password on every page.",
    whereSystemsFail: "Password reuse means one breach unlocks every account where you used the same password. Weak passwords fall to guessing and dictionary attacks. Without MFA, a stolen password is enough to get in. Stolen session tokens — captured by malware or unsafe Wi-Fi — let an attacker act as you without your password. Phishing OTPs defeats MFA if you share a code.",
    howToDefend: [
      "Use long passphrases (4–5 random words) — length beats complexity.",
      "Never reuse passwords — use a password manager.",
      "Turn on MFA everywhere it's offered.",
      "Never share OTP codes with anyone.",
      "Log out of shared devices and review active sessions.",
      "Keep devices updated — patches fix authentication flaws."
    ],
    selfCheck: [
      "What are the three factors of authentication?",
      "Why do good systems store hashes, not passwords?",
      "What is a session token, and why does it matter?",
      "Why is password reuse dangerous?",
      "How does MFA reduce risk?"
    ]
  },
  teacherSection: {
    technicalFraming: [
      "Hashing uses one-way functions (e.g., bcrypt, Argon2, SHA-256 with salt) so stored credentials can't be reversed. Salting adds unique randomness per password to defeat precomputed rainbow tables.",
      "MFA factors: knowledge (password), possession (TOTP app, SMS, hardware key), inherence (biometrics). Phishing-resistant MFA uses FIDO2/passkeys, which bind authentication to the origin.",
      "Session management: tokens (cookies, JWTs) must be HttpOnly, Secure, SameSite, and expire. Token theft (XSS, unsafe networks) enables session hijacking.",
      "Credential stuffing exploits reuse at scale; rate limiting and breach monitoring mitigate.",
      "Password managers reduce reuse and enable strong, unique credentials; the master password becomes the single high-value secret.",
      "Authentication is the highest-leverage control — most account takeovers begin with weak or phished credentials."
    ],
    teachingTip: "Demonstrate hashing with a simple online SHA-256 tool — type a password, show the hash, change one character, show a totally different hash. Emphasize it's one-way.",
    discussionPrompt: "If a website emails you your password after you click 'forgot password,' what does that tell you about how they store it — and why is that a warning sign?",
    extension: "Explain passkeys in one sentence — a cryptographic key stored on your device that proves it's you without sending a password at all."
  }
};
