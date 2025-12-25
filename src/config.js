export const CONFIG = {
  appName: "NavkarJaap",
  mantra: {
    english: {
      name: "Navkar Mantra",
      lines: [
        ["Namo", "Arihantanam"],
        ["Namo", "Siddhanam"],
        ["Namo", "Ayariyanam"],
        ["Namo", "Uvajjhayanam"],
        ["Namo", "Loe", "Savva", "Sahunam"],
        ["Eso", "Pancha", "Namukkaro"],
        ["Savva", "Pavappanasano"],
        ["Mangalanam", "Cha", "Savvesim"],
        ["Padhamam", "Havai", "Mangalam"]
      ]
    },
    hindi: {
      name: "णमोकार मंत्र",
      lines: [
        ["नमो", "अरिहंताणं"],
        ["नमो", "सिद्धाणं"],
        ["नमो", "आयरियाणं"],
        ["नमो", "उवज्झायाणं"],
        ["नमो", "लोए", "सव्व", "साहूणं।"],
        ["एसो", "पंच", "नमुक्कारो"],
        ["सव्व", "पावप्पणासणो"],
        ["मंगलाणं", "च", "सव्वेसिं"],
        ["पढमं", "हवई", "मंगलं।"]
      ]
    },
    gujarati: {
      name: "નવકાર મંત્ર",
      lines: [
        ["નમો", "અરિહંતાણં"],
        ["નમો", "સિદ્ધાણં"],
        ["નમો", "આયરિયાણં"],
        ["નમો", "ઉવજ્ઝાયાણં"],
        ["નમો", "લોએ", "સવ્વ સાહૂણં |"],
        ["એસો", "પંચ", "નમુક્કારો"],
        ["સવ્વ", "પાવપ્પણાસણો"],
        ["મંગલાણં", "ચ", "સવ્વેસિં"],
        ["પઢમં", "હવઇ", "મંગલં ||"]
      ]
    }
  },
  // Bhagvan Mantra structure: 4 tap groups
  // Tap 1: prefix1 (ॐ ह्रीं श्रीं)
  // Tap 2: prefix2 (अर्हं श्री)  
  // Tap 3: bhagvanName (unique per Tirthankar)
  // Tap 4: suffix (नमः)
  bhagvanMantraTemplate: {
    prefix1: { gujarati: "ॐ હ્રીં શ્રીં", hindi: "ॐ ह्रीं श्रीं", english: "Om Hreem Shreem" },
    prefix2: { gujarati: "અર્હં શ્રી", hindi: "अर्हं श्री", english: "Arham Shri" },
    suffix: { gujarati: "નમઃ", hindi: "नमः", english: "Namah" }
  },
  bhagvanList: [
    {
      id: 1, displayName: { gujarati: "શ્રી આદિનાથ ભગવાન", hindi: "आदिनाथ भगवान", english: "Lord Adinath" },
      mantraName: { gujarati: "આદિનાથાય", hindi: "आदिनाथाय", english: "Adinathay" }
    },
    {
      id: 2, displayName: { gujarati: "શ્રી અજિતનાથ ભગવાન", hindi: "अजितनाथ भगवान", english: "Lord Ajitnath" },
      mantraName: { gujarati: "અજિતનાથાય", hindi: "अजितनाथाय", english: "Ajitnathay" }
    },
    {
      id: 3, displayName: { gujarati: "શ્રી સંભવનાથ ભગવાન", hindi: "सम्भवनाथ भगवान", english: "Lord Sambhavnath" },
      mantraName: { gujarati: "સંભવનાથાય", hindi: "सम्भवनाथाय", english: "Sambhavnathay" }
    },
    {
      id: 4, displayName: { gujarati: "શ્રી અભિનંદન સ્વામી", hindi: "अभिनन्दन स्वामी", english: "Lord Abhinandan Swami" },
      mantraName: { gujarati: "અભિનંદન સ્વામિને", hindi: "अभिनन्दन स्वामिने", english: "Abhinandan Swamine" }
    },
    {
      id: 5, displayName: { gujarati: "શ્રી સુમતિનાથ ભગવાન", hindi: "सुमतिनाथ भगवान", english: "Lord Sumatinath" },
      mantraName: { gujarati: "સુમતિનાથાય", hindi: "सुमतिनाथाय", english: "Sumatinathay" }
    },
    {
      id: 6, displayName: { gujarati: "શ્રી પદ્મપ્રભ સ્વામી", hindi: "पद्मप्रभ स्वामी", english: "Lord Padmaprabha Swami" },
      mantraName: { gujarati: "પદ્મપ્રભ સ્વામિને", hindi: "पद्मप्रभ स्वामिने", english: "Padmaprabha Swamine" }
    },
    {
      id: 7, displayName: { gujarati: "શ્રી સુપાર્શ્વનાથ ભગવાન", hindi: "सुपार्श्वनाथ भगवान", english: "Lord Suparshvanath" },
      mantraName: { gujarati: "સુપાર્શ્વનાથાય", hindi: "सुपार्श्वनाथाय", english: "Suparshvanathay" }
    },
    {
      id: 8, displayName: { gujarati: "શ્રી ચંદ્રપ્રભ સ્વામી", hindi: "चन्द्रप्रभ स्वामी", english: "Lord Chandraprabha Swami" },
      mantraName: { gujarati: "ચંદ્રપ્રભ સ્વામિને", hindi: "चन्द्रप्रभ स्वामिने", english: "Chandraprabha Swamine" }
    },
    {
      id: 9, displayName: { gujarati: "શ્રી સુવિધિનાથ ભગવાન", hindi: "सुविधिनाथ भगवान", english: "Lord Suvidhinath" },
      mantraName: { gujarati: "સુવિધિનાથાય", hindi: "सुविधिनाथाय", english: "Suvidhinathay" }
    },
    {
      id: 10, displayName: { gujarati: "શ્રી શીતલનાથ ભગવાન", hindi: "शीतलनाथ भगवान", english: "Lord Sheetalnath" },
      mantraName: { gujarati: "શીતલનાથાય", hindi: "शीतलनाथाय", english: "Sheetalnathay" }
    },
    {
      id: 11, displayName: { gujarati: "શ્રી શ્રેયાંસનાથ ભગવાન", hindi: "श्रेयांसनाथ भगवान", english: "Lord Shreyansnath" },
      mantraName: { gujarati: "શ્રેયાંસનાથાય", hindi: "श्रेयांसनाथाय", english: "Shreyansnathay" }
    },
    {
      id: 12, displayName: { gujarati: "શ્રી વાસુપૂજ્ય સ્વામી", hindi: "वासुपूज्य स्वामी", english: "Lord Vasupujya Swami" },
      mantraName: { gujarati: "વાસુપૂજ્ય સ્વામિને", hindi: "वासुपूज्य स्वामिने", english: "Vasupujya Swamine" }
    },
    {
      id: 13, displayName: { gujarati: "શ્રી વિમલનાથ ભગવાન", hindi: "विमलनाथ भगवान", english: "Lord Vimalnath" },
      mantraName: { gujarati: "વિમલનાથાય", hindi: "विमलनाथाय", english: "Vimalnathay" }
    },
    {
      id: 14, displayName: { gujarati: "શ્રી અનંતનાથ ભગવાન", hindi: "अनंतनाथ भगवान", english: "Lord Anantnath" },
      mantraName: { gujarati: "અનંતનાથાય", hindi: "अनंतनाथाय", english: "Anantnathay" }
    },
    {
      id: 15, displayName: { gujarati: "શ્રી ધર્મનાથ ભગવાન", hindi: "धर्मनाथ भगवान", english: "Lord Dharmanath" },
      mantraName: { gujarati: "ધર્મનાથાય", hindi: "धर्मनाथाय", english: "Dharmanathay" }
    },
    {
      id: 16, displayName: { gujarati: "શ્રી શાંતિનાથ ભગવાન", hindi: "शान्तिनाथ भगवान", english: "Lord Shantinath" },
      mantraName: { gujarati: "શાંતિનાથાય", hindi: "शान्तिनाथाय", english: "Shantinathay" }
    },
    {
      id: 17, displayName: { gujarati: "શ્રી કુંથુનાથ ભગવાન", hindi: "कुन्थुनाथ भगवान", english: "Lord Kunthunath" },
      mantraName: { gujarati: "કુંથુનાથાય", hindi: "कुन्थुनाथाय", english: "Kunthunathay" }
    },
    {
      id: 18, displayName: { gujarati: "શ્રી અરનાથ ભગવાન", hindi: "अरनाथ भगवान", english: "Lord Aranath" },
      mantraName: { gujarati: "અરનાથાય", hindi: "अरनाथाय", english: "Aranathay" }
    },
    {
      id: 19, displayName: { gujarati: "શ્રી મલ્લિનાથ ભગવાન", hindi: "मल्लिनाथ भगवान", english: "Lord Mallinath" },
      mantraName: { gujarati: "મલ્લિનાથાય", hindi: "मल्लिनाथाय", english: "Mallinathay" }
    },
    {
      id: 20, displayName: { gujarati: "શ્રી મુનિસુવ્રત સ્વામી", hindi: "मुनिसुव्रत स्वामी", english: "Lord Munisuvrat Swami" },
      mantraName: { gujarati: "મુનિસુવ્રત સ્વામિને", hindi: "मुनिसुव्रत स्वामिने", english: "Munisuvrat Swamine" }
    },
    {
      id: 21, displayName: { gujarati: "શ્રી નમિનાથ ભગવાન", hindi: "नमिनाथ भगवान", english: "Lord Naminath" },
      mantraName: { gujarati: "નમિનાથાય", hindi: "नमिनाथाय", english: "Naminathay" }
    },
    {
      id: 22, displayName: { gujarati: "શ્રી નેમિનાથ ભગવાન", hindi: "नेमिनाथ भगवान", english: "Lord Neminath" },
      mantraName: { gujarati: "નેમિનાથાય", hindi: "नेमिनाथाय", english: "Neminathay" }
    },
    {
      id: 23, displayName: { gujarati: "શ્રી શંખેશ્વર પાર્શ્વનાથ ભગવાન", hindi: "शंखेश्वर पार्श्वनाथ भगवान", english: "Lord Shankheshwar Parshvanath" },
      mantraName: { gujarati: "શંખેશ્વર પાર્શ્વનાથાય", hindi: "शंखेश्वर पार्श्वनाथाय", english: "Shankheshwar Parshvanathay" },
      hasVariants: true  // Enable secondary dropdown for 108 variants
    },
    {
      id: 24, displayName: { gujarati: "શ્રી મહાવીર સ્વામી", hindi: "महावीर स्वामी", english: "Lord Mahavir Swami" },
      mantraName: { gujarati: "મહાવીર સ્વામિને", hindi: "महावीर स्વામિને", english: "Mahavir Swamine" }
    },
    {
      id: 25, displayName: { gujarati: "શ્રી સીમંધર સ્વામી", hindi: "सीमंधर स्वामी", english: "Lord Simandhar Swami" },
      mantraName: { gujarati: "સીમંધર સ્વામિને", hindi: "सीमंधर स्वामिने", english: "Simandhar Swamine" }
    },
    {
      id: 26, displayName: { gujarati: "શ્રી ગૌતમ સ્વામી", hindi: "गौतम स्वामी", english: "Lord Gautam Swami" },
      mantraName: { gujarati: "ગૌતમ સ્વામિને", hindi: "गौतम स्वामिने", english: "Gautam Swamine" }
    },
    {
      id: 27, displayName: { gujarati: "દેવ - દેવી", hindi: "देव - देवी", english: "Dev - Devi" },
      mantraName: { gujarati: "નમઃ", hindi: "नमः", english: "Namah" },
      hasDevDeviVariants: true // Enable secondary dropdown for Dev-Devi
    },
    {
      id: 28, displayName: { gujarati: "૧૦૮ પાર્શ્વનાથ જાપ", hindi: "१०८ पार्श्वनाथ जाप", english: "108 Parshwanath Jaap" },
      mantraName: { gujarati: "પાર્શ્વનાથાય", hindi: "पार्श्वनाथाय", english: "Parshvanathay" },
      is108Parshwanath: true  // Special type for 108 different mantras
    }
  ],
  // 108 Parshwanath names for variants and 108 Parshwanath Jaap
  parshwanath108Names: [
    { hindi: "शंखेश्वर", english: "Shankheshwar", gujarati: "શંખેશ્વર" },
    { hindi: "अन्तरिक्ष", english: "Antriksh", gujarati: "અન્તરિક્ષ" },
    { hindi: "चिंतामणि", english: "Chintamani", gujarati: "ચિંતામણિ" },
    { hindi: "आनंदा", english: "Aananda", gujarati: "આનંદા" },
    { hindi: "अजाहरा", english: "Ajahara", gujarati: "અજાહરા" },
    { hindi: "अलौकिक", english: "Alaukik", gujarati: "અલૌકિક" },
    { hindi: "अमिझरा", english: "Amizara", gujarati: "અમિઝરા" },
    { hindi: "अमृतझरा", english: "Amrutjara", gujarati: "અમૃતઝરા" },
    { hindi: "आशापूरण", english: "Ashapuran", gujarati: "આશાપૂરણ" },
    { hindi: "अवंती", english: "Avanti", gujarati: "અવંતી" },
    { hindi: "बलेजा", english: "Bareja", gujarati: "બલેજા" },
    { hindi: "भाभा", english: "Bhabha", gujarati: "ભાભા" },
    { hindi: "भद्रेश्वर", english: "Bhadreshwar", gujarati: "ભદ્રેશ્વર" },
    { hindi: "भटेवा", english: "Bhateva", gujarati: "ભટેવા" },
    { hindi: "भयभंजन", english: "Bhaybhanjan", gujarati: "ભયભંજન" },
    { hindi: "भीड़भंजन", english: "Bhidbhanjan", gujarati: "ભીડભંજન" },
    { hindi: "भिलडीया", english: "Bhiladiya", gujarati: "ભિલડીયા" },
    { hindi: "भुवन", english: "Bhuvan", gujarati: "ભુવન" },
    { hindi: "चंपा", english: "Champa", gujarati: "ચંપા" },
    { hindi: "चंदा", english: "Chanda", gujarati: "ચંદા" },
    { hindi: "चारूप", english: "Charup", gujarati: "ચારૂપ" },
    { hindi: "चोरवाडी", english: "Chorvad", gujarati: "ચોરવાડી" },
    { hindi: "दादा", english: "Dada", gujarati: "દાદા" },
    { hindi: "धींगडमल्ल", english: "Dhingadmal", gujarati: "ધીંગડમલ્લ" },
    { hindi: "धृत कल्लोल", english: "Dhrutkallol", gujarati: "ધૃત કલ્લોલ" },
    { hindi: "दोकडीया", english: "Dokadiya", gujarati: "દોકડીયા" },
    { hindi: "डोसला", english: "Dosla", gujarati: "ડોસલા" },
    { hindi: "दुखभंजन", english: "Dukhbhanjan", gujarati: "દુખભંજન" },
    { hindi: "फल्वृद्धि", english: "Falvruddhi", gujarati: "ફલ્વૃદ્ધિ" },
    { hindi: "गाडलिया", english: "Gadaliya", gujarati: "ગાડલિયા" },
    { hindi: "गंभीरा", english: "Gambhira", gujarati: "ગંભીરા" },
    { hindi: "घीया", english: "Ghiya", gujarati: "ઘીયા" },
    { hindi: "गिरुआ", english: "Girua", gujarati: "ગિરુઆ" },
    { hindi: "गोडीजी", english: "Godiji", gujarati: "ગોડીજી" },
    { hindi: "हमीरपुरा", english: "Hamirpura", gujarati: "હમીરપુરા" },
    { hindi: "ॐकार", english: "Hrimkar", gujarati: "ૐકાર" },
    { hindi: "जगवल्लभ", english: "Jagvallabh", gujarati: "જગવલ્લભ" },
    { hindi: "जीरावला", english: "Jirawala", gujarati: "જીરાવલા" },
    { hindi: "जोटिंगडा", english: "Jotingada", gujarati: "જોટિંગડા" },
    { hindi: "कच्छुलिका", english: "Kachhulika", gujarati: "કચ્છુલિકા" },
    { hindi: "कल्हारा", english: "Kalhara", gujarati: "કલ્હારા" },
    { hindi: "कलिकुंड", english: "Kalikund", gujarati: "કલિકુંડ" },
    { hindi: "कल्पद्रुम", english: "Kalpadrum", gujarati: "કલ્પદ્રુમ" },
    { hindi: "कल्याण", english: "Kalyan", gujarati: "કલ્યાણ" },
    { hindi: "कामितपूरण", english: "Kamitpuran", gujarati: "કામિતપૂરણ" },
    { hindi: "कंकण", english: "Kankan", gujarati: "કંકણ" },
    { hindi: "कंसारी", english: "Kansari", gujarati: "કંસારી" },
    { hindi: "करेड़ा", english: "Kareda", gujarati: "કરેડા" },
    { hindi: "केशरीया", english: "Kesariya", gujarati: "કેશરિયા" },
    { hindi: "कोका", english: "Koka", gujarati: "કોકા" },
    { hindi: "कुकडेश्वर", english: "Kukdeshwar", gujarati: "કુકડેશ્વર" },
    { hindi: "कुंकुमरोल", english: "Kumkumarol", gujarati: "કુંકુમરોલ" },
    { hindi: "लोढण", english: "Lodhan", gujarati: "લોઢણ" },
    { hindi: "लोद्रवा", english: "Lodrva", gujarati: "લોદ્રવા" },
    { hindi: "महादेव", english: "Mahadeva", gujarati: "મહાદેવ" },
    { hindi: "मक्षी", english: "Makshi", gujarati: "મક્ષી" },
    { hindi: "मंडोवरा", english: "Mandovra", gujarati: "મંડોવરા" },
    { hindi: "मनमोहन", english: "Manmohan", gujarati: "મનમોહન" },
    { hindi: "मनोरंजन", english: "Manoranjan", gujarati: "મનોરંજન" },
    { hindi: "मनोवांछित", english: "Manovanchhit", gujarati: "મનોવાંછિત" },
    { hindi: "मुहरी", english: "Muhari", gujarati: "મુહરી" },
    { hindi: "मूलेवा", english: "Muleva", gujarati: "મૂલેવા" },
    { hindi: "नागेश्वर", english: "Nageshwar", gujarati: "નાગેશ્વર" },
    { hindi: "नागफणा", english: "Nagfana", gujarati: "નાગફણા" },
    { hindi: "नाकोडा", english: "Nakoda", gujarati: "નાકોડા" },
    { hindi: "नारंगा", english: "Naranga", gujarati: "નારંગા" },
    { hindi: "नवखंडा", english: "Navkhanda", gujarati: "નવખંડા" },
    { hindi: "नवलखा", english: "Navlakha", gujarati: "નવલખા" },
    { hindi: "नवपल्लव", english: "Navpallav", gujarati: "નવપલ્લવ" },
    { hindi: "नवसारी", english: "Navsari", gujarati: "નવસારી" },
    { hindi: "पद्मावती", english: "Padmavati", gujarati: "પદ્માવતી" },
    { hindi: "पल्लविया", english: "Pallavia", gujarati: "પલ્લવિયા" },
    { hindi: "पंचासरा", english: "Panchasara", gujarati: "પંચાસરા" },
    { hindi: "पोसीना", english: "Poshina", gujarati: "પોસીના" },
    { hindi: "पोसली", english: "Posli", gujarati: "પોસલી" },
    { hindi: "प्रगट प्रभावी", english: "Pragatprabhavi", gujarati: "પ્રગટ પ્રભાવી" },
    { hindi: "राणकपुरा", english: "Ranakpura", gujarati: "રાણકપુરા" },
    { hindi: "रत्नचिंतामणि", english: "Ratnachintamani", gujarati: "રત્નચિંતામણિ" },
    { hindi: "रावण", english: "Ravan", gujarati: "રાવણ" },
    { hindi: "सहस्त्रफणा", english: "Sahastrafana", gujarati: "સહસ્ત્રફણા" },
    { hindi: "समीना", english: "Samina", gujarati: "સમીના" },
    { hindi: "सम्मेतशिखर", english: "Sammetshikhar", gujarati: "સમ્મેતશિખર" },
    { hindi: "संकटहरण", english: "Sankatharan", gujarati: "સંકટહરણ" },
    { hindi: "सप्तफणा", english: "Saptfana", gujarati: "સપ્તફણા" },
    { hindi: "सेसली", english: "Sesli", gujarati: "સેસલી" },
    { hindi: "स्वफुल्लिंग", english: "Sfuling", gujarati: "સ્વફુલ્લિંગ" },
    { hindi: "शामला", english: "Shamla", gujarati: "શામલા" },
    { hindi: "शंखला", english: "Shankhla", gujarati: "શંખલા" },
    { hindi: "शेरिसा", english: "Sherisa", gujarati: "શેરિસા" },
    { hindi: "सिरोडीया", english: "Shirodiya", gujarati: "સિરોડીયા" },
    { hindi: "सोगथिया", english: "Sogathiya", gujarati: "સોગથિયા" },
    { hindi: "सोम चिंतामणि", english: "Som Chintamani", gujarati: "સોમ ચિંતામણિ" },
    { hindi: "स्थंभण", english: "Stambhan", gujarati: "સ્થંભણ" },
    { hindi: "सुखसागर", english: "Sukhsagar", gujarati: "સુખસાગર" },
    { hindi: "सुलतान", english: "Sultan", gujarati: "સુલતાન" },
    { hindi: "सूरज मंडण", english: "Surajmandan", gujarati: "સૂરજ મંડણ" },
    { hindi: "स्वयंभू", english: "Swayambhu", gujarati: "સ્વયંભૂ" },
    { hindi: "टांकला", english: "Tankla", gujarati: "ટાંકલા" },
    { hindi: "उमरवाड़ी", english: "Umarvadi", gujarati: "ઉમરવાડી" },
    { hindi: "उवसग्गहरं", english: "Uvasaggaharam", gujarati: "ઉવસગ્ગહરં" },
    { hindi: "वाडी", english: "Vadi", gujarati: "વાડી" },
    { hindi: "वही", english: "Vahi", gujarati: "વહી" },
    { hindi: "वाराणसी", english: "Varanasi", gujarati: "વારાણસી" },
    { hindi: "वरकाणा", english: "Varkana", gujarati: "વરકાણા" },
    { hindi: "विघ्नहरा", english: "Vighnahara", gujarati: "વિઘ્નહરા" },
    { hindi: "विघ्नहरापहार", english: "Vighnapahar", gujarati: "વિઘ્નહરાપહાર" },
    { hindi: "विजय चिंतामणि", english: "Vijay Chintamani", gujarati: "વિજય ચિંતામણિ" },
    { hindi: "विमल", english: "Vimal", gujarati: "વિમલ" }
  ],
  // Dev-Devi List (Placeholders - to be updated)
  devDeviList: [
    { hindi: "पद्मावती माता", english: "Padmavati Mata", gujarati: "પદ્માવતી માતા" },
    { hindi: "नाकोडा भैरव", english: "Nakoda Bhairav", gujarati: "નાકોડા ભૈરવ" },
    { hindi: "घंटाकर्ण महावीर", english: "Ghantakarna Mahavir", gujarati: "ઘંટાકર્ણ મહાવીર" },
    { hindi: "मणिभद्र वीर", english: "Manibhadra Veer", gujarati: "મણિભદ્ર વીર" },
    { hindi: "भोमियाजी", english: "Bhomiyaji", gujarati: "ભોમિયાજી" }
  ]
};
