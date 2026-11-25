import type { Lesson } from "@/content/lessons/types";

export const lesson: Lesson = {
  slug: "software-integrity",
  title: "Software Integrity & Safe Installation",
  summary: "App permissions, malicious APKs, supply chain, and sideloading.",
  systemsSecurityCore: "Trusting software means verifying its origin and integrity.",
  studentSection: {
    bigIdea: "When you install an app, you're trusting its author with access to your phone — your photos, messages, contacts, and sometimes your money. Software integrity is about making sure the app is really what it claims to be, from who it claims to be, and hasn't been tampered with.",
    howItWorks: "Apps run with permissions — the system asks your approval to use the camera, contacts, SMS, location, or storage. A legitimate app asks only for what it needs. A malicious app asks for far more, or hides what it does. Where apps come from matters: official app stores review apps and sign them, while sideloading (installing APK files from websites or messages) bypasses those checks and is a major vector for malware. Even real apps can be compromised if an attacker gains access to the developer's build process and inserts malicious code — a supply chain attack.",
    whereSystemsFail: "Over-permissioned apps — a flashlight app requesting SMS access is a red flag. Fake apps clone popular apps with malware inside. Sideloaded APKs from untrusted sources. Unpatched apps with known vulnerabilities. Compromised updates that push malicious code through a trusted channel.",
    howToDefend: [
      "Install only from official stores.",
      "Review permissions — deny anything the app doesn't genuinely need.",
      "Check the developer — reviews, download counts, publisher name.",
      "Keep apps updated — updates patch vulnerabilities.",
      "Avoid cracked or pirated apps — they're a common malware vector.",
      "Remove unused apps — less attack surface."
    ],
    selfCheck: [
      "Why does it matter where you download an app from?",
      "What is a red flag in an app's permission request?",
      "What is sideloading, and why is it risky?",
      "What is a supply chain attack?",
      "Name two ways to check an app is legitimate."
    ]
  },
  teacherSection: {
    technicalFraming: [
      "App signing uses cryptographic certificates; the OS verifies the signature before install. Tampered APKs fail signature checks unless re-signed.",
      "Permission models: Android's runtime permissions and iOS's entitlement model limit access; least privilege means granting the minimum.",
      "Sideloading disables store review and often signature verification warnings; it's a leading malware vector in regions with limited official store access.",
      "Supply chain attacks (compromised build pipelines, malicious dependencies) can affect even trusted apps — defenders need integrity monitoring, pinned dependencies, and reproducible builds.",
      "Repackaged malware: attackers decompile popular apps, insert malicious code, re-sign, and distribute. Signature and reputation checks catch many, but not all.",
      "Update hygiene matters: unpatched apps retain known CVEs; automatic updates reduce exposure."
    ],
    teachingTip: "Have students open their phone's app permission settings and identify one permission to revoke — makes least privilege tangible.",
    discussionPrompt: "A friend sends you an APK for a popular game because it's 'free.' What are the risks, and what would you check before installing?",
    extension: "Explain app signing in one sentence — a digital seal that proves the app came from its developer and hasn't been altered."
  }
};
