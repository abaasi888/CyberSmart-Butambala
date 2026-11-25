import type { Lesson } from "@/content/lessons/types";

export const lesson: Lesson = {
  slug: "phishing",
  title: "Phishing (obubaka obulimbalimba obw'okufuna ebyama): Okulemererwa kw'Enkola y'Okukakasa Obubaka",
  summary: "Spoofing (okwefuula omuntu omulala), endagiriro z'emikutu ezifaanagana, okulemererwa okukakasa abatumizi, n'obukuumi obuterekeddwa mu mitendera.",
  systemsSecurityCore: "Phishing (obubaka obulimbalimba obugezaako okubba ebyama) ng'okulemererwa mu kukakasa, so si nsobi ya mukozesa yekka.",
  studentSection: {
    bigIdea: "Phishing si 'mulimba akulimbalimba' yekka. Kulemererwa mu ngeri enkola gye zikakasaamu obuntu. Obubaka bwe bugamba nti buvudde mu bbanka yo, essomero lyo, oba mukwano gwo, enkola erina okukakasa nti ddala buvudde gy'oli oyo. Phishing ekola okukakasa okwo bwe kulemererwa — oba bwe tutakebera.",
    howItWorks: "Obubaka bwa phishing bugezaako okukukkirizisa nti buvudde eri omuntu gw'wesiga (spoofing: okwefuula omuntu omulala), okukuleetera okubaako ky'okolawo mangu (urgency — 'akawunti yo ejja kuggalwa!'), n'okufuna ekintu kyo (password, PIN, OTP code, oba ssente). Obukodyo obwa tekinologiya obutera okukozesebwa mulimu endagiriro ezifaanagana nga paypa1.com (erina '1') mu kifo kya paypal.com; homoglyphs, ennukuta ezifaanagana naye nga si zimu (okugeza, Cyrillic 'а' ne Latin 'a'); amannya g'abatumizi ag'obulimba, erinnya erirabika nga ligamba 'MTN' naye endagiriro entuufu nga ya bulijjo; obubaka obw'amangu obukulemesa okufumiitiriza; ne URLs ennyimpi ezikweka ekifo ekituufu gye zigenda.",
    whereSystemsFail: "Email ne SMS tebitera kukakasa bulungi ani atumye obubaka. Amannya agalabika gasobola okukoppebwa; SMS sender IDs zisobola okukoppebwa. Enkolagana zikweka gye zigenda — ebigambo ebirabika biraga ekimu naye URL entuufu nga ya njawulo. Abantu be basigala nga obukuumi obusembayo, era okuleetebwa mangu kulemesa okufumiitiriza. Awatali kintu kya kubiri eky'okukakasa, password efuniddwa mu phishing emala okuyingira.",
    howToDefend: [
      "Kebera endagiriro oba URL entuufu, so si linnya erirabika. Wandikako oba onyige link okumala akaseera olabe gye ddala edda.",
      "Togabana OTP oba PIN code — empeereza entuufu tezibisaba.",
      "Yimirira ofumiitirize — obubaka obukuleetera okwanguwa kabonero ka bulabe, so si nsonga ya kwanguwa.",
      "Genda butereevu — ggulawo app oba wandiika endagiriro entuufu ggwe kennyini mu kifo ky'okunyiga link etasuubirwa.",
      "Kozesa MFA — password eibbiddwa yokka ebe nga teyamala okuyingira.",
      "Tegeeza — buulira omusomesa, muzadde, oba omuwa empeereza."
    ],
    selfCheck: [
      "Erinnya erirabika n'endagiriro entuufu byawukana bitya?",
      "Lwaki kya kabi okugabana OTP code?",
      "Endagiriro y'omukutu efaanagana n'endala eya bulimba erabika etya?",
      "Lwaki okwanguyiriza kuleetera phishing okukola obulungi?",
      "Waayo emitendera ebiri egy'obukuumi ku phishing."
    ]
  },
  teacherSection: {
    technicalFraming: [
      "Spoofing ekozesa obunafu mu kukakasa omutumi. Obukuumi bwa email bulimu SPF, DKIM, ne DMARC — bino bisobozesa server efuna obubaka okukakasa nti ddala buvudde ku domain egambibwa. Domain bw'etabirina, spoofing kiba kyangu.",
      "Okukoppa SMS sender ID kutera okubaawo mu bitundu bingi kubanga SMS terina kukakasa mutumi okuzimbibwamu; sender ID emirundi mingi kiba kiwandiiko kyokka.",
      "Homoglyph attacks zikozesa Unicode: ennukuta ezifaanagana okuva mu nnimi ez'enjawulo. Abakuumi bakozesa IDN/punycode checks n'okukebera obwesigwa bwa domain.",
      "URL obfuscation: links ennyimpi, redirects, n'obukodyo bwa @ (okugeza, https://trusted.com@evil.com) bikweka ekifo ekituufu gye kigenda. Bulijjo kebera registrable domain — ekitundu ekiri nga tekinnatuuka ku top-level domain.",
      "Credential phishing nga tewali MFA kiviirako akawunti okutwalibwa. MFA (TOTP, push, hardware keys) kikendeeza kino, naye real-time phishing proxies zisobola okuwangula OTP — ky'ova olaba nga MFA etalumbibwa na phishing (FIDO2/passkeys) nkulu.",
      "Defense in depth egatta obukuumi bwa tekinologiya (DMARC, MFA, link scanning), obw'abantu (emize gy'okukakasa), n'obw'enkola y'emirimu (okuloopa obubaka obuteebese)."
    ],
    teachingTip: "Laga abayizi URLs bbiri ku mabbali, obasabe okulaga ki entuufu n'ensonga lwaki — okuyiga okusoma okuva ku ddyo (registrable domain) bukugu obw'omugaso.",
    discussionPrompt: "Obubaka bwe bufaanana obutuufu naye ne bukusaba okubaako ky'okolawo mangu era ogabane code, osaana kukola ki — era lwaki ekyo kye kisinga obukuumi ne bwe kiba nti obubaka butuufu?",
    extension: "Nnyonnyola DMARC mu sentensi emu — engeri nnannyini domain gy'ategeeza ensi nti 'server zino zokka ze ziyinza okutuma email nga zeeyita ezange, era bino bye bintu bye mulina okukakasa.'"
  }
};
