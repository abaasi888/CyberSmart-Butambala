import type { Lesson } from "@/content/lessons/types";

export const lesson: Lesson = {
  slug: "privacy",
  title: "Okukuuma Data n'Ebyama mu Dizayini",
  summary: "Okuŋŋaanya data, least privilege (okuwa obuyinza obwetaagisa bwokka), eby'okulondako eby'ebyama, n'okukendeeza data gy'okuŋŋaanya.",
  systemsSecurityCore: "Okukuuma data okuva ku ntandikwa, so si kukijjukira ng'omulimu guwedde.",
  studentSection: {
    bigIdea: "Buli app ne website ekuŋŋaanya data ekukwatako — oluusi n'ebisinga ku by'olowooza. Privacy by design (okuteekamu ebyama mu dizayini okuva ku ntandikwa) kitegeeza nti enkola zirina okukuuma data yo okuva ku ntandikwa, so si kukijjukira ng'omulimu guwedde. Naawe ng'omukozesa osobola okukendeeza ku by'owaayo. Data minimization kitegeeza okuŋŋaanya n'okugabana ebyetaagisa byokka.",
    howItWorks: "Enkola zikuŋŋaanya data zisobole okukola: erinnya lyo okukola akawunti, ekifo kyo okukola map, n'ennamba z'abantu bo okuzuula mikwano. Naye ezimu zikuŋŋaanya ebisinga ku bye zeetaaga — ne zigabana data eri abantu abalala, abasuubuzi, oba abaguzi ba data. Least privilege (okuwa obuyinza obwetaagisa bwokka) ekola ne ku data: app erina okufuna data gy'yeetaaga yokka, era mu kiseera ky'egyeetaagira. Data yo erina omuwendo — eri abasuubuzi, abalimba, n'omuntu yenna ayinza okugikozesa okwefuula ggwe oba okukulumba.",
    whereSystemsFail: "Okuŋŋaanya data esukkiridde: apps zisaba data gye zitetaaga. Eby'okulondako ebinafu okuva ku ntandikwa: profile ziba za bonna nga bwe zitegekeddwa. Okugabana n'abantu abalala: data epelekebwa eri bannakolagana awatali kukkiriza kutegeerekeka. Data breaches: data eterekeddwa etwalibwa nga enkola zifunye abalumba. Obutaggyawo bulungi: data eterekebwa ebbanga ddene oluvannyuma lw'okuba nga tekyetaagisa.",
    howToDefend: [
      "Kebera eby'okulondako eby'ebyama — profile zigifuule ey'ekyama okuva ku ntandikwa bwe kiba kisoboka.",
      "Kendeeza ku permissions za apps — gaana obuyinza obutali bwetaagisa.",
      "Gabana bitono — lowooza nga tonnateeka ku mukutu ebikwata ku ggwe, ekifo, oba ebifaananyi bya ID.",
      "Kozesa credentials ez'amaanyi ez'enjawulo — okubba data kuba kwa bulabe obutonotono singa credentials tezirina kuddamu kukozesebwa.",
      "Soma data app gy'esaba nga tonnagiteeka.",
      "Sangula akawunti z'otakozesa ne data enkadde."
    ],
    selfCheck: [
      "Privacy by design kitegeeza ki?",
      "Data minimization kye ki?",
      "Lwaki okuŋŋaanya data esukkiridde kireeta akabi?",
      "Waayo eby'okulondako eby'ebyama bibiri by'oyinza okukyusa leero.",
      "Lwaki okugabana bitono kukendeeza akabi?"
    ]
  },
  teacherSection: {
    technicalFraming: [
      "Privacy by design (emisingi gya Cavoukian): okubaako ky'okola nga obuzibu tebunnabaawo, ebyama okuba eby'enjawulo okuva ku ntandikwa, okubyongeramu mu dizayini, okukola obulungi mu byonna, obukuumi okuva ku ntandikwa okutuuka ku nkomerero, okulabika n'okutegeerekeka, n'okussa ekitiibwa mu byama by'omukozesa.",
      "Data minimization n'okukozesa data ku kigendererwa ekitegeerekeka bye musingi mu nkola nga GDPR; enkola zirina okuŋŋaanya ebyetaagisa byokka olw'ekigendererwa ekyayogeddwa.",
      "Least privilege etuuka ne ku kufuna data: empeereza zirina okufuna ebika bya data ebyetaagisa byokka, nga zikozesa role-based access control.",
      "Olugendo lwa data: okuŋŋaanya, okutereka, okukola, okugabana, okusigala, n'okusangula. Obunafu mu mutendera gwonna buleeta akabi.",
      "Obunene bw'akabi ka breach businziira ku data eyaterekebwa — password ezikyusiddwa ne data ekendeddwa bikendeeza ku bulabe.",
      "Akabi akava ku bantu abalala: SDKs ne analytics bisobola okuggya data; okukkiriza n'okutegeeza mu ngeri ennyangu bye bikozesebwa okwekuuma."
    ],
    teachingTip: "Abayizi basabe okukebera privacy label oba permissions za app emu bawandiike data gy'ekuŋŋaanya — olwo mukubaganye ebirowoozo oba buli kimu kyetaagisa.",
    discussionPrompt: "App esaba ennamba z'abantu bo 'okuyamba okuzuula mikwano.' Biki ebiyinza okuba ebirungi n'ebibi eri ebyama, era wandisalawo otya?",
    extension: "Nnyonnyola data minimization mu sentensi emu — kuŋŋaanya data gy'oteetaaga yokka, okumala ekiseera ky'ogyeetaagira kyokka."
  }
};
