import type { Lesson } from "@/content/lessons/types";

export const lesson: Lesson = {
  slug: "phishing",
  title: "Phishing as a System Failure",
  summary: "Spoofing, lookalike domains, sender verification failure, and defense in depth.",
  systemsSecurityCore: "Phishing as a verification failure, not just a user mistake.",
  studentSection: {
    bigIdea: "Phishing isn't just 'a scammer tricks you.' It's a failure in how systems verify identity. When a message claims to be from your bank, your school, or a friend, the system should be able to prove it's really them. Phishing works when that verification fails — or when we don't check it.",
    howItWorks: "A phishing message tries to get you to believe it's from someone trusted (spoofing), act fast (urgency — 'your account will be closed!'), and give something up (password, PIN, OTP code, money). Common technical tricks include lookalike domains such as paypa1.com (with a '1') instead of paypal.com; homoglyphs, characters that look identical but aren't (for example, Cyrillic 'а' vs Latin 'a'); spoofed sender names, where the display name says 'MTN' but the actual address is random; fake urgency designed to bypass careful thinking; and shortened URLs that hide the real destination.",
    whereSystemsFail: "Email and SMS don't always verify the sender. Display names can be faked; SMS sender IDs can be spoofed. Links hide their destination — the text says one thing while the actual URL is another. Humans are the last line of defense, and urgency defeats careful thinking. Without a second factor, a phished password is enough.",
    howToDefend: [
      "Check the actual address or URL, not the display name. Hover or long-press to see the real link.",
      "Never share OTP or PIN codes — legitimate services never ask for them.",
      "Slow down — urgency is a red flag, not a reason to rush.",
      "Go directly — open the app or type the official address yourself instead of clicking.",
      "Enable MFA — so a stolen password alone isn't enough.",
      "Report — tell your teacher, parent, or provider."
    ],
    selfCheck: [
      "What's the difference between a display name and an actual address?",
      "Why is an OTP code dangerous to share?",
      "What does a lookalike domain look like?",
      "Why does urgency make phishing more effective?",
      "Name two layers of defense against phishing."
    ]
  },
  teacherSection: {
    technicalFraming: [
      "Spoofing exploits weak sender authentication. Email defenses include SPF, DKIM, and DMARC — these let a receiving server verify that a message actually came from the claimed domain. When a domain lacks these, spoofing is easier.",
      "SMS sender ID spoofing is common in many regions because SMS lacks built-in sender authentication; the sender ID is often just a text label.",
      "Homoglyph attacks exploit Unicode: visually identical characters from different scripts. Defenders use IDN/punycode checks and domain reputation.",
      "URL obfuscation: shortened links, redirects, and @-tricks (e.g., https://trusted.com@evil.com) hide the true destination. Always parse the registrable domain — the part just before the top-level domain.",
      "Credential phishing plus no MFA equals account takeover. MFA (TOTP, push, hardware keys) reduces this, though real-time phishing proxies can defeat OTPs — which is why phishing-resistant MFA (FIDO2/passkeys) matters.",
      "Defense in depth combines technical controls (DMARC, MFA, link scanning), human controls (verification habits), and process controls (reporting)."
    ],
    teachingTip: "Show students two URLs side by side and have them identify which is real and why — parsing from the right (the registrable domain) is a skill worth practicing.",
    discussionPrompt: "If a message looks perfect but asks you to act urgently and share a code, what should you do — and why is that the safest choice even if the message is real?",
    extension: "Explain DMARC in one sentence — a way for a domain owner to tell the world 'only these servers may send email as me, and here's how to check.'"
  }
};
