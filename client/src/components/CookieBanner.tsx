import { useState, useEffect } from 'react';
import './CookieBanner.css';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner__content">
        <p className="cookie-banner__text">
          Мы используем файлы cookie для улучшения работы сайта. 
          Продолжая использовать сайт, вы соглашаетесь с{' '}
          <a href="/cookie-policy" target="_blank" rel="noopener noreferrer">
            Политикой использования cookie
          </a>.
        </p>
        <button className="cookie-banner__button" onClick={handleAccept}>
          Принять
        </button>
      </div>
    </div>
  );
};