import { createWriteStream } from "node:fs";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";
import { lesson as threatModels } from "../content/lessons/threat-models";
import { lesson as authentication } from "../content/lessons/authentication";
import { lesson as phishing } from "../content/lessons/phishing";
import { lesson as softwareIntegrity } from "../content/lessons/software-integrity";
import { lesson as mobileMoney } from "../content/lessons/mobile-money";
import { lesson as privacy } from "../content/lessons/privacy";
import { lesson as threatModelsLg } from "../content/lessons/threat-models.lg";
import { lesson as authenticationLg } from "../content/lessons/authentication.lg";
import { lesson as phishingLg } from "../content/lessons/phishing.lg";
import { lesson as softwareIntegrityLg } from "../content/lessons/software-integrity.lg";
import { lesson as mobileMoneyLg } from "../content/lessons/mobile-money.lg";
import { lesson as privacyLg } from "../content/lessons/privacy.lg";
import type { Lesson } from "../content/lessons/types";

type PDFDoc = InstanceType<typeof PDFDocument>;

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const downloadDirectory = path.join(projectRoot, "public", "downloads");
const assetsDirectory = path.join(scriptDirectory, "assets");
const lessons: Lesson[] = [
  threatModels,
  authentication,
  phishing,
  softwareIntegrity,
  mobileMoney,
  privacy
];
const lugandaLessons: Lesson[] = [
  threatModelsLg,
  authenticationLg,
  phishingLg,
  softwareIntegrityLg,
  mobileMoneyLg,
  privacyLg
];

const FOOTER = "CyberSmart Butambala · CC BY-SA 4.0 · cybersmartbutambala.org";
const ACKNOWLEDGMENT = "Supported by the Internet Society Fellowship Program.";
const LICENSE_NOTE = "Educational materials are licensed under CC BY-SA 4.0.";

interface PrimaryGuide {
  bigIdea: string;
  howItWorks: string;
  staySafe: string[];
  check: string[];
}

const primaryGuides: Record<string, PrimaryGuide> = {
  "threat-models": {
    bigIdea: "Your phone and accounts hold things you care about. Think about what you want to keep safe and what might go wrong.",
    howItWorks: "Your photos, messages, and money are important. A weak PIN, an unlocked phone, or an app with too much access can put them at risk.",
    staySafe: [
      "Lock your screen with a strong PIN.",
      "Review what each app is allowed to use.",
      "Install updates and keep a backup of important information."
    ],
    check: [
      "Name one thing on your phone you want to protect.",
      "Name one way you can protect it today."
    ]
  },
  authentication: {
    bigIdea: "A password helps a service check that it is really you. Keep passwords and sign-in codes private.",
    howItWorks: "Use a long, different passphrase for each account. Some services also ask for a code from your phone; this extra check helps protect your account.",
    staySafe: [
      "Do not reuse passwords on different accounts.",
      "Never tell anyone your one-time sign-in code.",
      "Sign out when using a shared device."
    ],
    check: [
      "Why should your accounts have different passwords?",
      "Should you share a one-time code with a caller?"
    ]
  },
  phishing: {
    bigIdea: "A scam message may pretend to be from someone you trust so you will share a password, code, or money.",
    howItWorks: "A message can use a copied name or a lookalike link. It may say you must act quickly. Pause and check before you tap or reply.",
    staySafe: [
      "Check who really sent the message and where a link goes.",
      "Open the official app yourself instead of following a surprise link.",
      "Ask a trusted adult when a message feels urgent or strange."
    ],
    check: [
      "What can you do instead of tapping an unexpected link?",
      "Why might a message tell you to hurry?"
    ]
  },
  "software-integrity": {
    bigIdea: "An app can use parts of your phone. Install apps from trusted sources and check what access they request.",
    howItWorks: "Apps may ask to use your camera, contacts, or location. An app should only ask for access it needs to do its job.",
    staySafe: [
      "Use official app stores and trusted publishers.",
      "Say no to permissions an app does not need.",
      "Keep apps updated and avoid APK files from messages or strangers."
    ],
    check: [
      "What is one warning sign in an app's permission request?",
      "Why is it safer to use a trusted app store?"
    ]
  },
  "mobile-money": {
    bigIdea: "A message saying a payment happened is not proof by itself. Check the payment using the official service.",
    howItWorks: "A payment uses the amount, recipient, and your private PIN. The provider confirms the payment through its service.",
    staySafe: [
      "Never share your PIN or one-time code.",
      "Check the recipient and amount before approving.",
      "Check your balance in the official service, not just a text message."
    ],
    check: [
      "Why should you check your balance after a payment?",
      "Should you tell an agent your PIN?"
    ]
  },
  privacy: {
    bigIdea: "Personal information is important. Share only what is needed and choose who can see it.",
    howItWorks: "Apps and websites may collect details about you. Privacy settings help control what is shared and who can access it.",
    staySafe: [
      "Review who can see your posts, photos, and location.",
      "Give apps only the permissions they need.",
      "Ask before sharing another person's photo or details."
    ],
    check: [
      "What does it mean to share only what is needed?",
      "Name one privacy setting you can check."
    ]
  }
};

