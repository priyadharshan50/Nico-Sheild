import React, { useState, useEffect } from 'react';
import { GAME_BOARD_TILES } from '../constants';
import Modal from './Modal';

// Enhanced Icon Components
const TileIcon: React.FC<{ name: string; className?: string }> = ({ name, className = "w-6 h-6" }) => {
  switch (name) {
    case 'start':
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1 14.5v-9l6 4.5-6 4.5Z"/></svg>;
    case 'cigarette':
       return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M2.515 10.674a1.875 1.875 0 0 0 0 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374ZM12.5 8.25a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm-5 0a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm10 0a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" /></svg>;
    case 'money':
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" /><path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" /><path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" /></svg>;
    case 'heart':
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" /></svg>;
    case 'social':
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-4.42 6.753 6.753 0 0 0-6.581-6.606 4.878 4.878 0 0 1 1.175 4.812 4.922 4.922 0 0 0 .98 4.938l.002.002.418.352ZM13.5 14.25a6.035 6.035 0 0 1 1.143 3.655l.007.165a.75.75 0 0 1-1.15.65l-.013-.009a9.75 9.75 0 0 0-4.48-1.086 9.75 9.75 0 0 0-4.48 1.086.75.75 0 0 1-.82-.056A4.5 4.5 0 0 1 9.375 14.25h4.125Z" /></svg>;
    case 'target':
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214C19.282 7.955 15.631 4.209 10.975 3.32a8.266 8.266 0 0 0-2.428 1.185ZM12 6.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Zm-2.502 1.346a.75.75 0 0 1 .465 1.025 3.75 3.75 0 1 0 4.074 0 .75.75 0 1 1 .632-1.364 5.25 5.25 0 1 1-5.798 0 .75.75 0 0 1 .627.339Z" clipRule="evenodd" /></svg>;
    case 'warning':
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M9.401 3.003c1.155-2 3.999-2 5.154 0l9.349 16.19c1.155 2-.292 4.498-2.577 4.498H2.63c-2.285 0-3.732-2.498-2.577-4.498l9.349-16.19ZM12 8a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V8.75A.75.75 0 0 1 12 8Zm0 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" clipRule="evenodd" /></svg>;
    case 'brain':
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 2.25a.75.75 0 0 1 .75.75v.756a3.75 3.75 0 0 1 3.228 5.76 2.25 2.25 0 0 1 .272 4.286A2.25 2.25 0 0 1 16.5 18a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75 2.25 2.25 0 0 1 .25-4.214 2.25 2.25 0 0 1 .272-4.286A3.75 3.75 0 0 1 11.25 3.756V3a.75.75 0 0 1 .75-.75Z" /></svg>;
    case 'skull':
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M12 2.25c-2.42 0-4.817.75-6.75 2.268a9.423 9.423 0 0 0-1.59 1.62c-.394.502-.857 1.252-1.18 2.272A5.856 5.856 0 0 0 2.25 10.2c0 2.278 1.488 4.204 3.518 5.016.326.13.522.46.467.808l-.13 2.147a.75.75 0 0 0 .748.795h10.294a.75.75 0 0 0 .748-.795l-.13-2.147a.75.75 0 0 1 .467-.808 5.393 5.393 0 0 0 3.518-5.016c0-.58-.094-1.135-.23-1.79-.323-1.02-.786-1.77-1.18-2.272a9.426 9.426 0 0 0-1.59-1.62C16.817 3 14.42 2.25 12 2.25ZM9 9.375a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Zm4.125-.375a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0Zm0 6.75H10.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5Z" clipRule="evenodd" /></svg>;
    case 'lungs':
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M11.953 2.5a.75.75 0 0 1 .796.696l.164 1.831c.313 3.52 3.178 6.273 6.64 6.755.787.11 1.447.784 1.447 1.636v2.105a3.375 3.375 0 0 1-3.328 3.374h-1.685a.75.75 0 0 1-.364-.094l-2.025-1.157a.75.75 0 0 0-.756.002l-1.996 1.156a.75.75 0 0 1-.367.096h-1.72a3.375 3.375 0 0 1-3.33-3.374V11.41c0-.853.66-1.527 1.45-1.636 3.461-.482 6.327-3.235 6.639-6.755l.164-1.831a.75.75 0 0 1 .797-.696Z" clipRule="evenodd" /></svg>;
    case 'handshake':
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-1.004-1.124A2.25 2.25 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" /><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282a.427.427 0 0 0 .305-.41c.015-.25-.199-.475-.485-.494l-.521-.032a1.75 1.75 0 0 1-1.611-1.46l-.382-2.204a1.298 1.298 0 0 1 1.278-1.52l.279.006c.365.008.66.302.668.668l.006.262c.005.215.18.39.395.396l.498.01c.214.005.388-.168.392-.382l.005-.282a.86.86 0 0 1 .858-.844l.288.006c.214.005.388-.168.392-.382l.004-.263a.86.86 0 0 1 .858-.844l.285.006c.214.004.388-.168.392-.382l.003-.185a.86.86 0 0 1 .858-.844l.325.006c.712.014 1.28.602 1.262 1.314-.027 1.077-.101 2.126-.221 3.14-.14 1.18-.344 2.336-.607 3.461-.257 1.096-.957 2.052-1.942 2.656a8.252 8.252 0 0 0 2.274-1.283c.966-.856 1.705-1.928 2.148-3.125a8.25 8.25 0 0 0-16.712 2.768Z" clipRule="evenodd" /></svg>;
    case 'no_vape':
        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" /></svg>;
    case 'thumb':
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904M14.233 18.75h4.871c.886 0 1.709-.45 2.164-1.213A13.46 13.46 0 0 0 22.5 13.84c0-.6.023-1.192.068-1.776.13-1.693-1.206-3.064-2.883-3.064H16.57c-.179 0-.317-.183-.243-.346a7.485 7.485 0 0 0 .807-3.414 3.75 3.75 0 0 0-3.75-3.75H12.75a2.25 2.25 0 0 0-2.25 2.25v2.408c0 .248-.057.49-.165.713a7.544 7.544 0 0 1-2.386 2.946c-.452.327-1.004.482-1.57.435l-1.373-.112a2.25 2.25 0 0 0-2.43 2.241v2.805a2.25 2.25 0 0 0 2.25 2.25h1.724c.484 0 .934-.203 1.258-.557a5.968 5.968 0 0 1 3.518-1.895l3.114 1.04c.83.277 1.722.378 2.607.294Z" /></svg>;
    case 'run':
       return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>;
    case 'tree':
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" /></svg>;
    case 'sparkle':
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" /></svg>;
    case 'trophy':
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clipRule="evenodd" /></svg>;
    default:
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>;
  }
};

