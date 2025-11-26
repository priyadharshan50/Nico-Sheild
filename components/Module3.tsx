
import React, { useState } from 'react';
import { NARRATIVE_STORIES } from '../constants';
import { RiskCategory, Story } from '../types';
import Modal from './Modal';
import ArrowLeftIcon from './icons/ArrowLeftIcon';

const CategoryButton: React.FC<{
    label: string;
    colorClass: string;
    icon: React.ReactNode;
    onClick: () => void;
}> = ({ label, colorClass, icon, onClick }) => (
    <button onClick={onClick} className={`w-full text-left p-8 rounded-3xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden ${colorClass}`}>
        <div className="absolute right-[-20px] top-[-20px] opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-125 duration-500">
           {icon}
        </div>
        <div className="relative z-10">
             <h3 className="text-3xl font-extrabold text-white mb-2">{label} Risk</h3>
             <p className="text-white/80 font-medium flex items-center">
                Read Stories 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"><path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>
             </p>
        </div>
    </button>
);

const StoryButton: React.FC<{ story: Story; onClick: () => void; index: number }> = ({ story, onClick, index }) => (
    <button 
        onClick={onClick} 
        className="w-full text-left p-6 bg-brand-gold-light rounded-2xl shadow-sm hover:shadow-xl border border-brand-gold hover:border-brand-text transition-all duration-300 animate-fade-up group"
        style={{ animationDelay: `${index * 100}ms` }}
    >
        <div className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-3 group-hover:text-brand-brown-light transition-colors">{story.subheading}</div>
        <h4 className="font-bold text-lg text-brand-text leading-snug group-hover:text-brand-brown-dark transition-colors">{story.title}</h4>
    </button>
);


const Module3: React.FC<{ onRestart: () => void }> = ({ onRestart }) => {
    const [activeCategory, setActiveCategory] = useState<RiskCategory | null>(null);
    const [selectedStory, setSelectedStory] = useState<Story | null>(null);
    const [hasReadStory, setHasReadStory] = useState(false);

    const handleSelectCategory = (category: RiskCategory) => {
        setActiveCategory(category);
    };

    const handleBackToCategories = () => {
        setActiveCategory(null);
    };

    const handleSelectStory = (story: Story) => {
        setSelectedStory(story);
        setHasReadStory(true);
    };

    return (
        <div className="w-full animate-fade-in max-w-6xl mx-auto">
            <header className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4 tracking-tight">Narrative Counselling</h2>
                <p className="text-lg md:text-xl text-white font-medium max-w-2xl mx-auto opacity-90">Explore real stories of choice, challenge, and change to find your path.</p>
            </header>

            {!activeCategory ? (
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 px-2">
                    <CategoryButton 
                        label="Low" 
                        colorClass="bg-risk-low" 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-48 h-48"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1 14.5v-9l6 4.5-6 4.5Z"/></svg>}
                        onClick={() => handleSelectCategory('low')} 
                    />
                    <CategoryButton 
                        label="Moderate" 
                        colorClass="bg-risk-moderate" 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-48 h-48"><path fillRule="evenodd" d="M9.401 3.003c1.155-2 3.999-2 5.154 0l9.349 16.19c1.155 2-.292 4.498-2.577 4.498H2.63c-2.285 0-3.732-2.498-2.577-4.498l9.349-16.19ZM12 8a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V8.75A.75.75 0 0 1 12 8Zm0 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" clipRule="evenodd" /></svg>}
                        onClick={() => handleSelectCategory('moderate')} 
                    />
                    <CategoryButton 
                        label="High" 
                        colorClass="bg-risk-high" 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-48 h-48"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" /></svg>}
                        onClick={() => handleSelectCategory('high')} 
                    />
                </div>
            ) : (
                <div className="bg-brand-page p-6 md:p-10 rounded-3xl shadow-2xl animate-fade-in border border-white/20">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
                        <div className="flex items-center space-x-3 mb-4 md:mb-0">
                             <h3 className="text-3xl font-extrabold capitalize text-brand-text">{activeCategory} Risk Stories</h3>
                             <span className={`px-3 py-1 rounded-full text-xs font-bold text-white uppercase ${activeCategory === 'low' ? 'bg-risk-low' : activeCategory === 'moderate' ? 'bg-risk-moderate' : 'bg-risk-high'}`}>Selected</span>
                        </div>
                        <button onClick={handleBackToCategories} className="flex items-center space-x-2 text-brand-text font-bold hover:text-brand-brown-light transition-colors bg-white py-2 px-5 rounded-full shadow-sm hover:shadow-md border border-brand-gold">
                             <ArrowLeftIcon className="w-5 h-5" />
                             <span>Change Category</span>
                        </button>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {NARRATIVE_STORIES[activeCategory].map((story, index) => (
                            <StoryButton key={index} story={story} onClick={() => handleSelectStory(story)} index={index}/>
                        ))}
                    </div>
                </div>
            )}
             
            {hasReadStory && (
                <div className="mt-24 text-center animate-fade-in">
                     <div className="inline-block p-1 bg-gradient-to-r from-brand-brown-dark to-brand-orange rounded-full mb-8">
                        <div className="bg-white rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-brand-text"><path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm4.45 6.45a.75.75 0 0 0-1.06-1.06L6.75 14.44l-1.5-1.5a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l6.022-7.857Z" clipRule="evenodd" /></svg>
                        </div>
                     </div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-md mb-6">You have completed the NICO-SHIELD journey.</h3>
                     <button 
                        onClick={onRestart}
                        className="bg-white text-brand-text font-bold py-4 px-12 text-lg rounded-full hover:bg-brand-gold-light transition-all duration-300 transform shadow-lg"
                      >
                        Start Over
                      </button>
                </div>
            )}

            <Modal isOpen={!!selectedStory} onClose={() => setSelectedStory(null)}>
                {selectedStory && (
                    <div className="p-4 text-center">
                         <div className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-xs font-bold uppercase tracking-widest mb-4">{selectedStory.subheading}</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-brand-text mb-8">{selectedStory.title}</h3>
                        <div className="bg-brand-gold-light p-8 rounded-2xl border border-brand-gold mb-8 relative">
                             <span className="absolute top-4 left-4 text-4xl text-brand-gold font-serif">"</span>
                             <p className="text-brand-text leading-loose text-lg font-medium relative z-10">{selectedStory.content}</p>
                             <span className="absolute bottom-4 right-4 text-4xl text-brand-gold font-serif">"</span>
                        </div>
                        <div>
                             <button onClick={() => setSelectedStory(null)} className="bg-btn-primary text-white font-bold py-3 px-10 rounded-full hover:bg-btn-primary-hover transition-colors duration-300 shadow-md">
                                Close Story
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Module3;
