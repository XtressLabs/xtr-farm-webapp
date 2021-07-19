import React, { useContext } from 'react';
import AppContext from '../context/app';

const Footer = (props) => {
  const { t } = useContext(AppContext);

  return (
    <footer>
      <h4>
        {t('footer')}
        <a
          href="https://xtressials.tech/home/opensource/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {t('footerLink')}
        </a>
        {t('footer2')}
        <a
          href="https://xtressials.tech"
          rel="noopener noreferrer"
          target="_blank"
        >
          {t('footerLink2')}
        </a>
      </h4>
      <p>{t('copyright')}</p>
      <small>{t('copyrightInfo')}</small>
    </footer>
  );
};

export default Footer;