const DieFace: React.FC<{ value: number }> = ({ value }) => {
    const dotPatterns: { [key: number]: string } = {
        1: 'justify-center items-center',
        2: 'justify-between',
        3: 'justify-between',
        4: 'justify-between',
        5: 'justify-between',
        6: 'justify-between',
    };
    const dot = <div className="w-3 h-3 bg-brand-text rounded-full shadow-sm"></div>;
    return (
        <div className={`w-full h-full p-2.5 flex flex-col ${dotPatterns[value]}`}>
            {value === 1 && dot}
            {value === 2 && <>{dot}<div className="self-end">{dot}</div></>}
            {value === 3 && <>{dot}<div className="self-center">{dot}</div><div className="self-end">{dot}</div></>}
            {value === 4 && <div className="flex justify-between"><div className="flex flex-col justify-between">{dot}{dot}</div><div className="flex flex-col justify-between">{dot}{dot}</div></div>}
            {value === 5 && <div className="flex justify-between"><div className="flex flex-col justify-between">{dot}{dot}</div><div className="self-center">{dot}</div><div className="flex flex-col justify-between">{dot}{dot}</div></div>}
            {value === 6 && <div className="flex justify-between"><div className="flex flex-col justify-between">{dot}{dot}{dot}</div><div className="flex flex-col justify-between">{dot}{dot}{dot}</div></div>}
        </div>
    );
};

