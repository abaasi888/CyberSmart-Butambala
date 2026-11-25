import type { Lesson } from "@/content/lessons/types";

export const lesson: Lesson = {
  slug: "threat-models",
  title: "Threat Models: How Attackers Think About Everyday Systems",
  summary: "Assets, threats, vulnerabilities, risk, attack surface, and defense in depth.",
  systemsSecurityCore: "Threat modeling applied to everyday systems.",
  studentSection: {
    bigIdea: "Every system you use — your phone, your social media account, your mobile money — has things worth protecting (assets), people who might want to take them (threats), and weaknesses that let them in (vulnerabilities). Security is about understanding all three before something goes wrong. This is called a threat model.",
    howItWorks: "Think of your phone like a house. Assets are what's inside (photos, messages, mobile money, contacts). Threats are who might try to get in (a thief, a scammer, someone who found your unlocked phone). Vulnerabilities are the weak points (a weak PIN, an app with too many permissions, a shared charger cable). Attack surface is every way in (the lock screen, apps, Bluetooth, Wi-Fi, links you tap). A good defender doesn't just ask 'is my phone locked?' They ask: What am I protecting? Who wants it? How could they get it? What's my weakest point?",
    whereSystemsFail: "Most people only protect against the threats they've heard of (for example, 'don't click links'). Attackers look for the path of least resistance — the unlocked window, the reused password, the app that asks for everything. Security fails when we protect one door and leave another open.",
    howToDefend: [
      "Lock screen (first layer).",
      "Strong PIN or passphrase (second layer).",
      "App permissions reviewed (third layer).",
      "Updates installed (patches known vulnerabilities).",
      "Backups (so a breach doesn't destroy your data).",
      "If one layer fails, the others still protect you."
    ],
    selfCheck: [
      "Name three assets on your phone.",
      "Who are two possible threats to those assets?",
      "What is one vulnerability you could fix today?",
      "Why is relying on one protection risky?"
    ]
  },
  teacherSection: {
    technicalFraming: [
      "A threat model formally identifies assets, adversaries, attack vectors, and mitigations. Common frameworks include STRIDE (Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege) and attack trees.",
      "Attack surface is the sum of all points where an attacker can interact with a system (network interfaces, input fields, APIs, physical access, human users).",
      "Defense in depth is a layered control strategy: preventive (locks, auth), detective (logging, alerts), and corrective (backups, recovery).",
      "Least privilege means granting only the access needed. A student's phone app requesting contacts, SMS, and location is a privilege problem.",
      "Risk = likelihood × impact. A low-likelihood, high-impact threat (account takeover of a mobile money account) may deserve more attention than a high-likelihood, low-impact one (a spam message)."
    ],
    teachingTip: "Have students draw a simple threat model for their own phone — assets in the center, threats around, vulnerabilities as gaps. This makes the abstract concrete.",
    discussionPrompt: "If you had to protect one thing on your phone above all else, what would it be — and what layers would you use?",
    extension: "Introduce the idea of attack trees: break a goal (e.g., 'steal a phone') into steps and ask where each step could be stopped."
  }
};
