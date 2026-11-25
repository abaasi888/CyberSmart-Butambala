import type { Lesson } from "@/content/lessons/types";

export const lesson: Lesson = {
  slug: "privacy",
  title: "Data Protection & Privacy by Design",
  summary: "Data collection, least privilege, privacy settings, and data minimization.",
  systemsSecurityCore: "Protecting data by default, not as an afterthought.",
  studentSection: {
    bigIdea: "Every app and website collects data about you — sometimes more than you realize. Privacy by design means systems should protect your data by default, not as an afterthought. As a user, you can also reduce what you give away. Data minimization means collect and share only what's needed.",
    howItWorks: "Systems collect data to work: your name to create an account, your location for maps, your contacts to find friends. But some collect far more than needed — and share it with third parties, advertisers, or data brokers. Least privilege applies to data too: an app should access only the data it truly needs, only when it needs it. Your data has value — to advertisers, to scammers, and to anyone who can use it to impersonate or target you.",
    whereSystemsFail: "Over-collection: apps requesting data they don't need. Weak default settings: profiles public by default. Third-party sharing: data passed to partners without clear consent. Data breaches: stored data exposed when systems are compromised. Poor deletion: data kept long after it's needed.",
    howToDefend: [
      "Review privacy settings — make accounts private by default where possible.",
      "Limit app permissions — deny unnecessary access.",
      "Share less — think before posting personal details, location, or ID photos.",
      "Use strong, unique credentials — breaches are less damaging if credentials aren't reused.",
      "Read the data an app requests before installing.",
      "Delete unused accounts and old data."
    ],
    selfCheck: [
      "What does privacy by design mean?",
      "What is data minimization?",
      "Why is over-collection a risk?",
      "Name two privacy settings you can change today.",
      "Why does sharing less reduce your risk?"
    ]
  },
  teacherSection: {
    technicalFraming: [
      "Privacy by design (Cavoukian's principles): proactive not reactive, privacy as default, embedded into design, full functionality, end-to-end security, visibility and transparency, respect for user privacy.",
      "Data minimization and purpose limitation are core principles in frameworks like GDPR; systems should collect only what's necessary for a stated purpose.",
      "Least privilege extends to data access: services should access only required fields, with role-based access control.",
      "Data lifecycle: collection, storage, processing, sharing, retention, deletion. Weaknesses at any stage create risk.",
      "Breach impact depends on what was stored — hashed passwords and minimized data reduce harm.",
      "Third-party risk: SDKs and analytics can exfiltrate data; consent and transparency are defenses."
    ],
    teachingTip: "Have students audit one app's privacy label or permissions and list what data it collects — then discuss whether each item is necessary.",
    discussionPrompt: "An app asks for your contacts to 'help you find friends.' What are the privacy trade-offs, and how would you decide?",
    extension: "Explain data minimization in one sentence — collect only the data you actually need, for only as long as you need it."
  }
};