const Dice: React.FC<{ onRoll: (value: number) => void; rolling: boolean; disabled: boolean }> = ({ onRoll, rolling, disabled }) => {
    const [diceValue, setDiceValue] = useState(1);
    
    const rollDice = () => {
        if (rolling || disabled) return;
        let rollCount = 0;
        const interval = setInterval(() => {
            setDiceValue(Math.floor(Math.random() * 6) + 1);
            rollCount++;
            if (rollCount > 10) { 
                clearInterval(interval);
                const finalValue = Math.floor(Math.random() * 6) + 1;
                setDiceValue(finalValue);
                onRoll(finalValue);
            }
        }, 100);
    };

    return (
        <div className="flex flex-col items-center">
            <div
                className={`w-24 h-24 rounded-2xl shadow-xl cursor-pointer transition-all duration-300 flex items-center justify-center 
                  ${rolling ? 'animate-dice-roll' : 'hover:scale-105'} 
                  ${disabled ? 'bg-gray-200 opacity-50 cursor-not-allowed' : 'bg-brand-gold-light border-2 border-brand-brown-light hover:border-brand-text'}`}
                onClick={rollDice}
                aria-label={`Dice showing ${diceValue}`}
            >
                <DieFace value={diceValue} />
            </div>
            <button onClick={rollDice} disabled={rolling || disabled} className="mt-6 bg-btn-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-btn-primary-hover transition-all duration-300 disabled:opacity-50 disabled:shadow-none hover:shadow-xl transform hover:-translate-y-1 active:scale-95">
                {rolling ? 'Rolling...' : 'Roll Dice'}
            </button>
        </div>
    );
};


