import React from "react";
import "./Main.css";
import useLocal from "../../hooks/useLocal";
import i18n from "../../i18n";
import { useTranslation } from 'react-i18next';


export const Main = () => {

  const { t } = useTranslation();
  const [language, setLanguage] = useLocal('language', 'ru');

  const handleLenguageChange = () => {
      if (language === 'en') {
          i18n.changeLanguage('ru');
          setLanguage('ru');
      } else if (language === 'ru') {
          i18n.changeLanguage('en');
          setLanguage('en');
      }
  };
  return (
    <div className="main">
      <br/>
        
        <h2>{t('Welcome Theme Provider Post')}</h2>
        <p>{t('We')}</p>


        <br />
        <button onClick={handleLenguageChange}>
            {t('change to')}{' '}
            {language === 'ru' ? t('english') : t('russian')}
            
        </button>
        <button className='reload' onClick={() => window.location.reload()}>
            {t('refresh page')}
        </button>
    </div>
);
 
};