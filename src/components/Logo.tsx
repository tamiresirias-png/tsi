import React, { useState, useEffect } from 'react';

interface LogoProps {
  /** 'dark' for light backgrounds (default), 'light' for dark backgrounds */
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero' | 'showcase' | 'header';
  variant?: 'emblem' | 'horizontal';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  theme = 'dark',
  size = 'header',
  variant = 'horizontal',
  showSubtitle = true,
  className = '',
  onClick
}) => {
  const isLight = theme === 'light';
  const [logoSrc, setLogoSrc] = useState<string>('/logo-tsi.png');
  const [triedSvg, setTriedSvg] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check if custom logo is stored in localStorage
    const saved = localStorage.getItem('tsi_custom_logo');
    if (saved) {
      setLogoSrc(saved);
      setHasError(false);
    }

    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setLogoSrc(customEvent.detail);
        setHasError(false);
      } else {
        const currentSaved = localStorage.getItem('tsi_custom_logo');
        if (currentSaved) {
          setLogoSrc(currentSaved);
          setHasError(false);
        }
      }
    };

    window.addEventListener('tsi_logo_updated', handleUpdate);
    return () => window.removeEventListener('tsi_logo_updated', handleUpdate);
  }, []);

  const imgHeightClasses = {
    sm: 'h-10 max-w-[140px]',
    header: 'h-13 sm:h-14 max-w-[180px]',
    md: 'h-16 max-w-[200px]',
    lg: 'h-20 max-w-[260px]',
    xl: 'h-24 max-w-[320px]',
    hero: 'h-28 sm:h-36 max-w-[420px]',
    showcase: 'h-36 sm:h-48 lg:h-56 max-w-[480px]',
  };

  // If the user requested emblem or standard logo, we render the exact image
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center select-none cursor-pointer group transition-transform duration-150 hover:scale-[1.01] ${className}`}
      aria-label="TSI Assessoria & Engenharia"
    >
      {!hasError ? (
        <div
          className={`${
            isLight
              ? 'bg-white p-1 rounded-lg shadow-xs'
              : ''
          }`}
        >
          <img
            src={logoSrc}
            alt="TSI Assessoria & Engenharia"
            className={`${imgHeightClasses[size] || imgHeightClasses.header} w-auto object-contain drop-shadow-xs transition-opacity`}
            onError={() => {
              // If /logo-tsi.png is not found on Vercel deployment, try /logo-tsi.svg
              if (!triedSvg && logoSrc !== '/logo-tsi.svg') {
                setTriedSvg(true);
                setLogoSrc('/logo-tsi.svg');
              } else {
                setHasError(true);
              }
            }}
          />
        </div>
      ) : (
        /* Fallback if logo-tsi.png has not been dropped or uploaded yet */
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <span
              className={`font-black font-sans leading-none tracking-tight ${
                isLight ? 'text-white' : 'text-[#0A1626]'
              } ${
                size === 'showcase'
                  ? 'text-5xl sm:text-7xl'
                  : size === 'hero' || size === 'xl'
                  ? 'text-4xl sm:text-5xl'
                  : size === 'lg'
                  ? 'text-3xl sm:text-4xl'
                  : size === 'sm'
                  ? 'text-xl'
                  : 'text-2xl sm:text-3xl'
              }`}
            >
              TSI
            </span>
            <span
              className={`rounded-full ${
                size === 'showcase' ? 'h-3 w-3' : 'h-1.5 w-1.5'
              } ${isLight ? 'bg-sky-400' : 'bg-sky-600'}`}
            />
          </div>
          {showSubtitle && (
            <span
              className={`font-bold uppercase leading-tight mt-1 whitespace-nowrap ${
                size === 'showcase'
                  ? 'text-xs sm:text-sm tracking-[0.3em]'
                  : 'text-[8.5px] tracking-[0.24em]'
              } ${isLight ? 'text-slate-300' : 'text-slate-600'}`}
            >
              Assessoria &amp; Engenharia
            </span>
          )}
        </div>
      )}
    </div>
  );
};