const primaryGuidesLg: Record<string, PrimaryGuide> = {
  "threat-models": {
    bigIdea: "Essimu yo ne akawunti zo birina ebintu by'oyagala. Lowooza ku kiki ky'oyagala okukuuma n'ekiyinza okugenda obubi.",
    howItWorks: "Ebifaananyi byo, obubaka bwo, ne ssente zo bya mugaso. PIN ennyangu, essimu etasiddwa, oba app erina obuyinza obusukkiridde biyinza okubiteeka mu kabi.",
    staySafe: [
      "Siba essimu yo ne PIN ey'amaanyi.",
      "Kebera obuyinza buli app bw'esobola okukozesa.",
      "Teeka updates era ekuuma kopi y'amawulire amakulu."
    ],
    check: [
      "Yogera ekintu kimu ku ssimu yo ky'oyagala okukuuma.",
      "Yogera engeri emu gy'oyinza okukozesa okukikuuma leero."
    ]
  },
  authentication: {
    bigIdea: "Password eyamba empeereza okukakasa nti ddala ggwe. Ebyama byo ne codes ez'okuyingira bikuume nga bya kyama.",
    howItWorks: "Kozesa passphrase empanvu ey'enjawulo ku buli akawunti. Empeereza ezimu zisaba ne code eva ku ssimu yo; okukakasa kuno okwongerako kuyamba okukuuma akawunti yo.",
    staySafe: [
      "Toddamu kukozesa password ku akawunti ez'enjawulo.",
      "Tobuulira muntu yenna code ey'okuyingira ey'ekiseera kimu.",
      "Fuluma ku kyuma ekigabanyiziddwa."
    ],
    check: [
      "Lwaki akawunti zo zirina okuba ne password ez'enjawulo?",
      "Osaana okugabana code ey'ekiseera kimu n'oyo akukubira?"
    ]
  },
  phishing: {
    bigIdea: "Obubaka obw'obulimba buyinza okwefuula obw'omuntu gw'wesiga okusobola okukusaba password, code, oba ssente.",
    howItWorks: "Obubaka buyinza okukozesa erinnya erikoppe, oba link efaanana ng'eyesigika. Buyinza okugamba nti olina okukola mangu. Yimirira okebere nga tonnonyiga oba okuddamu.",
    staySafe: [
      "Kebera ani ddala atumye obubaka n'ekifo link gy'edda.",
      "Ggula app entuufu ggwe kennyini mu kifo ky'okugoberera link etasuubirwa.",
      "Buuza omuntu omukulu gw'wesiga singa obubaka bukuleetera okwanguwa oba bukuwuniikiriza."
    ],
    check: [
      "Oyinza kukola ki mu kifo ky'okunyiga link etasuubirwa?",
      "Lwaki obubaka buyinza okukugamba okwanguwa?"
    ]
  },
  "software-integrity": {
    bigIdea: "App esobola okukozesa ebitundu by'essimu yo. Teeka apps okuva mu bifo ebyesigika era kebera obuyinza bwe zisaba.",
    howItWorks: "Apps ziyinza okusaba okukozesa camera yo, ennamba z'abantu, oba ekifo. App erina okusaba obuyinza obwetaagisa omulimu gwayo gwokka.",
    staySafe: [
      "Kozesa official app stores n'abakola apps abeesigika.",
      "Gaana permissions app z'etetaaga.",
      "Bulijjo teeka updates ku apps era weewale APK files eziva mu bubaka oba eri abantu b'otomanyi."
    ],
    check: [
      "Kabonero ki akalabula mu kusaba kwa app obuyinza?",
      "Lwaki kya bukuumi okukozesa app store eyesigika?"
    ]
  },
  "mobile-money": {
    bigIdea: "Obubaka obugamba nti okusasula kwabaddewo si bukakafu bwokka. Kebera okusasula ng'okozesa empeereza entuufu.",
    howItWorks: "Okusasula kukozesa omuwendo, oyo afuna ssente, ne PIN yo ey'ekyama. Omuwa empeereza akakasa okusasula ng'ayita mu nkola ye.",
    staySafe: [
      "Togabana PIN yo oba code ey'ekiseera kimu.",
      "Kebera oyo afuna ssente n'omuwendo nga tonnakakasa.",
      "Kebera ssente mu mpeereza entuufu, so si mu bubaka bwa SMS bwokka."
    ],
    check: [
      "Lwaki osaana okukebera ssente zo oluvannyuma lw'okusasula?",
      "Osaana okuwa agent PIN yo?"
    ]
  },
  privacy: {
    bigIdea: "Amawulire agakwata ku ggwe ga mugaso. Gabana ebyetaagisa byokka, era olonde ani ayinza okubiraba.",
    howItWorks: "Apps ne websites ziyinza okuŋŋaanya ebikwata ku ggwe. Eby'okulondako eby'ebyama biyamba okufuga ebigabanyizibwa n'abo abasobola okubifuna.",
    staySafe: [
      "Kebera ani ayinza okulaba post, bifaananyi, n'ekifo kyo.",
      "Wa apps permissions ze zeetaaga zokka.",
      "Saba olukusa nga tonnasaasaanya kifaananyi oba ebikwata ku muntu omulala."
    ],
    check: [
      "Kitegeeza ki okugabana ebyetaagisa byokka?",
      "Yogera ekintu kimu ky'oyinza okukebera mu by'okulondako eby'ebyama."
    ]
  }
};

