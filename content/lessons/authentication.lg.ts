import type { Lesson } from "@/content/lessons/types";

export const lesson: Lesson = {
  slug: "authentication",
  title: "Okukakasa Obuntu n'Enkola z'Okumanyisa Omuntu",
  summary: "Password n'ebigambo by'ekyama ebiwanvu, hashing (okukola akabonero k'obubaka akatasobola kudda ku nsibuko), MFA (okukakasa ng'okozesa ebintu ebisukka mu kimu), session token (akabonero ak'ekiseera akalaga nti wayingiziddwa), n'okuddamu okukozesa ebyama.",
  systemsSecurityCore: "Engeri enkola gye zikakasamu obuntu bw'omuntu, n'engeri okukakasa okwo gye kuyinza okulemererwa.",
  studentSection: {
    bigIdea: "Authentication (okukakasa omukozesa) ye ngeri enkola gy'edamu ekibuuzo kino: 'Ddala oli oyo gwe weeyita?' Buli akawunti gy'okozesa — email, emikutu gy'empuliziganya, oba mobile money — yeeyambisa authentication. Bwe kiba kinnafu, omuntu yenna ayinza okwefuula ggwe.",
    howItWorks: "Waliwo engeri ssatu enkola gy'eyinza okukakasaamu nti oli ggwe: ekintu ky'omanyi (password oba PIN), ekintu ky'olina (essimu yo efuna OTP code, oba security key), n'ekintu ekiri ku mubiri gwo (ekinkumu oba ekifaananyi ky'omu maaso). Enkola ennywevu zigatta ebintu bibiri oba okusingawo. Kino kiyitibwa multi-factor authentication (MFA: okukakasa ng'okozesa ebintu ebisukka mu kimu). Enkola ennungi tezitereka password yo nga bw'ogiwandiise — zikola hashing (okukyusa password mu akabonero akatasobola kudda ku nsibuko) ne zitereka akabonero ako. Bw'oyingira, enkola ekyusa by'owandiise ne egeraageranya obubonero. Bw'omala okuyingira, enkola ewa essimu yo session token (akabonero ak'ekiseera akalaga nti wayingiziddwa) — ng'ekisumuluzo eky'ekiseera — osobole obutaddamu kuyingiza password ku buli mukutu gw'olaba.",
    whereSystemsFail: "Okuddamu okukozesa password kireetera okubba akawunti emu okuyingira ne mu akawunti endala zonna ezirina password y'emu. Password ennyangu ziteeberezebwa oba ne zizuulibwa nga bakozesa dictionary attacks. Awatali MFA, password ebiddwa y'ekimala okuyingira. Session tokens ezibbiddwa — ezoolebwa malware oba Wi-Fi etali ya bukuumi — zisobozesa omulumbisa okukola ng'oli ggwe nga talina password yo. Phishing OTPs (obubaka obulimbalimba obukusaba OTP) zisobola okuwangula MFA singa ogabana code.",
    howToDefend: [
      "Kozesa passphrases empanvu (ebigambo 4–5 ebitali bimu ebiteeberezebwa) — obuwanvu businga obuzibu obw'emikono gy'ebigambo.",
      "Toddamu kukozesa password — kozesa password manager (ekintu ekikuuma password zo).",
      "Tandika okukozesa MFA buli w'esangibwa.",
      "Togabana OTP codes n'omuntu yenna.",
      "Fuluma ku byuma ebigabanyiziddwa era kebera sessions ezikyayingiddwamu.",
      "Bulijjo teeka updates ku byuma byo — patches zigonjoola obunafu mu kukakasa omukozesa."
    ],
    selfCheck: [
      "Bintu ki bisatu ebikozesebwa mu kukakasa omukozesa?",
      "Lwaki enkola ennungi zitereka hashes so si passwords?",
      "Session token kye ki, era lwaki kikulu?",
      "Lwaki kya kabi okuddamu okukozesa password y'emu?",
      "MFA ekendeeza etya akabi?"
    ]
  },
  teacherSection: {
    technicalFraming: [
      "Hashing ekozesa one-way functions (okugeza, bcrypt, Argon2, oba SHA-256 with salt) okusobola obutaddamu ku password eyaterekebwa. Salting yongerako randomness ey'enjawulo ku buli password okuziyiza precomputed rainbow tables.",
      "Ebika bya MFA: knowledge (password), possession (TOTP app, SMS, hardware key), inherence (biometrics). MFA etalumbibwa na phishing ekozesa FIDO2/passkeys, ebikwataganya okukakasa n'ensibuko y'omukutu.",
      "Okuddukanya sessions: tokens (cookies, JWTs) birina okuba HttpOnly, Secure, SameSite, era birina okuggwaako. Okubba token (XSS, networks ezitali za bukuumi) kisobozesa session hijacking.",
      "Credential stuffing ekozesa password eziddiddwa okukozesebwa emirundi mingi mu bungi; rate limiting n'okukebera ebyabiddwa biyamba okukendeeza akabi.",
      "Password managers zikendeeza okuddamu okukozesa ebyama era zisobozesa password ez'amaanyi ez'enjawulo; master password y'efuuka ekyama kimu eky'omuwendo ennyo.",
      "Authentication kye kimu ku bikozesebwa ebisinga okuba n'amaanyi mu bukuumi — okutwalibwa kw'akawunti okusinga kutandika na credentials ennafu oba ezifuniddwa mu phishing."
    ],
    teachingTip: "Laga hashing ng'okozesa ekyuma eky'oku yintaneeti ekikola SHA-256 — wandiika password, olage hash, kyusa ennukuta emu olage hash empya ey'enjawulo ennyo. Nnyonnyola nti okukyusa kuno tekuddizibwa mabega.",
    discussionPrompt: "Omukutu bwe gukuweereza password yo mu email ng'onyize 'forgot password,' kino kikubuulira ki ku ngeri gye baziterekaamu — era lwaki kiba kabonero ka bulabe?",
    extension: "Nnyonnyola passkeys mu sentensi emu — cryptographic key eterekebwa ku kyuma kyo ekikakasa nti oli ggwe awatali kuweereza password."
  }
};
