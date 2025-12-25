import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CONFIG } from './config';
import './index.css';

// Helper function to localize digits
const localizeDigits = (num, language) => {
  const digits = num.toString().split('');
  const hindiDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
  const gujaratiDigits = ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'];

  return digits.map(d => {
    if (language === 'hindi') return hindiDigits[parseInt(d)];
    if (language === 'gujarati') return gujaratiDigits[parseInt(d)];
    return d;
  }).join('');
};

// Navkar Mantra Page Component
const MantraPage = ({ lang, progress, pageCount, isFlipping, className = "", onWordClick = null, counterActivated = false }) => {
  const currentMantra = CONFIG.mantra[lang];
  let wordCounter = 0;

  return (
    <div className={`paper ${className} ${isFlipping ? 'flip' : ''}`}>
      {currentMantra.lines.map((lineWords, lineIndex) => (
        <div key={`${lang}-${lineIndex}`} className="line">
          {lineIndex === 0 && (
            <div className={`margin-counter ${counterActivated ? 'counter-active' : ''}`}>
              {localizeDigits(pageCount, lang)}
            </div>
          )}
          {lineWords.map((word, wordIndex) => {
            const globalIndex = wordCounter++;
            const status = globalIndex < progress ? 'written' : 'unwritten';
            return (
              <span
                key={wordIndex}
                id={globalIndex === 0 ? "first-word" : undefined}
                className={`word ${status}`}
                onClick={onWordClick ? () => onWordClick(globalIndex) : undefined}
              >
                {word}
              </span>
            );
          })}
        </div>
      ))}
      {[...Array(Math.max(0, 9 - currentMantra.lines.length))].map((_, i) => (
        <div key={`empty-${i}`} className="line"></div>
      ))}
    </div>
  );
};