const Module1: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [gameStarted, setGameStarted] = useState(false);
    const [playerPosition, setPlayerPosition] = useState(0);
    const [rolling, setRolling] = useState(false);
    const [lastRoll, setLastRoll] = useState<number | null>(null);
    const [showFinalChallenge, setShowFinalChallenge] = useState(false);
    const [currentFact, setCurrentFact] = useState(GAME_BOARD_TILES[0].fact);

    const boardSize = GAME_BOARD_TILES.length;

    useEffect(() => {
        setCurrentFact(GAME_BOARD_TILES[playerPosition].fact);
    }, [playerPosition]);

    const handleRoll = (diceValue: number) => {
        setRolling(true);
        setLastRoll(diceValue);
        setTimeout(() => {
            setPlayerPosition(prevPosition => {
                const newPosition = prevPosition + diceValue;
                if (newPosition >= boardSize - 1) {
                    setTimeout(() => setShowFinalChallenge(true), 1200);
                    return boardSize - 1;
                }
                return newPosition;
            });
            setRolling(false);
        }, 1200);
    };
    
    if (!gameStarted) {
        return (
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center p-8 md:p-12 bg-brand-page rounded-3xl shadow-2xl animate-fade-up border border-white/20">
                <div className="w-20 h-20 bg-brand-gold-light rounded-full flex items-center justify-center mb-6 text-brand-text">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" /></svg>
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold text-brand-text mb-3 tracking-tight">FACTS</h2>
                <p className="text-lg md:text-xl font-bold text-brand-brown-light mb-6">(FUN AWARENESS CHALLENGE FOR TOBACCO SAFETY)</p>
                
                <p className="text-xl md:text-2xl font-serif italic text-brand-text/80 mb-10 max-w-2xl leading-relaxed">
                    “One Game. Big Change. Unlock knowledge that protects your future.”
                </p>

                <div className="bg-brand-gold-light p-8 rounded-2xl mb-10 w-full text-left shadow-sm border border-brand-gold">
                    <h3 className="text-xl font-bold text-brand-text mb-6 flex items-center">
                         <span className="bg-brand-text text-white p-1 rounded mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clipRule="evenodd" /><path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" /></svg></span>
                         HOW TO PLAY
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-brand-text font-medium">
                        <div className="flex items-center p-3 bg-white/60 rounded-lg shadow-sm"><span className="w-8 h-8 rounded-full bg-brand-text text-white flex items-center justify-center mr-3 font-bold">1</span> Roll the dice</div>
                        <div className="flex items-center p-3 bg-white/60 rounded-lg shadow-sm"><span className="w-8 h-8 rounded-full bg-brand-text text-white flex items-center justify-center mr-3 font-bold">2</span> Move your token</div>
                        <div className="flex items-center p-3 bg-white/60 rounded-lg shadow-sm"><span className="w-8 h-8 rounded-full bg-brand-text text-white flex items-center justify-center mr-3 font-bold">3</span> Read the fact</div>
                        <div className="flex items-center p-3 bg-white/60 rounded-lg shadow-sm"><span className="w-8 h-8 rounded-full bg-brand-text text-white flex items-center justify-center mr-3 font-bold">4</span> Earn points</div>
                        <div className="flex items-center p-3 bg-white/60 rounded-lg shadow-sm md:col-span-2"><span className="w-8 h-8 rounded-full bg-brand-text text-white flex items-center justify-center mr-3 font-bold">5</span> Reach the end to unlock the final challenge!</div>
                    </div>
                </div>

                <button onClick={() => setGameStarted(true)} className="bg-btn-primary text-white font-bold py-4 px-16 text-xl rounded-full hover:bg-btn-primary-hover transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                    START GAME
                </button>
            </div>
        );
    }

    const progressPercentage = (playerPosition / (boardSize - 1)) * 100;
    const isGameFinished = playerPosition >= boardSize - 1;

    return (
        <div className="w-full animate-fade-in max-w-6xl mx-auto">
            <h2 className="text-center text-3xl font-extrabold mb-10 text-white drop-shadow-lg tracking-tight">FACTS Board Game</h2>
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Game Board */}
                <div className="lg:col-span-2 bg-brand-page p-6 md:p-8 rounded-3xl shadow-xl border border-white/20">
                     <div className="grid grid-cols-5 gap-3 md:gap-5">
                        {GAME_BOARD_TILES.map((tile, index) => (
                            <div 
                                key={index} 
                                className={`aspect-square rounded-2xl flex items-center justify-center transition-all duration-500 relative
                                ${index === playerPosition 
                                    ? 'bg-brand-text text-white scale-110 shadow-2xl z-10 ring-4 ring-brand-brown-light' 
                                    : tile.isSpecial 
                                        ? 'bg-brand-gold-light text-brand-orange border-2 border-brand-orange/20' 
                                        : 'bg-white text-brand-text hover:bg-brand-gold-light border border-brand-gold'}`}
                            >
                                <TileIcon name={tile.icon} className={index === playerPosition ? "w-8 h-8 md:w-10 md:h-10 animate-bounce" : "w-6 h-6 md:w-8 md:h-8"} />
                                {index === playerPosition && (
                                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-brand-orange rounded-full shadow-md animate-pulse"></div>
                                )}
                            </div>
                        ))}
                    </div>
                     <div className="mt-8 px-2">
                        <div className="flex justify-between text-xs font-bold text-brand-text uppercase tracking-widest mb-2">
                            <span>Start</span>
                            <span>Goal</span>
                        </div>
                        <div className="w-full bg-brand-gold-light rounded-full h-4 overflow-hidden shadow-inner">
                            <div className="bg-btn-primary h-4 rounded-full transition-all duration-1000 ease-out shadow-sm" style={{ width: `${progressPercentage}%` }}></div>
                        </div>
                    </div>
                </div>

                {/* Controls & Info */}
                <div className="flex flex-col gap-6">
                    <div className="bg-brand-page p-8 rounded-3xl shadow-xl border border-white/20 flex-grow flex flex-col justify-between">
                         <div className="mb-6">
                            <h3 className="text-lg font-bold mb-4 text-brand-text flex items-center uppercase tracking-wider">
                                Current Tile
                            </h3>
                            <div className="bg-brand-gold-light p-6 rounded-2xl min-h-[160px] flex items-center justify-center text-center border-l-4 border-brand-text">
                                <p className="text-brand-text font-medium text-lg leading-relaxed">{currentFact}</p>
                            </div>
                        </div>
                        
                         <div className="text-center mb-4 h-6">
                            {lastRoll && !rolling && <p className="font-bold text-brand-orange animate-scale-in">You rolled a {lastRoll}!</p>}
                        </div>
                        <Dice onRoll={handleRoll} rolling={rolling} disabled={isGameFinished}/>
                    </div>
                </div>
            </div>


            <Modal isOpen={showFinalChallenge} onClose={() => setShowFinalChallenge(false)}>
                <div className="text-center p-6">
                    <div className="w-24 h-24 bg-brand-gold-light rounded-full flex items-center justify-center mx-auto mb-6 text-brand-orange animate-pulse-slow">
                        <TileIcon name="trophy" className="w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-bold text-brand-text mb-4">Module 1 completed!</h3>
                    <p className="text-brand-text mb-8 text-lg leading-relaxed">Congratulations! You've completed the journey and learned valuable truths about tobacco. Knowledge is your power to make healthy choices.</p>
                    <button onClick={onComplete} className="bg-btn-primary text-white font-bold py-4 px-12 text-lg rounded-full hover:bg-btn-primary-hover transition-all duration-300 transform hover:scale-105 shadow-xl">
                        Proceed to Module 2
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default Module1;