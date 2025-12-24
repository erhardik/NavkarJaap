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
        ["નમો", "લોએ", "સવ્વ", "સાહૂણં"],
        ["એસો", "પંચ", "ણમુક્કારો"],
        ["સવ્વ", "પાવપ્પણાસણો"],
        ["મંગલાણં", "ચ", "સવ્વેસિં"],
        ["પઢમં", "હવઇ", "મંગલં"]
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
      mantraName: { gujarati: "શંખેશ્વર પાર્શ્વનાથાય", hindi: "शंखेश्वर पार्श्वनाथाय", english: "Shankheshwar Parshvanathay" }
    },
    {
      id: 24, displayName: { gujarati: "શ્રી મહાવીર સ્વામી", hindi: "महावीर स्वामी", english: "Lord Mahavir Swami" },
      mantraName: { gujarati: "મહાવીર સ્વામિને", hindi: "महावीर स्वामिने", english: "Mahavir Swamine" }
    }
  ]
};
