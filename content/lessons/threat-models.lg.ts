import type { Lesson } from "@/content/lessons/types";

export const lesson: Lesson = {
  slug: "threat-models",
  title: "Threat Models (enkola y'okwekenneenya obulabe): Engeri abalumba gye bategeera enkola eza bulijjo",
  summary: "Ebyetaaga okukuumibwa, obulabe, obunafu, akabi, attack surface (amakubo gonna agayinza okuyitwamu okulumba enkola), n'obukuumi obuterekeddwa mu mitendera.",
  systemsSecurityCore: "Okukozesa threat modeling (okwekenneenya obulabe obuyinza okutuuka ku nkola) ku nkola eza bulijjo.",
  studentSection: {
    bigIdea: "Buli nkola gy'okozesa — essimu yo, akawunti yo ey'emikutu gy'empuliziganya, oba mobile money yo — erimu ebintu ebyetaaga okukuumibwa (assets), abantu abayagala okubibba (threats), n'obunafu obubayamba okubituukako (vulnerabilities). Obukuumi butandika n'okutegeera ebintu bino byonna nga tewannabaawo buzibu. Kino kiyitibwa threat model.",
    howItWorks: "Lowooza ku ssimu yo ng'ennyumba. Assets bye bintu ebigirimu (ebifaananyi, obubaka, mobile money, n'ennamba z'abantu). Threats be bayinza okugezaako okuyingira (omubbi, omuntu alimbalimba, oba eyasanze essimu yo nga tesibiddwa). Vulnerabilities bye bifo ebinafu (PIN ennyangu okuteebereza, app esaba obuyinza bungi, oba waya ya charger egabanyiziddwa). Attack surface (amakubo gonna agayinza okuyitwamu okulumba enkola) ye buli kkubo ery'okuyingira (ekisumuluzo kya ssirini, apps, Bluetooth, Wi-Fi, n'enkolagana z'onyiga). Omukuumi omulungi tabaako ky'abuuza nti 'essimu yange esibiddwa?' Abuuza nti: Kiki kye nkuuma? Ani ayagala okukitwala? Ayinza kukituukako atya? Ekifo kyange ekinafu ennyo kiri ludda wa?",
    whereSystemsFail: "Abantu abasinga bakuuma bintu eby'obulabe bwe bamanyi bokka (ng'okugamba nti 'tonyiga link'). Abalumba banoonya ekkubo erisinga obwangu — eddirisa eritasibiddwa, password eddamu okukozesebwa, oba app esaba buli kimu. Obukuumi bulemererwa bwe tusiba oluggi olumu ne tuleka olulala nga luggule.",
    howToDefend: [
      "Siba essimu ku ssirini (olut layer olusooka).",
      "Kozesa PIN oba passphrase (ekigambo ky'ekyama ekiwanvu) enzibu okuteebereza (olut layer olwokubiri).",
      "Kebera obuyinza bwa apps (olut layer olwokusatu).",
      "Teeka updates (ebipya) okuziba obunafu obumanyiddwa.",
      "Kola backups (kopi ez'okwerinda) obutafiirwa data yo singa wabaawo okuyingirirwa.",
      "Olut layer lumu bwe lulemererwa, endala zikyakuuma."
    ],
    selfCheck: [
      "Waayo ebyokulabirako bisatu eby'ebintu ebiri ku ssimu yo ebyetaaga okukuumibwa.",
      "Baani abantu babiri abayinza okuba obulabe eri ebyo?",
      "Obunafu ki obumu bw'oyinza okutereeza leero?",
      "Lwaki kya kabi okwesigama ku ngeri emu yokka ey'okwerinda?"
    ]
  },
  teacherSection: {
    technicalFraming: [
      "Threat model etegeeza mu ngeri entongole ebintu ebyetaaga okukuumibwa, abalabe, amakubo ag'okulumbiramu, n'engeri y'okwekuuma. Enkola ezimanyiddwa mulimu STRIDE (Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege) ne attack trees.",
      "Attack surface ye mugatte gw'ebifo byonna omulumbisa by'ayinza okukozesa okukwatagana n'enkola (network interfaces, input fields, APIs, okufuna essimu mu mubiri, n'abantu abayikozesa).",
      "Defense in depth (obukuumi obuterekeddwa mu mitendera) ye nteekateeka y'okukozesa obukuumi obw'enjawulo: obuziyiza (ebisiba, okukakasa omukozesa), obuzuula (logging, alerts), n'obuddaabiriza (backups, okuzzaawo data).",
      "Least privilege kitegeeza okuwa omukozesa obuyinza obwetaagisa bwokka. App ku ssimu y'omuyizi esaba contacts, SMS, ne location erina obuzibu mu buyinza bw'esaba.",
      "Risk = likelihood × impact (akabi = obusobozi obulabe okubaawo × obunene bw'ekiyinza okuvaamu). Obulabe obutatera kubaawo naye obuyinza okuvaamu ekizibu ekinene (okufunira akawunti ya mobile money obuyinza) buyinza okwetaaga okufaako okusinga obubaka obutatera kuba bwa bulabe obutonotono."
    ],
    teachingTip: "Abayizi basabe okukuba ekifaananyi ekiraga threat model y'essimu yaabwe — ebintu ebyetaaga okukuumibwa mu makkati, obulabe okwetooloola, n'obunafu nga emiwuliro. Kino kifuula ekirowoozo ekitali kyangu okulaba ekitegeerekeka.",
    discussionPrompt: "Singa wandina okukuuma ekintu kimu kyokka ku ssimu yo okusinga ebirala byonna, wandirondedde ki — era wandikozesezza mitendera ki egy'obukuumi?",
    extension: "Tandika n'ekirowoozo kya attack trees: menya ekigendererwa (okugeza, 'okubba essimu') mu mitendera, olwo mubuuze w'oyinza okuyimiriza buli mutendera."
  }
};