function createDocument(title: string, locale: "en" | "lg" = "en"): PDFDoc {
  const doc = new PDFDocument({
    size: "LETTER",
    layout: "portrait",
    autoFirstPage: false,
    margins: { top: 58, right: 58, bottom: 66, left: 58 },
    bufferPages: true,
    tagged: true,
    lang: locale,
    displayTitle: true,
    info: {
      Title: title,
      Author: "CyberSmart Butambala",
      Subject: "Free cybersecurity education for schools in Butambala District, Uganda"
    }
  });
  doc.registerFont("NotoSans", path.join(assetsDirectory, "noto-sans-latin-400-normal.woff"));
  doc.registerFont("NotoSansCyrillic", path.join(assetsDirectory, "noto-sans-cyrillic-400-normal.woff"));
  if (locale === "lg") {
    doc.registerFont("NotoSansUnicode", path.join(assetsDirectory, "noto-sans-variable.ttf"));
  }
  return doc;
}

function addHeading(doc: PDFDoc, text: string, level: "H1" | "H2" | "H3" | "H4"): void {
  const styles = {
    H1: { size: 28, gap: 12 },
    H2: { size: 19, gap: 10 },
    H3: { size: 13, gap: 5 },
    H4: { size: 11, gap: 4 }
  } as const;
  const style = styles[level];
  if (doc.y + style.size + 10 > doc.page.height - doc.page.margins.bottom) doc.addPage();
  doc.font("Helvetica-Bold").fontSize(style.size).fillColor("#111111");
  doc.text(text, {
    width: doc.page.width - doc.page.margins.left - doc.page.margins.right,
    lineGap: 2,
    paragraphGap: style.gap,
    structType: level
  });
  doc.moveDown(0.35);
}

