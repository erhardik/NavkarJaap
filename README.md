# 📿 NavkarJaap

A beautiful, spiritual Jain mantra chanting application built with React. Practice the sacred Navkar Mantra and 24 Tirthankar Bhagvan mantras with an immersive notebook-style interface.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-61dafb.svg)
![Vite](https://img.shields.io/badge/Vite-5-646cff.svg)

## ✨ Features

### 🕉️ Navkar Mantra Jaap
- **Interactive Writing Experience**: Tap each word to "write" the mantra
- **Realistic Notebook UI**: School notebook design with ruled lines and margin
- **Page Flip Animation**: Beautiful 3D page turn after completing each mantra
- **Multi-language Support**: English, Hindi (हिन्दी), and Gujarati (ગુજરાતી)

### 🙏 Bhagvan Jaap (24 Tirthankars)
- **108 Pre-written Mantras**: Complete one mala (108 chants) per session
- **4-Tap Fast Chanting**: Combined word groups for efficient practice
  - Tap 1: ॐ ह्रीं श्रीं
  - Tap 2: अर्हं श्री
  - Tap 3: [Bhagvan Name]
  - Tap 4: नमः
- **Auto-scroll**: Active line stays at top as you progress
- **All 24 Tirthankars**: From Adinath to Mahavir Swami

### 📊 Progress Tracking
- **Lifetime Counter**: Total mantras chanted across all sessions
- **Mala Counter**: Track completed 108-count malas
- **Visual Progress Bar**: See your progress through 108 mantras

### 🎨 Customization
- **Light/Dark Mode**: Toggle between themes
- **Adjustable Font Size**: A+ / A- buttons for comfortable reading
- **Language Switching**: Instantly switch between 3 languages

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/erhardik/NavkarJaap.git

# Navigate to project directory
cd NavkarJaap

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📱 Usage

### Navkar Mantra (Left Page)
1. Open the app - you'll see the Navkar Mantra
2. Tap each word in sequence - they turn blue when "written"
3. Complete all words → page flips automatically
4. Your count increases with each completion

### Bhagvan Jaap (Right Page)
1. Tap the **→** arrow to navigate to Bhagvan Jaap
2. Select a Tirthankar from the dropdown
3. Tap the **glowing word group** (4 taps = 1 mantra complete)
4. Page auto-scrolls to next line
5. After 108 completions → Mala counter +1, fresh page appears

### Navigation
- **→ Arrow**: Go to Bhagvan Jaap page
- **← Arrow**: Return to Navkar Jaap page
- **?** Button: Restart the guided tour
- **☾/☀** Button: Toggle dark/light mode

## 🏗️ Tech Stack

- **React 18** - UI Framework
- **Vite** - Build Tool
- **CSS Variables** - Theming
- **LocalStorage** - Progress persistence

## 📂 Project Structure

```
NavkarJaap/
├── src/
│   ├── App.jsx        # Main application component
│   ├── config.js      # Mantra data & configuration
│   ├── index.css      # All styles
│   └── main.jsx       # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🙏 The 24 Tirthankars

| # | Name | Mantra |
|---|------|--------|
| 1 | Adinath | ॐ ह्रीं श्रीं अर्हं श्री आदिनाथाय नमः |
| 2 | Ajitnath | ॐ ह्रीं श्रीं अर्हं श्री अजितनाथाय नमः |
| ... | ... | ... |
| 23 | Parshvanath | ॐ ह्रीं श्रीं अर्हं श्री शंखेश्वर पार्श्वनाथाय नमः |
| 24 | Mahavir | ॐ ह्रीं श्रीं अर्हं श्री महावीर स्वामिने नमः |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by the Jain tradition of mantra chanting
- Built with love for spiritual practice

---

**जय जिनेंद्र! 🙏**
