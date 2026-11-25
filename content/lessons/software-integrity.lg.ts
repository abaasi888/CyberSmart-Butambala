import type { Lesson } from "@/content/lessons/types";

export const lesson: Lesson = {
  slug: "software-integrity",
  title: "Obutuufu bwa Software n'Okugiteeka mu Ngeri Ey'obukuumi",
  summary: "Obuyinza bwa apps, APK (fayiro eziteekamu apps ku Android) ez'obulabe, supply chain (enkola y'okuleeta pulogulaamu), n'okusideloading (okuteeka apps okuva ebweru wa app store).",
  systemsSecurityCore: "Okwesiga software kitegeeza okukakasa gy'evudde n'obutuufu bwayo.",
  studentSection: {
    bigIdea: "Bw'oteeka app, oba ogyesiga n'obuyinza okufuna ebiri ku ssimu yo — ebifaananyi, obubaka, ennamba z'abantu, era oluusi ssente zo. Obutuufu bwa software bukwata ku kukakasa nti app ddala kye yeeyita, eva eri oyo gwe yeeyita, era nti tekyusiddwaamu.",
    howItWorks: "Apps zikola nga zirina permissions (obuyinza) — enkola esaba okukkiriza kwo okukozesa camera, contacts, SMS, location, oba storage. App entuufu esaba ebyo byokka bye yeetaaga. App ey'obulabe esaba ebisingawo nnyo oba ekweka kye ekola. Ensibuko ya apps nkulu: official app stores zeekebera apps era ne zizisayinako, naye sideloading (okuteeka APK files okuva ku website oba mu bubaka) eyita ku kwekebejja okwo era y'ekkubo eddene eryaleeta malware. Ne apps entuufu zisobola okufunibwa omulumbisa n'akyusa code, singa afuna obuyinza ku nkola ya developer ey'okuzimba app — kino kiyitibwa supply chain attack.",
    whereSystemsFail: "Apps ezisaba obuyinza obusukkiridde — app ey'ettaala esaba okufuna SMS kabonero ka bulabe. Apps ez'obulimba zikoppa apps ezimanyiddwa ne ziteekamu malware. APK eziteereddwa okuva ku nsibuko etesigika. Apps ezitafunye patches nga zirina obunafu obumanyiddwa. Updates ezikyusiddwa ne zireeta code ey'obulabe nga ziyita mu kkubo eryesigika.",
    howToDefend: [
      "Teeka apps okuva mu official stores zokka.",
      "Kebera permissions — gaana obuyinza app bw'etetaaga ddala.",
      "Kebera developer — ebiteeso by'abakozesa, omuwendo gw'abawanudde, n'erinnya ly'oyo azifulumya.",
      "Bulijjo teeka updates ku apps — updates ziziba obunafu.",
      "Weewale apps ezibiddwa obuyinza oba ezakoppebwa mu ngeri etakkirizibwa — zitera okubaamu malware.",
      "Gyamu apps z'otakozesa — kino kikendeeza attack surface."
    ],
    selfCheck: [
      "Lwaki kikulu gy'owanula app?",
      "Kabonero ki akalaga obulabe mu kusaba kwa app obuyinza?",
      "Sideloading kye ki, era lwaki kya kabi?",
      "Supply chain attack kye ki?",
      "Waayo engeri bbiri ez'okukakasa nti app ntuufu."
    ]
  },
  teacherSection: {
    technicalFraming: [
      "App signing ekozesa cryptographic certificates; OS ekakasa signature nga tennateeka app. APK ezikyusiddwa ziremererwa okukakasa signature okuggyako nga zizze zisayiniddwa buggya.",
      "Permission models: Android's runtime permissions ne iOS's entitlement model zikomya okufuna; least privilege kitegeeza okuwa obuyinza obutono obwetaagisa.",
      "Sideloading egyaawo kwekebejja kwa store era emirundi mingi eyisa obubaka obulabula ku signature verification; y'ekkubo erisinga okuleeta malware mu bitundu ebitali byangu kufuna official stores.",
      "Supply chain attacks (enkola z'okuzimba app ezifuniddwa abalumba, dependencies ez'obulabe) zisobola okukosa ne apps ezesigika — abakuumi beetaaga integrity monitoring, pinned dependencies, n'okuzimba apps mu ngeri eddemu okufaanana.",
      "Repackaged malware: abalumba basumulula apps ezimanyiddwa, ne bateekamu code ey'obulabe, ne bazisayinako buggya, ne bazisaasaanya. Okukebera signature n'obwesigwa biyamba okuzuula nnyingi naye si zonna.",
      "Okuteeka updates mu budde kikulu: apps ezitalina patches zisigala zirina CVEs ezimanyiddwa; automatic updates zikendeeza okuba mu bulabe."
    ],
    teachingTip: "Abayizi basabe okuggulawo app permission settings ku ssimu yaabwe balonde obuyinza obumu bwe bayinza okuggyako — kino kiraga least privilege mu ngeri ey'amangu.",
    discussionPrompt: "Mukwano gwo akutumira APK y'omuzannyo ogumanyiddwa ng'agamba nti 'ya bwerere.' Biki ebiyinza okuba akabi, era wandikebedde ki nga tonnagiteeka?",
    extension: "Nnyonnyola app signing mu sentensi emu — digital seal ekakasa nti app eva eri developer waayo era nti tekyusiddwaamu."
  }
};