function addParagraph(doc: PDFDoc, text: string, size = 11, locale: "en" | "lg" = "en"): void {
  const options = {
    width: doc.page.width - doc.page.margins.left - doc.page.margins.right,
    lineGap: 3,
    paragraphGap: 5,
    structType: "P"
  };
  doc.fontSize(size).fillColor("#111111");
  if (locale === "lg") {
    doc.font("NotoSansUnicode").text(text, options);
  } else {
    const runs = text.split(/([\u0400-\u04ff]+)/u);
    runs.forEach((run, index) => {
      doc.font(/[\u0400-\u04ff]/u.test(run) ? "NotoSansCyrillic" : "NotoSans");
      doc.text(run, { ...options, continued: index < runs.length - 1 });
    });
  }
  doc.moveDown(0.35);
}

function addList(doc: PDFDoc, items: string[], ordered = false, size = 10.5, locale: "en" | "lg" = "en"): void {
  if (items.length === 0) return;
  doc.font(locale === "lg" ? "NotoSansUnicode" : "NotoSans").fontSize(size).fillColor("#111111");
  doc.list(items, {
    listType: ordered ? "numbered" : "bullet",
    bulletIndent: 12,
    textIndent: 18,
    paragraphGap: 4,
    lineGap: 2,
    structType: "L"
  });
  doc.moveDown(0.35);
}

function addFooterAndPageNumbers(doc: PDFDoc): void {
  const range = doc.bufferedPageRange();
  for (let index = range.start; index < range.start + range.count; index += 1) {
    doc.switchToPage(index);
    const { left, right } = doc.page.margins;
    const width = doc.page.width - left - right;
    const y = doc.page.height - 42;
    const bottomMargin = doc.page.margins.bottom;
    doc.page.margins.bottom = 20;
    doc.save();
    doc.strokeColor("#b8b8b8").lineWidth(0.5).moveTo(left, y - 6).lineTo(left + width, y - 6).stroke();
    doc.font("NotoSans").fontSize(8).fillColor("#333333");
    doc.text(FOOTER, left, y, { width: width - 95, lineBreak: false });
    doc.text(`Page ${index + 1} of ${range.count}`, left + width - 90, y, {
      width: 90,
      align: "right",
      lineBreak: false
    });
    doc.restore();
    doc.page.margins.bottom = bottomMargin;
  }
}

function addCover(doc: PDFDoc, title: string): void {
  doc.addPage();
  doc.moveDown(7);
  doc.font("Helvetica-Bold").fontSize(30).fillColor("#111111");
  doc.text(title, { align: "center", structType: "H1" });
  doc.moveDown(1.2);
  doc.font("NotoSans").fontSize(15);
  doc.text(
    "Free cybersecurity education for primary and secondary schools in Butambala District, Uganda",
    { align: "center", lineGap: 5 }
  );
  doc.moveDown(2);
  doc.fontSize(12).text(ACKNOWLEDGMENT, { align: "center" });
  doc.moveDown(1);
  doc.font("NotoSans").fontSize(10).text(LICENSE_NOTE, { align: "center" });
  doc.text("You may share and adapt these educational materials with attribution under the same license.", {
    align: "center"
  });
}

