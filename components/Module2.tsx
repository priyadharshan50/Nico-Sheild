import React, { useState, useEffect } from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import ShieldIcon from './icons/ShieldIcon';
import { TRANSLATIONS } from '../constants';
import { Demographics, AssessmentResult, RiskCategory, LanguageCode } from '../types';

type ViewState = 'home' | 'instructions' | 'demographics' | 'questionnaire' | 'results';

const Module2: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [view, setView] = useState<ViewState>('home');
  const [language, setLanguage] = useState<LanguageCode>('en');
  const [demographics, setDemographics] = useState<Demographics>({ age: '', gender: '', fillingFor: '' });
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [agreeToInstructions, setAgreeToInstructions] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');

  // Get content based on current language
  const content = TRANSLATIONS[language];
  const ui = content.ui;
  const sections = content.sections;
  const options = content.options;

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, currentSectionIndex]);

  // --- Logic Helpers ---

  const handleDemographicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDemographics({ ...demographics, [e.target.id]: e.target.value });
  };

  const handleOptionSelect = (sectionIndex: number, questionIndex: number, value: number) => {
    setAnswers(prev => ({ ...prev, [`${sectionIndex}_${questionIndex}`]: value }));
  };

  const validateCurrentSection = () => {
    const section = sections[currentSectionIndex];
    for (let i = 0; i < section.questions.length; i++) {
      if (answers[`${currentSectionIndex}_${i}`] === undefined) return false;
    }
    return true;
  };

  const handleNextSection = () => {
    if (!validateCurrentSection()) {
      alert(ui.alertAnswers);
      return;
    }

    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(prev => prev - 1);
    }
  };

  const saveDataToBackend = (data: any) => {
    setSaveStatus('saving');
    if (window.google && window.google.script) {
      window.google.script.run
        .withSuccessHandler(() => {
          setSaveStatus('success');
        })
        .withFailureHandler((error: any) => {
          console.error("Error saving data:", error);
          setSaveStatus('error');
        })
        .saveToGoogleSheet(data);
    } else {
      // Dev Mode Fallback
      console.warn("Backend not connected (Development Mode). Data that would be saved:", data);
      setTimeout(() => setSaveStatus('success'), 1000);
    }
  };

  const calculateResults = () => {
    let totalScore = 0;
    let readinessScore = 0;
    const sectionScores = [];

    sections.forEach((section, sIdx) => {
      let sectionScore = 0;
      section.questions.forEach((_, qIdx) => {
        sectionScore += answers[`${sIdx}_${qIdx}`] || 0;
      });

      if (section.section === 'F') {
        readinessScore = sectionScore;
      } else {
        totalScore += sectionScore;
      }

      sectionScores.push({
        name: section.sectionName,
        score: sectionScore,
        maxScore: section.questions.length * 3
      });
    });

    let riskLevel: RiskCategory = 'low';
    if (totalScore <= 12) riskLevel = 'low';
    else if (totalScore <= 28) riskLevel = 'moderate';
    else riskLevel = 'high';

    let readinessLevel: RiskCategory = 'low';
    if (readinessScore <= 3) readinessLevel = 'high'; // High Risk (Low Readiness)
    else if (readinessScore <= 6) readinessLevel = 'moderate';
    else readinessLevel = 'low'; // Low Risk (High Readiness)


    const resultData = {
      totalScore,
      readinessScore,
      sectionScores,
      riskLevel,
      readinessLevel 
    };

    setResult(resultData);
    setView('results');

    saveDataToBackend({
      language,
      demographics,
      sectionScores: sectionScores.map(s => s.score),
      totalScore,
      readinessScore,
      riskLevel,
      readinessLevel,
      answers
    });
  };

  // --- Render Helpers ---

  const renderHome = () => (
    <div className="bg-brand-page rounded-3xl p-10 max-w-4xl mx-auto shadow-2xl animate-fade-in text-center border border-white/20">
      <div className="w-24 h-24 bg-white border border-brand-text rounded-full flex items-center justify-center mb-8 shadow-lg mx-auto p-4">
        <ShieldIcon className="w-full h-full" />
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text mb-6">{ui.title}</h2>
      <p className="text-lg text-brand-brown-light font-bold mb-10">
        {ui.subtitle}
      </p>
      
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {[
          { code: 'en', label: 'English' },
          { code: 'hi', label: 'हिंदी' },
          { code: 'kn', label: 'ಕನ್ನಡ' },
          { code: 'ta', label: 'தமிழ்' },
          { code: 'te', label: 'తెలుగు' },
          { code: 'ml', label: 'മലയാളം' }
        ].map(lang => (
           <button 
             key={lang.code} 
             onClick={() => setLanguage(lang.code as LanguageCode)}
             className={`px-5 py-3 rounded-xl text-base font-bold transition-all duration-200 shadow-md 
               ${language === lang.code 
                 ? 'bg-btn-primary text-white scale-105' 
                 : 'bg-btn-orange text-white opacity-80 hover:opacity-100'}`}
           >
             {lang.label}
           </button>
        ))}
      </div>

      <button 
        onClick={() => setView('instructions')}
        className="bg-btn-primary text-white font-bold py-4 px-12 text-xl rounded-full hover:bg-btn-primary-hover transition-all duration-300 transform hover:scale-105 shadow-xl animate-pulse-slow"
      >
        {ui.getStarted}
      </button>
    </div>
  );

  const renderInstructions = () => (
    <div className="animate-fade-up max-w-4xl mx-auto">
      <div className="bg-brand-page p-8 md:p-12 rounded-3xl shadow-xl border border-white/20">
        <h3 className="text-2xl font-bold text-brand-text mb-6 text-center">
           {ui.welcome}
        </h3>
        
        <div className="bg-brand-gold-light border-l-4 border-brand-text p-6 rounded-r-xl mb-8">
            <p className="text-brand-text font-medium leading-relaxed">{ui.description}</p>
            <h4 className="font-bold text-brand-brown-light mt-4 mb-2">{ui.whatYouGet}</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-brand-text/80 pl-4">
                {ui.whatYouGetList.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        </div>
        
        <div className="bg-brand-gold-light p-6 rounded-xl mb-8 shadow-sm">
             <h4 className="font-bold text-brand-text mb-3">{ui.scoring}</h4>
             <ul className="space-y-2 text-sm text-brand-text/90">
                {options.map(opt => (
                    <li key={opt.value}><span className="font-bold bg-white px-2 py-0.5 rounded text-brand-text">{opt.value}</span> = {opt.label}</li>
                ))}
            </ul>
        </div>

        <div className="bg-orange-50 border-l-4 border-risk-high p-4 mb-8 rounded-r-lg">
             <p className="text-brand-text text-sm font-semibold">{ui.disclaimer}</p>
        </div>

        <label className="flex items-center space-x-3 cursor-pointer p-4 bg-brand-gold/20 rounded-xl hover:bg-brand-gold/30 transition-colors mb-8">
            <input 
                type="checkbox" 
                checked={agreeToInstructions} 
                onChange={(e) => setAgreeToInstructions(e.target.checked)}
                className="w-5 h-5 text-brand-text rounded focus:ring-brand-text" 
            />
            <span className="text-brand-text font-bold">{ui.agreeLabel}</span>
        </label>

        <div className="flex justify-between">
            <button onClick={() => setView('home')} className="bg-btn-orange text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:opacity-90 transition-all">{ui.back}</button>
            <button 
                onClick={() => agreeToInstructions ? setView('demographics') : alert(ui.alertInstruction)} 
                className={`font-bold py-3 px-10 rounded-xl shadow-lg transition-all text-white ${agreeToInstructions ? 'bg-btn-primary hover:bg-btn-primary-hover' : 'bg-brand-gold cursor-not-allowed'}`}
            >
                {ui.next}
            </button>
        </div>
      </div>
    </div>
  );

  const renderDemographics = () => (
    <div className="animate-fade-up max-w-3xl mx-auto">
        <div className="bg-brand-page p-8 md:p-12 rounded-3xl shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-brand-text mb-8 text-center">{ui.aboutYou}</h3>
            
            <div className="space-y-6">
                <div>
                    <label className="block text-brand-text font-bold mb-2" htmlFor="age">{ui.age}</label>
                    <select id="age" value={demographics.age} onChange={handleDemographicChange} className="w-full p-4 bg-white border-2 border-brand-gold rounded-xl focus:outline-none focus:border-brand-text text-brand-text">
                        <option value="">{ui.select}</option>
                        <option value="<18">&lt; 18</option>
                        <option value="18-25">18 - 25</option>
                        <option value="26-35">26 - 35</option>
                        <option value="36-45">36 - 45</option>
                        <option value="46-55">46 - 55</option>
                        <option value=">55">&gt; 55</option>
                    </select>
                </div>
                 <div>
                    <label className="block text-brand-text font-bold mb-2" htmlFor="gender">{ui.gender}</label>
                    <select id="gender" value={demographics.gender} onChange={handleDemographicChange} className="w-full p-4 bg-white border-2 border-brand-gold rounded-xl focus:outline-none focus:border-brand-text text-brand-text">
                        <option value="">{ui.select}</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                 <div>
                    <label className="block text-brand-text font-bold mb-2" htmlFor="fillingFor">{ui.fillingFor}</label>
                    <select id="fillingFor" value={demographics.fillingFor} onChange={handleDemographicChange} className="w-full p-4 bg-white border-2 border-brand-gold rounded-xl focus:outline-none focus:border-brand-text text-brand-text">
                        <option value="">{ui.select}</option>
                        <option value="self">Self</option>
                        <option value="family">Family</option>
                        <option value="friend">Friend</option>
                        <option value="patient">Patient</option>
                    </select>
                </div>
            </div>

            <p className="mt-8 text-sm text-center text-brand-brown-light italic">{ui.note}</p>

            <div className="flex justify-between mt-10">
                <button onClick={() => setView('instructions')} className="bg-btn-orange text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:opacity-90 transition-all">{ui.back}</button>
                <button 
                    onClick={() => {
                        if(demographics.age && demographics.gender && demographics.fillingFor) setView('questionnaire');
                        else alert(ui.alertFields);
                    }}
                    className="bg-btn-primary text-white font-bold py-3 px-10 rounded-xl hover:bg-btn-primary-hover shadow-lg transition-all"
                >
                    {ui.startQuiz}
                </button>
            </div>
        </div>
    </div>
  );

  const renderQuestionnaire = () => {
    const section = sections[currentSectionIndex];
    const progress = ((currentSectionIndex + 1) / sections.length) * 100;

    return (
        <div className="animate-fade-in max-w-4xl mx-auto">
            <div className="bg-brand-page rounded-3xl shadow-xl overflow-hidden border border-white/20">
                {/* Header */}
                <div className="bg-btn-primary p-6 md:p-8 text-white text-center">
                     <h3 className="text-2xl font-bold mb-2">Section {section.section}: {section.sectionName}</h3>
                     <p className="opacity-90 italic text-sm">{section.intro}</p>
                </div>

                <div className="p-6 md:p-10">
                     {/* Progress */}
                    <div className="mb-8 bg-brand-gold-light rounded-full h-8 relative shadow-inner overflow-hidden flex items-center justify-center">
                        <div className="absolute left-0 top-0 h-full bg-btn-orange transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
                        <span className="relative z-10 text-xs font-bold text-brand-text uppercase">Section {currentSectionIndex + 1} of {sections.length}</span>
                    </div>

                    <div className="space-y-8">
                        {section.questions.map((q, qIdx) => (
                            <div key={qIdx} className="bg-brand-gold-light p-6 rounded-xl border-l-4 border-brand-text shadow-sm hover:shadow-md transition-shadow">
                                <p className="font-bold text-brand-text mb-4 text-lg">Q{qIdx + 1}. {q}</p>
                                <div className="space-y-2">
                                    {options.map((opt) => {
                                        const answerKey = `${currentSectionIndex}_${qIdx}`;
                                        const isSelected = answers[answerKey] === opt.value;
                                        return (
                                            <label 
                                                key={opt.value}
                                                className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 border-2
                                                    ${isSelected 
                                                        ? 'bg-brand-gold border-brand-text font-bold' 
                                                        : 'bg-white border-transparent hover:bg-brand-gold-light hover:border-brand-gold'
                                                    }`}
                                            >
                                                <input 
                                                    type="radio" 
                                                    name={`q_${currentSectionIndex}_${qIdx}`}
                                                    checked={isSelected}
                                                    onChange={() => handleOptionSelect(currentSectionIndex, qIdx, opt.value)}
                                                    className="w-5 h-5 text-brand-text focus:ring-brand-text mr-3 accent-brand-text"
                                                />
                                                <span className="text-brand-text">{opt.label}</span>
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between mt-10">
                        <button 
                            onClick={handlePrevSection} 
                            className={`bg-btn-orange text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:opacity-90 transition-all ${currentSectionIndex === 0 ? 'invisible' : ''}`}
                        >
                            {ui.prev}
                        </button>
                        <button 
                            onClick={handleNextSection} 
                            className="bg-btn-primary text-white font-bold py-3 px-10 rounded-xl hover:bg-btn-primary-hover shadow-lg transition-all transform hover:scale-105"
                        >
                            {currentSectionIndex === sections.length - 1 ? ui.calculate : ui.nextSection}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
  };

  const renderResults = () => {
    if (!result) return null;

    const riskColors = {
        low: 'text-risk-low',
        moderate: 'text-risk-moderate',
        high: 'text-risk-high',
    };
    const riskBg = {
        low: 'bg-risk-low',
        moderate: 'bg-risk-moderate',
        high: 'bg-risk-high',
    };

    const getInterpretation = (level: string, type: 'core' | 'readiness') => {
        if (type === 'core') {
            if (level === 'low') return "Minimal triggers or impact. Keep making healthy choices!";
            if (level === 'moderate') return "Occasional triggers or moderate impact. Awareness is key.";
            return "Strong habits and potential health impact. Consider support.";
        } else {
             if (level === 'high') return "May need external support to start the journey."; 
             if (level === 'moderate') return "Willing to try with guidance."; 
             return "Highly motivated to quit or reduce!"; 
        }
    };
    
    const resultLabel = result.riskLevel.charAt(0).toUpperCase() + result.riskLevel.slice(1);
    const readinessLabel = result.readinessLevel === 'low' ? 'High' : result.readinessLevel === 'moderate' ? 'Moderate' : 'Low';

    return (
        <div className="animate-fade-in max-w-4xl mx-auto">
             <div className="bg-brand-page rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 text-center">
                 <div className="inline-block p-4 rounded-full bg-white border border-brand-text mb-6">
                    <ShieldIcon className="w-16 h-16" />
                </div>
                <h2 className="text-3xl font-extrabold text-brand-text mb-2">{ui.resultsTitle}</h2>
                <div className="mb-8">
                   {saveStatus === 'saving' && <span className="text-brand-brown-light animate-pulse">{ui.saving}</span>}
                   {saveStatus === 'success' && <span className="text-risk-low font-bold">{ui.savedSuccess}</span>}
                   {saveStatus === 'error' && <span className="text-risk-high font-bold">{ui.savedError}</span>}
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Core Score Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-brand-gold">
                        <h3 className="text-xl font-bold text-brand-text mb-4">{ui.coreRisk}</h3>
                        <div className={`text-5xl font-extrabold mb-4 ${riskColors[result.riskLevel]}`}>{resultLabel}</div>
                        <p className="text-brand-text/80 text-sm italic mb-6">{getInterpretation(result.riskLevel, 'core')}</p>
                         <div className="w-full bg-brand-gold-light rounded-full h-3 overflow-hidden">
                            <div className={`h-3 rounded-full ${riskBg[result.riskLevel]}`} style={{ width: result.riskLevel === 'low' ? '33%' : result.riskLevel === 'moderate' ? '66%' : '100%' }}></div>
                        </div>
                    </div>

                    {/* Readiness Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-brand-gold">
                        <h3 className="text-xl font-bold text-brand-text mb-4">{ui.readiness}</h3>
                        <div className={`text-5xl font-extrabold mb-4 ${result.readinessLevel === 'low' ? 'text-risk-low' : result.readinessLevel === 'moderate' ? 'text-risk-moderate' : 'text-risk-high'}`}>
                            {readinessLabel}
                        </div>
                        <p className="text-brand-text/80 text-sm italic mb-6">{getInterpretation(result.readinessLevel, 'readiness')}</p>
                        <div className="w-full bg-brand-gold-light rounded-full h-3 overflow-hidden">
                             <div className={`h-3 rounded-full ${result.readinessLevel === 'low' ? 'bg-risk-low' : result.readinessLevel === 'moderate' ? 'bg-risk-moderate' : 'bg-risk-high'}`} style={{ width: result.readinessLevel === 'low' ? '100%' : result.readinessLevel === 'moderate' ? '66%' : '33%' }}></div>
                        </div>
                    </div>
                </div>

                {/* Chart Breakdown */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-brand-gold mb-12 text-left">
                    <h3 className="text-2xl font-bold text-brand-text mb-6">{ui.breakdown}</h3>
                    <div className="space-y-5">
                        {result.sectionScores.map((section, idx) => {
                            const percent = Math.round((section.score / section.maxScore) * 100);
                            return (
                                <div key={idx}>
                                    <div className="flex justify-between mb-1 text-sm font-bold text-brand-text">
                                        <span>{section.name}</span>
                                        <span>{percent}%</span>
                                    </div>
                                    <div className="w-full bg-brand-gold-light rounded-full h-4 overflow-hidden shadow-inner">
                                        <div 
                                            className="h-4 rounded-full bg-btn-primary transition-all duration-1000 ease-out shadow-sm" 
                                            style={{ width: `${percent}%` }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                     <button onClick={() => window.print()} className="bg-btn-orange text-white font-bold py-4 px-8 rounded-xl hover:opacity-90 shadow-lg transition-colors flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                        {ui.saveReport}
                     </button>
                     <button onClick={onComplete} className="bg-btn-primary text-white font-bold py-4 px-12 rounded-xl hover:bg-btn-primary-hover shadow-lg transition-colors transform hover:scale-105">
                        {ui.continue}
                     </button>
                 </div>
            </div>
        </div>
    );
  };

  return (
    <div className="w-full">
      {view === 'home' && renderHome()}
      {view === 'instructions' && renderInstructions()}
      {view === 'demographics' && renderDemographics()}
      {view === 'questionnaire' && renderQuestionnaire()}
      {view === 'results' && renderResults()}
    </div>
  );
};

export default Module2;