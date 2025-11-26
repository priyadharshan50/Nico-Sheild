import React, { useState, useCallback, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Module1 from './components/Module1';
import Module2 from './components/Module2';
import Module3 from './components/Module3';
import SplashScreen from './components/SplashScreen';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentModule, setCurrentModule] = useState<number>(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);


  const proceedToNextModule = useCallback(() => {
    setCurrentModule(prev => prev < 3 ? prev + 1 : 3);
    window.scrollTo(0, 0);
  }, []);

  const resetJourney = useCallback(() => {
    setCurrentModule(1);
    window.scrollTo(0, 0);
  }, []);

  const renderContent = () => {
    switch (currentModule) {
      case 1:
        return <Module1 onComplete={proceedToNextModule} />;
      case 2:
        return <Module2 onComplete={proceedToNextModule} />;
      case 3:
        return <Module3 onRestart={resetJourney} />;
      default:
        return <Module1 onComplete={proceedToNextModule} />;
    }
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-gradient selection:bg-brand-brown-dark selection:text-white">
      <Navbar onLogoClick={resetJourney} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;