function addLugandaCover(doc: PDFDoc, title: string): void {
  doc.addPage();
  doc.moveDown(7);
  doc.font("Helvetica-Bold").fontSize(30).fillColor("#111111");
  doc.text(title, { align: "center", structType: "H1" });
  doc.moveDown(1.2);
  doc.font("NotoSansUnicode").fontSize(15);
  doc.text(
    "Amasomo ag'obukuumi ku yintaneeti ag'obwerere eri amasomero aga pulayimale ne siniya mu Disitulikiti y'e Butambala, Uganda",
    { align: "center", lineGap: 5 }
  );
  doc.moveDown(2);
  doc.font("NotoSansUnicode").fontSize(12).text("Eteereddwamu obuyambi bwa Internet Society Fellowship Program.", { align: "center" });
  doc.moveDown(1);
  doc.font("NotoSansUnicode").fontSize(10).text("Ebiwandiiko bino eby'okusomesa biri wansi wa CC BY-SA 4.0.", { align: "center" });
  doc.text("Osobola okugabana n'okukyusa ebiwandiiko bino ng'owaayo ettendo era n'okozesa layisinsi y'emu.", {
    align: "center"
  });
}

function addTableOfContents(doc: PDFDoc, content: Lesson[], locale: "en" | "lg" = "en"): void {
  doc.addPage();
  addHeading(doc, locale === "lg" ? "Olukalala lw'Ebirimu" : "Table of Contents", "H1");
  addList(doc, content.map((lesson) => lesson.title), true, 12, locale);
}

function addStudentSections(doc: PDFDoc, lesson: Lesson, locale: "en" | "lg" = "en"): void {
  const section = lesson.studentSection;
  addHeading(doc, locale === "lg" ? "Ekirowoozo Ekikulu" : "Big Idea", "H3");
  addParagraph(doc, section.bigIdea, 11, locale);
  addHeading(doc, locale === "lg" ? "Engeri Gye Kikola" : "How It Works", "H3");
  addParagraph(doc, section.howItWorks, 11, locale);
  addHeading(doc, locale === "lg" ? "Awakuba Obuzibu mu Nkola" : "Where Systems Fail", "H3");
  addParagraph(doc, section.whereSystemsFail, 11, locale);
  addHeading(doc, locale === "lg" ? "Engeri y'Okwekuumamu" : "How to Defend", "H3");
  addList(doc, section.howToDefend, false, 10.5, locale);
  addHeading(doc, locale === "lg" ? "Kebera Ky'Otegeeredde" : "Self-Check", "H3");
  addList(doc, section.selfCheck, true, 10.5, locale);
}

function addTeacherSections(doc: PDFDoc, lesson: Lesson, locale: "en" | "lg" = "en"): void {
  const section = lesson.teacherSection;
  addHeading(doc, locale === "lg" ? "Eby'Abasomesa" : "For Teachers", "H3");
  addHeading(doc, locale === "lg" ? "Ennyinyonnyola ey'Ebyekikugu" : "Technical Framing", "H4");
  addList(doc, section.technicalFraming, false, 10.5, locale);
  addHeading(doc, locale === "lg" ? "Amagezi eri Omusomesa" : "Teaching Tip", "H4");
  addParagraph(doc, section.teachingTip, 11, locale);
  addHeading(doc, locale === "lg" ? "Ekibuuzo eky'Okukubaganya Ebirowoozo" : "Discussion Prompt", "H4");
  addParagraph(doc, section.discussionPrompt, 11, locale);
  addHeading(doc, locale === "lg" ? "Omulimu ogw'Okweyongerayo" : "Extension", "H4");
  addParagraph(doc, section.extension, 11, locale);
}

function renderBook(doc: PDFDoc, content: Lesson[] = lessons, locale: "en" | "lg" = "en"): void {
  if (locale === "lg") addLugandaCover(doc, "CyberSmart Butambala");
  else addCover(doc, "CyberSmart Butambala");
  addTableOfContents(doc, content, locale);
  for (const lesson of content) {
    doc.addPage();
    addHeading(doc, lesson.title, "H2");
    addParagraph(doc, lesson.summary, 12, locale);
    addParagraph(doc, lesson.systemsSecurityCore, 11, locale);
    addStudentSections(doc, lesson, locale);
    addTeacherSections(doc, lesson, locale);
  }
}