// Bhagvan Jaap 108-line Component
const BhagvanJaapPage = ({ lang, selectedBhagvan, selectedVariant, completedCount, currentTapIndex, onTapGroup, malaCount }) => {
  const bhagvan = CONFIG.bhagvanList.find(b => b.id === selectedBhagvan) || CONFIG.bhagvanList[0];
  const template = CONFIG.bhagvanMantraTemplate;
  const activeLineRef = useRef(null);
  const wrapperRef = useRef(null);

  // Check if this is 108 Parshwanath Jaap (different mantra per line)
  const is108Parshwanath = bhagvan.is108Parshwanath;

  // Check if this is Shankheshwar with variant selected
  const hasParshwanathVariant = bhagvan.hasVariants && selectedVariant !== null;
  const hasDevDeviVariant = bhagvan.hasDevDeviVariants && selectedVariant !== null;

  // Get the mantra name for each line
  const getMantraNameForLine = (lineIndex) => {
    // Language-specific suffixes
    const parshwanathSuffix = {
      hindi: "पार्श्वनाथाय",
      english: "Parshvanathay",
      gujarati: "પાર્શ્વનાથાય"
    };

    if (is108Parshwanath) {
      // For 108 Parshwanath Jaap, each line has different name
      const name = CONFIG.parshwanath108Names[lineIndex];
      return name ? `${name[lang]} ${parshwanathSuffix[lang]}` : bhagvan.mantraName[lang];
    } else if (hasParshwanathVariant) {
      // For Shankheshwar with variant, use selected variant name
      const variantName = CONFIG.parshwanath108Names[selectedVariant];
      return variantName ? `${variantName[lang]} ${parshwanathSuffix[lang]}` : bhagvan.mantraName[lang];
    } else if (hasDevDeviVariant) {
      // For Dev-Devi, use fullMantra if available, else selected name + Namah
      const variantName = CONFIG.devDeviList[selectedVariant];
      if (variantName && variantName.fullMantra) {
        return variantName.fullMantra[lang];
      }
      return variantName ? `${variantName[lang]} ${bhagvan.mantraName[lang]}` : bhagvan.mantraName[lang];
    }
    return bhagvan.mantraName[lang];
  };

  // Auto-scroll to keep active line in view
  useEffect(() => {
    if (wrapperRef.current) {
      if (completedCount > 0 && activeLineRef.current) {
        // Calculate scroll position to show active line at top area
        const wrapper = wrapperRef.current;
        const activeLine = activeLineRef.current;
        const lineTop = activeLine.offsetTop;
        const scrollMargin = 10; // Small margin from top

        wrapper.scrollTo({
          top: lineTop - scrollMargin,
          behavior: 'smooth'
        });
      } else if (completedCount === 0) {
        // Reset to top if starting over or switching to fresh bhagvan
        wrapperRef.current.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  }, [completedCount, selectedBhagvan, selectedVariant]);

  return (
    <div className="bhagvan-jaap-container">
      <div className="bhagvan-lines-wrapper" ref={wrapperRef}>
        {[...Array(108)].map((_, lineIndex) => {
          const lineNumber = lineIndex + 1;
          const isCompleted = lineIndex < completedCount;
          const isActive = lineIndex === completedCount;

          // Build 4 tap groups for this specific line
          const tapGroups = [
            template.prefix1[lang],
            template.prefix2[lang],
            getMantraNameForLine(lineIndex),
            template.suffix[lang]
          ];

          return (
            <div
              key={lineIndex}
              ref={isActive ? activeLineRef : null}
              className={`bhagvan-line ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}
            >
              <span className="bhagvan-line-number">
                {localizeDigits(lineNumber, lang)}
              </span>
              <div className="bhagvan-mantra-row">
                {tapGroups.map((group, groupIndex) => {
                  const isGroupCompleted = isCompleted || (isActive && groupIndex < currentTapIndex);
                  const isGroupActive = isActive && groupIndex === currentTapIndex;

                  return (
                    <span
                      key={groupIndex}
                      className={`bhagvan-tap-group ${isGroupCompleted ? 'written' : 'unwritten'} ${isGroupActive ? 'active-tap' : ''}`}
                      onClick={isGroupActive ? () => onTapGroup(groupIndex) : undefined}
                    >
                      {group}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress indicator */}
      <div className="bhagvan-progress-bar">
        <div
          className="bhagvan-progress-fill"
          style={{ width: `${(completedCount / 108) * 100}%` }}
        />
        <span className="bhagvan-progress-text">
          {localizeDigits(completedCount, lang)} / {localizeDigits(108, lang)}
        </span>
      </div>
    </div>
  );
};

const App = () => {
  // --- State ---
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'hindi');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [fontSize, setFontSize] = useState(() => parseFloat(localStorage.getItem('fontSize')) || 1.15);
  const [currentPage, setCurrentPage] = useState('navkar');

  const [counts, setCounts] = useState(() => {
    const saved = localStorage.getItem('counts_v3');
    return saved ? JSON.parse(saved) : { lifetime: 0, mala: 0 };
  });

  // Bhagvan Jaap specific state
  // Per-Bhagvan State (counts + progress)
  const [bhagvanStates, setBhagvanStates] = useState(() => {
    const saved = localStorage.getItem('bhagvan_states_v2');
    if (saved) return JSON.parse(saved);

    // Migration from v1 if exists
    const oldCounts = localStorage.getItem('bhagvan_counts_v1');
    if (oldCounts) {
      const parsed = JSON.parse(oldCounts);
      // Assign old counts to default Bhagvan (id 1)
      return {
        1: {
          lifetime: parsed.lifetime,
          mala: parsed.mala,
          completed: 0,
          currentTap: 0
        }
      };
    }
    return {};
  });

  const [selectedBhagvan, setSelectedBhagvan] = useState(() => {
    const saved = localStorage.getItem('selectedBhagvan');
    return saved ? parseInt(saved, 10) : 1;
  });

  // Selected variant for Shankheshwar Parshwanath (index into parshwanath108Names)
  const [selectedVariant, setSelectedVariant] = useState(() => {
    const saved = localStorage.getItem('selectedVariant');
    return saved ? parseInt(saved, 10) : 0;  // Default to first (Shankheshwar)
  });

  // Helpers to get current Bhagvan data
  const currentBhagvanState = bhagvanStates[selectedBhagvan] || { lifetime: 0, mala: 0, completed: 0, currentTap: 0 };
  const bhagvanCompletedCount = currentBhagvanState.completed;
  const bhagvanCurrentTap = currentBhagvanState.currentTap;
  const bhagvanCounts = { lifetime: currentBhagvanState.lifetime, mala: currentBhagvanState.mala };

  const [currentProgress, setCurrentProgress] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showBackConfirm, setShowBackConfirm] = useState(false);
  const [pageWritingCount, setPageWritingCount] = useState(() => {
    const savedCount = localStorage.getItem('pageWritingCount');
    return savedCount ? parseInt(savedCount, 10) : 1;
  });

  const [flipSnapshot, setFlipSnapshot] = useState(null);
  const [tourStep, setTourStep] = useState(() => {
    const seen = localStorage.getItem('hasSeenSpotlightTour_v1');
    return seen ? -1 : 0;
  });

  const [spotlightRect, setSpotlightRect] = useState(null);
  const [counterActivated, setCounterActivated] = useState(() => {
    return localStorage.getItem('counterActivated') === 'true';
  });

  const notebookRef = useRef(null);

  const currentMantra = CONFIG.mantra[lang];
  const flattenedWords = currentMantra.lines.flat();
  const totalWords = flattenedWords.length;

  // --- Effects ---
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize.toString());
    document.documentElement.style.setProperty('--mantra-size', `${fontSize}rem`);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('counts_v3', JSON.stringify(counts));
    localStorage.setItem('pageWritingCount', pageWritingCount.toString());
  }, [counts, pageWritingCount]);

  useEffect(() => {
    localStorage.setItem('bhagvan_states_v2', JSON.stringify(bhagvanStates));
  }, [bhagvanStates]);

  useEffect(() => {
    localStorage.setItem('selectedBhagvan', selectedBhagvan.toString());
  }, [selectedBhagvan]);

  useEffect(() => {
    localStorage.setItem('selectedVariant', selectedVariant.toString());
  }, [selectedVariant]);

  useEffect(() => {
    localStorage.setItem('counterActivated', counterActivated.toString());
  }, [counterActivated]);

  // Reset variant when Bhagvan changes to avoid invalid selections
  useEffect(() => {
    setSelectedVariant(0);
  }, [selectedBhagvan]);

  useEffect(() => {
    const handlePopState = (e) => {
      e.preventDefault();
      setShowBackConfirm(true);
      window.history.pushState(null, '', window.location.href);
    };
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // --- Handlers ---
  const triggerPageTurn = () => {
    if (isFlipping) return;

    setFlipSnapshot({
      lang: lang,
      progress: totalWords,
      pageCount: pageWritingCount
    });

    setIsFlipping(true);

    setCounts(prev => {
      const newLifetime = prev.lifetime + 1;
      const newMala = Math.floor(newLifetime / 108);
      return { lifetime: newLifetime, mala: newMala };
    });
    setPageWritingCount(prev => prev + 1);
    setCurrentProgress(0);

    setTimeout(() => {
      setIsFlipping(false);
      setFlipSnapshot(null);
      if (notebookRef.current) {
        notebookRef.current.scrollTo({ top: 0, behavior: 'auto' });
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  };

  const handleWordClick = useCallback((index) => {
    if (index !== currentProgress || isFlipping) return;

    if (index === 0 && !counterActivated) {
      setCounterActivated(true);
    }

    if (index === totalWords - 1) {
      setCurrentProgress(prev => prev + 1);
      setTimeout(() => triggerPageTurn(), 400);
    } else {
      setCurrentProgress(prev => prev + 1);
    }
  }, [currentProgress, isFlipping, totalWords, counterActivated]);

  // Bhagvan 4-tap handler
  const handleBhagvanTap = useCallback((tapIndex) => {
    if (tapIndex !== bhagvanCurrentTap) return;

    setBhagvanStates(prevStates => {
      // Get current state for this Bhagvan or default
      const current = prevStates[selectedBhagvan] || { lifetime: 0, mala: 0, completed: 0, currentTap: 0 };

      let nextState = { ...current };

      if (tapIndex === 3) {
        // Last tap of this line - complete the line
        nextState.currentTap = 0;

        if (current.completed === 107) {
          // Completed 108 - increment mala and reset progress
          nextState.lifetime = current.lifetime + 1;
          nextState.mala = current.mala + 1;
          nextState.completed = 0; // Reset for next mala
        } else {
          nextState.lifetime = current.lifetime + 1;
          nextState.completed = current.completed + 1;
        }
      } else {
        nextState.currentTap = current.currentTap + 1;
      }

      return {
        ...prevStates,
        [selectedBhagvan]: nextState
      };
    });
  }, [bhagvanCurrentTap, selectedBhagvan]); // Removed bhagvanCompletedCount as it is read from state update fn or derived


  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const changeFontSize = (delta) => {
    setFontSize(prev => {
      const next = Math.round((prev + delta) * 100) / 100;
      return Math.min(Math.max(next, 0.8), 1.5);
    });
  };

  const exitApp = () => {
    try {
      window.close();
    } catch (e) {
      alert("Thank you for your practice. You can now close the tab.");
    }
  };

  // --- Tour Logic ---
  const tourContent = [
    { title: "स्वागत है!", text: "इस वास्तविक नोटबुक में आध्यात्मिक शांति का अनुभव करें। चलिए शुरू करते हैं!", targetId: null },
    { title: "भाषा चुनें", text: "यहाँ से आप अंग्रेजी, हिंदी और गुजराती के बीच स्विच कर सकते हैं।", targetId: "lang-selector" },
    { title: "अक्षर का आकार", text: "अपनी सुविधा के अनुसार अक्षरों को छोटा या बड़ा करें।", targetId: "font-controls" },
    { title: "आपकी प्रगति", text: "यहाँ आप अपने कुल जाप (Lifetime) और माला देख सकते हैं। डार्क मोड भी यहाँ से बदलें।", targetId: "counters" },
    { title: "लिखना शुरू करें", text: "लिखने के लिए प्रत्येक शब्द पर टैप करें। शुरू करने के लिए पहले शब्द पर टैप करें!", targetId: "first-word" }
  ];

  const nextTour = () => {
    if (tourStep < tourContent.length - 1) {
      setTourStep(prev => prev + 1);
    } else {
      setTourStep(-1);
      setSpotlightRect(null);
      localStorage.setItem('hasSeenSpotlightTour_v1', 'true');
    }
  };

  // Reset Progress if language changes (Only for Navkar)
  useEffect(() => {
    setCurrentProgress(0);
    // For Bhagvan Jaap, we preserve progress even if language changes
  }, [lang]);

  // Update spotlight rect when tourStep changes
  useEffect(() => {
    if (tourStep === -1) return;

    const step = tourContent[tourStep];
    if (step.targetId) {
      const el = document.getElementById(step.targetId);
      if (el) {
        const rect = el.getBoundingClientRect();
        setSpotlightRect({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height
        });
      }
    } else {
      setSpotlightRect(null);
    }

    if (step && step.targetId === "first-word" && currentProgress > 0 && tourStep < tourContent.length - 1) {
      nextTour();
    }
  }, [tourStep, currentProgress]);

  const getLabel = (key) => {
    const labels = {
      lifetime: { english: 'Lifetime', hindi: 'Lifetime', gujarati: 'Lifetime' },
      mala: { english: 'Mala', hindi: 'Mala', gujarati: 'Mala' }
    };
    return labels[key][lang] || labels[key].english;
  };

  return (
    <div className="app-root">
      <header className="header">
        <div className="header-line-1">
          <h1 className="header-title">📿 {CONFIG.appName}</h1>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="font-controls" id="font-controls">
              <button className="font-btn" onClick={() => changeFontSize(0.1)}>A+</button>
              <button className="font-btn" onClick={() => changeFontSize(-0.1)}>A-</button>
            </div>
            <select
              className="lang-select"
              id="lang-selector"
              value={lang}
              onChange={(e) => {
                setLang(e.target.value);
                setCurrentProgress(0);
              }}
            >
              <option value="english">English</option>
              <option value="hindi">हिन्दी</option>
              <option value="gujarati">ગુજરાતી</option>
            </select>
          </div>
        </div>
        <div className="header-line-2" id="counters">
          <div className="counters">
            <span>{getLabel('lifetime')}: <strong>{currentPage === 'navkar' ? counts.lifetime : bhagvanCounts.lifetime}</strong></span>
            <span>{getLabel('mala')}: <strong>{currentPage === 'navkar' ? counts.mala : bhagvanCounts.mala}</strong></span>
          </div>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '☾' : '☀'}
          </button>
        </div>

        {/* Header Line 3 - Bhagvan Selector (only on Bhagvan page) */}
        {currentPage === 'bhagvan' && (
          <div className="header-line-3">
            <select
              className="bhagvan-select"
              value={selectedBhagvan}
              onChange={(e) => setSelectedBhagvan(parseInt(e.target.value, 10))}
            >
              {CONFIG.bhagvanList.map(bhagvan => (
                <option key={bhagvan.id} value={bhagvan.id}>
                  {bhagvan.displayName[lang]}
                </option>
              ))}
            </select>

            {/* Secondary dropdown for Shankheshwar Parshwanath variants */}
            {CONFIG.bhagvanList.find(b => b.id === selectedBhagvan)?.hasVariants && (
              <select
                className="bhagvan-variant-select"
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(parseInt(e.target.value, 10))}
              >
                {CONFIG.parshwanath108Names.map((name, index) => (
                  <option key={index} value={index}>
                    {name[lang]}
                  </option>
                ))}
              </select>
            )}

            {/* Dev-Devi Dropdown */}
            {CONFIG.bhagvanList.find(b => b.id === selectedBhagvan)?.hasDevDeviVariants && (
              <select
                className="bhagvan-variant-select"
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(parseInt(e.target.value, 10))}
              >
                {CONFIG.devDeviList.map((name, index) => (
                  <option key={index} value={index}>
                    {name[lang]}
                  </option>
                ))}
              </select>
            )}
          </div>
        )}
      </header>

      <main className="notebook-container" ref={notebookRef}>
        {currentPage === 'navkar' ? (
          <div style={{ position: 'relative', width: '100%', minHeight: 'calc(100vh - 80px)' }}>
            <MantraPage
              lang={lang}
              progress={currentProgress}
              pageCount={pageWritingCount}
              isFlipping={false}
              className="background"
              onWordClick={handleWordClick}
              counterActivated={counterActivated}
            />
            {flipSnapshot && (
              <MantraPage
                lang={flipSnapshot.lang}
                progress={flipSnapshot.progress}
                pageCount={flipSnapshot.pageCount}
                isFlipping={isFlipping}
                className="foreground"
                counterActivated={counterActivated}
              />
            )}
          </div>
        ) : (
          <BhagvanJaapPage
            lang={lang}
            selectedBhagvan={selectedBhagvan}
            selectedVariant={selectedVariant}
            completedCount={bhagvanCompletedCount}
            currentTapIndex={bhagvanCurrentTap}
            onTapGroup={handleBhagvanTap}
            malaCount={bhagvanCounts.mala}
          />
        )}
      </main>

      {/* Navigation Arrows */}
      {currentPage === 'navkar' && (
        <button
          className="nav-arrow nav-arrow-right"
          onClick={() => setCurrentPage('bhagvan')}
          title="Bhagvan Jaap"
        >
          →
        </button>
      )}
      {currentPage === 'bhagvan' && (
        <button
          className="nav-arrow nav-arrow-left"
          onClick={() => setCurrentPage('navkar')}
          title="Navkar Jaap"
        >
          ←
        </button>
      )}

      <button className="tour-trigger" onClick={() => setTourStep(0)}>
        ?
      </button>

      <button className="back-btn" onClick={() => setShowBackConfirm(true)}>
        ←
      </button>

      {/* Tour Overlay */}
      {tourStep !== -1 && (
        <div className="tour-overlay">
          {spotlightRect && (
            <div
              className="tour-spotlight"
              style={{
                top: spotlightRect.top - 5,
                left: spotlightRect.left - 5,
                width: spotlightRect.width + 10,
                height: spotlightRect.height + 10
              }}
            />
          )}
          <div
            className="tour-card"
            style={
              spotlightRect
                ? {
                  top: spotlightRect.top + spotlightRect.height + 20 > window.innerHeight - 200
                    ? spotlightRect.top - 200
                    : spotlightRect.top + spotlightRect.height + 20,
                  left: Math.min(Math.max(20, spotlightRect.left + (spotlightRect.width / 2) - 140), window.innerWidth - 300)
                }
                : { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
            }
          >
            <h2>{tourContent[tourStep].title}</h2>
            <p>{tourContent[tourStep].text}</p>
            <div className="tour-footer">
              <div className="tour-dot-container">
                {tourContent.map((_, i) => (
                  <div key={i} className={`tour-dot ${i === tourStep ? 'active' : ''}`} />
                ))}
              </div>
              <button
                className="tour-btn"
                onClick={nextTour}
                style={{
                  display: (tourContent[tourStep].targetId === "first-word" && currentProgress === 0) ? "none" : "block"
                }}
              >
                {tourStep === tourContent.length - 1 ? "Start Practice" : "Next"}
              </button>
            </div>
          </div>
        </div>
      )}

      {showBackConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Exit App?</h3>
            <p>One more count before you go?</p>
            <div className="modal-btns">
              <button className="modal-btn cancel" onClick={() => setShowBackConfirm(false)}>Stay</button>
              <button className="modal-btn confirm" onClick={exitApp}>Exit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
