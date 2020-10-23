import React, { useContext, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { DIContext } from 'core/di';

export const I18nextContainer: React.FC = ({ children }) => {
  const { i18n } = useContext(DIContext);

  useEffect(() => {
    document.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n, i18n.language]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