function renderPrimaryGuide(
  doc: PDFDoc,
  content: Lesson[] = lessons,
  guides: Record<string, PrimaryGuide> = primaryGuides,
  locale: "en" | "lg" = "en"
): void {
  for (const lesson of content) {
    const guide = guides[lesson.slug];
    if (!guide) throw new Error(`Missing primary guide text for lesson "${lesson.slug}".`);
    doc.addPage();
    addHeading(doc, lesson.title, "H2");
    addHeading(doc, locale === "lg" ? "Ekirowoozo Ekikulu" : "Big Idea", "H3");
    addParagraph(doc, guide.bigIdea, 13, locale);
    addHeading(doc, locale === "lg" ? "Engeri Gye Kikola" : "How It Works", "H3");
    addParagraph(doc, guide.howItWorks, 13, locale);
    addHeading(doc, locale === "lg" ? "Weekuume" : "Stay Safe", "H3");
    addList(doc, guide.staySafe, false, 12, locale);
    addHeading(doc, locale === "lg" ? "Kebera Amangu" : "Quick Check", "H3");
    addList(doc, guide.check, true, 12, locale);
  }
}

function renderTeacherPlans(doc: PDFDoc): void {
  for (const lesson of lessons) {
    doc.addPage();
    addHeading(doc, lesson.title, "H2");
    addHeading(doc, "Big Idea", "H3");
    addParagraph(doc, lesson.studentSection.bigIdea);
    addHeading(doc, "How It Works", "H3");
    addParagraph(doc, lesson.studentSection.howItWorks);
    addHeading(doc, "Where Systems Fail", "H3");
    addParagraph(doc, lesson.studentSection.whereSystemsFail);
    addHeading(doc, "How to Defend", "H3");
    addList(doc, lesson.studentSection.howToDefend);
    addHeading(doc, "Self-Check", "H3");
    addList(doc, lesson.studentSection.selfCheck, true);
    addTeacherSections(doc, lesson);
  }
}

async function writePdf(
  filename: string,
  title: string,
  render: (doc: PDFDoc) => void,
  locale: "en" | "lg" = "en"
): Promise<void> {
  const filePath = path.join(downloadDirectory, filename);
  const doc = createDocument(title, locale);
  const output = createWriteStream(filePath);
  doc.pipe(output);

  await new Promise<void>((resolve, reject) => {
    output.once("finish", resolve);
    output.once("error", reject);
    doc.once("error", reject);
    try {
      render(doc);
      addFooterAndPageNumbers(doc);
      doc.end();
    } catch (error) {
      doc.destroy(error instanceof Error ? error : new Error(String(error)));
      reject(error);
    }
  });

  const { size } = await stat(filePath);
  console.log(`Generated ${path.relative(projectRoot, filePath)} (${(size / 1024).toFixed(1)} KB).`);
}

async function main(): Promise<void> {
  await mkdir(downloadDirectory, { recursive: true });

  await writePdf("cybersmart-book-en.pdf", "CyberSmart Butambala", renderBook);
  await writePdf("primary-guide-en.pdf", "CyberSmart Primary Safety Guide", renderPrimaryGuide);
  await writePdf("teacher-lesson-plans.pdf", "CyberSmart Teacher Lesson Plans", renderTeacherPlans);
  await writePdf(
    "cybersmart-book-lg.pdf",
    "CyberSmart Butambala",
    (doc) => renderBook(doc, lugandaLessons, "lg"),
    "lg"
  );
  await writePdf(
    "primary-guide-lg.pdf",
    "CyberSmart Butambala - Ekitabo ky'Obukuumi eri Abaana",
    (doc) => renderPrimaryGuide(doc, lugandaLessons, primaryGuidesLg, "lg"),
    "lg"
  );
}

main().catch((error: unknown) => {
  console.error("PDF generation failed:", error);
  process.exitCode = 1;
});
