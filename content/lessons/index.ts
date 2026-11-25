export interface Lesson {
  slug: string;
  title: string;
  summary: string;
  systemsSecurityCore: string[];
  studentSection: {
    bigIdea: string;
    howItWorks: string;
    whereSystemsFail: string;
    howToDefend: string[];
    selfCheck: string[];
  };
  teacherSection: {
    technicalFraming: string[];
    teachingTip: string;
    discussionPrompt: string;
    extension: string;
  };
}

export const lessons: Lesson[] = [
  {
    slug: "threat-models",
    title: "Threat Models: How Attackers Think About Everyday Systems",
    summary: "Map what matters, who or what could put it at risk, and how layers of protection reduce harm.",
    systemsSecurityCore: ["Assets", "Threats", "Vulnerabilities", "Risk", "Attack surface", "Defense in depth"],
    studentSection: {
      bigIdea: "A threat model is a practical way to ask what you are protecting, what could go wrong, and which safeguards would help.",
      howItWorks: "Start with an asset (something valuable, such as an account or a school device). Identify a threat, a weakness it could use, and the likely impact. Risk helps you decide which protections matter most.",
      whereSystemsFail: "A system can have several weak points: a shared password, an unlocked phone, a missing update, or a person who has not been told what to check. Protecting only one point may leave others exposed.",
      howToDefend: [
        "Name the information, account, or device that matters.",
        "Think through realistic ways it could be lost, changed, or exposed.",
        "Reduce weaknesses with practical controls such as screen locks, updates, and limited access.",
        "Use more than one safeguard so one mistake does not cause the whole system to fail."
      ],
      selfCheck: [
        "What is one asset in a classroom technology setup?",
        "How is a threat different from a vulnerability?",
        "Name two layers that could protect the same account."
      ]
    },
    teacherSection: {
      technicalFraming: ["Asset: an item or capability with value.", "Threat: a potential cause of harm.", "Vulnerability: a weakness that may be exploited.", "Risk: a combination of likelihood and impact.", "Attack surface: the paths through which a system can be reached."],
      teachingTip: "Use a familiar system, such as a locked classroom cupboard, before mapping the same ideas to a phone or account. Keep examples defensive and age-appropriate.",
      discussionPrompt: "If one protection fails, what other layer could still prevent or reduce harm?",
      extension: "Have small groups draw a simple data-flow diagram for a class sign-in process and mark assets, trust boundaries, and safeguards."
    }
  },
  {
    slug: "authentication-and-identity",
    title: "Authentication & Identity Systems",
    summary: "Explore how systems check who is signing in and why passwords, passphrases, and MFA work best together.",
    systemsSecurityCore: ["Identity", "Authentication", "Password hashing", "Multi-factor authentication", "Session tokens", "Credential reuse"],
    studentSection: {
      bigIdea: "Authentication checks whether someone can prove control of an account. A password is one kind of proof, not a reason to share access.",
      howItWorks: "A service compares a sign-in secret with a protected verifier rather than simply showing the secret back. After a successful sign-in, a session token can let a device continue to use the account for a while.",
      whereSystemsFail: "Short or reused passwords can be guessed or exposed elsewhere. A stolen session token may let someone bypass a password prompt. A one-time code can also be stolen if someone tricks you into sharing it.",
      howToDefend: [
        "Use a long, unique passphrase for each important account.",
        "Turn on multi-factor authentication when it is available.",
        "Never share passwords, recovery codes, or one-time sign-in codes.",
        "Sign out on shared devices and protect the device with a screen lock.",
        "Use account recovery options you can access safely."
      ],
      selfCheck: [
        "Why should different accounts have different passwords?",
        "What does a second authentication factor add?",
        "Why should a one-time code stay private?"
      ]
    },
    teacherSection: {
      technicalFraming: ["Authentication establishes control of an identity; authorization determines what that identity may do.", "Well-designed services store salted password hashes, not reversible plaintext passwords.", "Session tokens are bearer credentials and must be protected from theft and replay.", "MFA combines factors from distinct categories rather than simply asking another question."],
      teachingTip: "Use the analogy of a school ID plus a separate key to explain factors, then clarify that security questions are not always a separate factor.",
      discussionPrompt: "What can a service do to limit harm after a session token is stolen?",
      extension: "Compare a shared classroom login with individual accounts and list the privacy, accountability, and recovery trade-offs."
    }
  },
  {
    slug: "phishing",
    title: "Phishing as a System Failure",
    summary: "Understand spoofing, lookalike domains, sender verification, and why layered defenses matter.",
    systemsSecurityCore: ["Social engineering", "Spoofing", "Lookalike domains", "Sender verification", "Layered controls"],
    studentSection: {
      bigIdea: "Phishing tricks people into trusting a message or website so they reveal information or take an unsafe action.",
      howItWorks: "A message may imitate a familiar person or service, create urgency, and lead to a copied sign-in page. The visible sender name can be misleading; the actual address and destination matter.",
      whereSystemsFail: "A message filter may miss a new scam, a familiar logo can be copied, and a hurried person may tap before checking. One warning sign is not always enough to judge a message.",
      howToDefend: [
        "Pause when a message demands urgent action, secrecy, money, or a password.",
        "Check the full sender address and the destination of a link without opening it.",
        "Contact the person or organisation through a trusted channel you already know.",
        "Never share a password or one-time code in response to a message.",
        "Report or delete suspicious messages and ask a trusted person if unsure."
      ],
      selfCheck: [
        "Why is a display name not enough to verify a sender?",
        "What is a safer way to check an unexpected request?",
        "What should you do if you already entered your password?"
      ]
    },
    teacherSection: {
      technicalFraming: ["Spoofing misrepresents a sender or source.", "Lookalike domains use similar spelling or characters to imitate trusted sites.", "Email authentication mechanisms help receiving systems assess domain-level legitimacy but do not prove every message is safe.", "People, reporting workflows, filters, and account protections form defense in depth."],
      teachingTip: "Show fictional examples with clearly reserved names and domains. Do not send live phishing links or ask learners to disclose personal account details.",
      discussionPrompt: "Which checks can a person make, and which protections should a service provide automatically?",
      extension: "Build a class checklist that separates message clues, link checks, independent verification, and reporting."
    }
  },
  {
    slug: "software-integrity",
    title: "Software Integrity & Safe Installation",
    summary: "Learn why app permissions, trusted sources, updates, and software supply chains affect device safety.",
    systemsSecurityCore: ["Software integrity", "Permissions", "Malicious APKs", "Supply chain", "Sideloading", "Updates"],
    studentSection: {
      bigIdea: "Installing software gives it a place on your device and may give it access to information or functions. Choose carefully and review what it asks to do.",
      howItWorks: "An app package contains program files and information about the app. A platform and its distribution store can check some details, but no single check guarantees that an app is safe.",
      whereSystemsFail: "A harmful or modified app may be shared outside a trusted store, ask for more access than it needs, or exploit outdated software. A legitimate app can also have a security flaw.",
      howToDefend: [
        "Prefer trusted app stores and official publisher sources.",
        "Avoid installing APK files sent by strangers or found through unexpected links.",
        "Review requested permissions and deny access that is not needed.",
        "Keep the operating system and apps updated when updates are available.",
        "Ask a trusted adult or teacher before installing software on a shared device."
      ],
      selfCheck: [
        "Why can an app permission affect privacy?",
        "Does a trusted store guarantee that every app is harmless?",
        "What should you do if an app requests access that seems unrelated?"
      ]
    },
    teacherSection: {
      technicalFraming: ["Package signatures help verify that an update comes from the same signing identity; they do not prove benign behavior.", "Supply-chain risk can enter through build tools, dependencies, signing keys, or distribution.", "Sideloading bypasses some store-based review and update pathways.", "Least privilege limits an app's access to the data and capabilities it needs."],
      teachingTip: "Use a permission list from a fictional app and ask students to match each permission to a feature. Avoid asking learners to install unfamiliar apps.",
      discussionPrompt: "What trust signals can help, and what are their limits?",
      extension: "Compare the permissions requested by two familiar categories of apps and identify where least privilege could reduce risk."
    }
  },
  {
    slug: "mobile-money-integrity",
    title: "Mobile Money & Transaction Integrity",
    summary: "Learn how PINs, independent callback checks, and transaction verification help prevent spoofing and replay.",
    systemsSecurityCore: ["PIN safety", "Transaction integrity", "Callback verification", "HMAC", "Replay", "Confirmation logic"],
    studentSection: {
      bigIdea: "A payment is only complete when the trusted service confirms the correct transaction. A message or screenshot alone may be faked.",
      howItWorks: "A payment request identifies details such as an amount and recipient. The service processes it and returns a confirmation. A trusted system checks that the confirmation matches the original request before treating it as complete.",
      whereSystemsFail: "A caller may pretend to be an agent and ask for a PIN. A fake message can imitate a payment notice. A repeated or delayed request can also confuse a system if it does not check transaction identity and status.",
      howToDefend: [
        "Keep your mobile money PIN and one-time codes private; a genuine helper should not ask you to disclose them.",
        "Use the provider's official app, menu, or support channel to check a transaction.",
        "Confirm the recipient and amount on the official service before approving.",
        "Do not rely only on a screenshot or forwarded message as proof of payment.",
        "If something looks wrong, stop and contact the provider through a known official channel."
      ],
      selfCheck: [
        "Why is an incoming message not enough proof that money arrived?",
        "What does independently checking through the official service add?",
        "Why should a system detect duplicate transaction requests?"
      ]
    },
    teacherSection: {
      technicalFraming: ["A transaction should have a unique identifier and an explicit state transition.", "A trusted server-to-server callback should be authenticated, checked against the expected transaction, and made idempotent.", "HMAC can provide message integrity and authenticity when keys, canonicalization, and verification are handled securely.", "Replay defenses include freshness checks, nonces or timestamps, transaction IDs, and duplicate handling."],
      teachingTip: "Keep consumer advice distinct from implementation details: students should verify using official channels and never handle secret keys or disclose PINs.",
      discussionPrompt: "What could go wrong if an application trusts the text on a screen without checking the provider's transaction status?",
      extension: "Draw a high-level payment flow and mark where identity, integrity, freshness, and confirmation checks belong. Do not use real account credentials."
    }
  },
  {
    slug: "data-protection",
    title: "Data Protection & Privacy by Design",
    summary: "Explore data minimization, least privilege, privacy settings, and safer ways to handle personal information.",
    systemsSecurityCore: ["Data minimization", "Least privilege", "Privacy settings", "Purpose limitation", "Access control", "Privacy by design"],
    studentSection: {
      bigIdea: "Personal information deserves care. A system is safer when it collects only what it needs and lets only the right people access it.",
      howItWorks: "Information may be collected, stored, shared, and later deleted. Privacy by design considers these steps early, chooses a clear purpose, and limits data and access throughout its use.",
      whereSystemsFail: "Collecting extra details creates more information to protect. Shared devices, broad permissions, weak settings, and unclear retention can expose information to people who do not need it.",
      howToDefend: [
        "Share only the information needed for a clear purpose.",
        "Check who can see your profile, posts, photos, and location.",
        "Ask before sharing another person's photo or personal details.",
        "Use privacy settings and sign out of shared devices.",
        "Tell a trusted adult if someone pressures you to share private information."
      ],
      selfCheck: [
        "What does data minimization mean?",
        "Why should access be limited to people who need it?",
        "Which privacy setting could you review on an account you use?"
      ]
    },
    teacherSection: {
      technicalFraming: ["Data minimization reduces collection and retention to what a defined purpose requires.", "Least privilege limits user, service, and application access.", "Privacy by design integrates privacy requirements into system decisions from the outset.", "Retention, deletion, consent, and access controls should be explicit and appropriate to local policy."],
      teachingTip: "Use fictional student profiles for classroom exercises. Do not collect real personal data as part of the lesson.",
      discussionPrompt: "What information would a class sign-up form genuinely need, and what could it leave out?",
      extension: "Redesign a fictional data-collection form by stating its purpose, removing unnecessary fields, and defining who can access the results."
    }
  }
];

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug);
}
