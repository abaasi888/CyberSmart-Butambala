import type { Lesson } from "@/content/lessons/types";

export const lesson: Lesson = {
  slug: "mobile-money",
  title: "Mobile Money n'Obutuufu bw'Enkolagana z'Okusasula",
  summary: "PINs, okukakasa callback (okutegeeza okudda), HMAC (akabonero akakakasa obubaka), replay attacks (obubaka obuddiddwamu) n'okwefuula omulala, n'engeri y'okukakasa okusasula.",
  systemsSecurityCore: "Engeri enkola gye zikakasamu nti okusasula kwa ddala, n'engeri obukakafu obwo gye buyinza okulemererwa.",
  studentSection: {
    bigIdea: "Mobile money etambuza ssente entuufu ng'eyita mu nkola — era enkola ezo zirina okukakasa nti okusasula kwa ddala. Okukakasa bwe kulemererwa, abalumba bayinza okukulimbalimba enkola n'ekakasa okusasula okutabangawo, oba n'esaasaanya ssente mu kifo ekikyamu. Kino kiyitibwa transaction integrity (obutuufu bw'enkolagana y'okusasula).",
    howItWorks: "Bw'osasula ne mobile money, emitendera mingi gibaawo: oyingiza omuwendo n'oyo gw'otumira; okakasa n'ekyama kya PIN; enkola eweereza okusaba eri omuwa empeereza y'okusasula; omuwa empeereza akola okusasula n'awaayo callback (okutegeeza okudda) okukakasa nti kuwedde; enkola n'eteeka nti okusasula kuwedde. PIN ekakasa nti ggwe osasula. Callback ekakasa nti okusasula ddala kwabaddewo. Enkola bw'esiga callback nga tegekebereddwa, omulumbisa ayinza okutuma obubaka obw'obulimba obugamba nti 'okusasula kuwedde.'",
    whereSystemsFail: "PIN ezigabanyiziddwa zisobozesa omuntu omulala okukakasa okusasula. Social engineering (okukozesa obulimba n'okwefuula omuntu omulala): 'agent' akukubira ng'akusaba PIN oba OTP, naye agent omutuufu teyeetaaga kubisaba. Obukakafu obw'obulimba: abalumba basindika SMS ez'obulimba ezigamba nti 'ssente zituuse' okulimbalimba abatunzi. Callbacks ezitakakasiddwa: enkola ennafu zikkiriza obukakafu bw'okusasula awatali cryptographic checks (okukebera HMAC signatures), ekisobozesa replay oba spoofing attacks. Replay attack eddamu okuweereza okukakasa okwali kutuufu esobole okuleeta okusasula okuddibwamu.",
    howToDefend: [
      "Togabana PIN yo oba OTP — n'omuntu yenna, tewali.",
      "Kakasa mu app, so si mu SMS yokka — kebera ssente entuufu eziri mu akawunti yo.",
      "Kakasa oyo gw'otumira nga tonnasindika ssente.",
      "Obubaka obukuleetera okwanguwa butwale ng'akabonero ka bulabe — abalimba bakukubiriza okwanguwa.",
      "Loopa amasimu agateebekeka eri omuwa empeereza yo.",
      "Eri abakola software: kakasa callbacks ng'okozesa HMAC signatures, kebera timestamps ne nonces okuziyiza replay, era tosobola kwesiga bukakafu buva ku kyuma kya mukozesa kyokka."
    ],
    selfCheck: [
      "PIN yo ekakasa ki, era callback ekakasa ki?",
      "Lwaki tosobola kugabana PIN oba OTP yo?",
      "Obulimba bw'obukakafu obw'okusasula kye ki?",
      "Replay attack kye ki?",
      "Lwaki okukebera ssente entuufu mu akawunti yo kisinga okwesiga SMS?"
    ]
  },
  teacherSection: {
    technicalFraming: [
      "Transaction integrity yeetaaga authenticity (okusaba kuva eri oyo omutuufu), integrity (tekukyusiddwaamu), ne freshness (si kusaba okuddiŋŋaniddwa). HMAC (hash-based message authentication code: akabonero akakakasa obubaka nga kyesigama ku hash) n'ekyama ekigabanyiziddwa biwa obukakafu bw'ensibuko n'obutuufu.",
      "Okwewala replay attacks kukozesa nonces oba timestamps ezirina ekiseera ekikyalina obutuufu; server egaana obubaka obuddiddwamu.",
      "Okukakasa webhooks ne callbacks: abawa empeereza y'okusasula basayinako callbacks; enkola zirina okukakasa signatures nga tezinnateeka nti okusasula kuwedde. Okwesiga callbacks ezitasayiniddwa kisobozesa okukoppa obukakafu bw'okusasula.",
      "Idempotency keys ziyamba okuziyiza okukola emirundi ebiri singa callback eddamu okuweerezebwa.",
      "Social engineering erumba omutendera gw'abantu: okuwaayo PIN oba OTP kuwangula obukuumi bwa tekinologiya. Okukakasa okuva mu kkubo eddala (okukebera ssente mu app) y'engeri emu ey'okwekuuma.",
      "Obulimba bwa mobile money butera okugatta obunafu bwa tekinologiya (callbacks ezitakakasiddwa) n'obunafu bw'abantu (PIN ezigabanyiziddwa) — defense in depth ekozesa ku byombi."
    ],
    teachingTip: "Mweyongereko okusomesa okusasula mutendera ku mutendera ku bbaati; mulage we wabaawo okukakasa, olwo mubuuze omulumbisa w'ayinza okuyingirira.",
    discussionPrompt: "Omusuubuzi afuna SMS egamba nti 'ssente zituuse' naye ssente ne zitatuuka. Kulemererwa ki mu nkola okuyinza okubaawo, era omusuubuzi akakasa atya?",
    extension: "Nnyonnyola HMAC mu sentensi emu — engeri y'okukakasa nti obubaka buvudde eri omuntu alina ekyama ekigabanyiziddwa era nti tebukyusiddwaamu."
  }
};
