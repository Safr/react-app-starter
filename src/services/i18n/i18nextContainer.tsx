import React, { useContext } from 'react';
import { I18nextProvider } from 'react-i18next';
import { DIContext } from 'core/di';

export const I18nextContainer: React.FC = ({ children }) => {
  const { i18n } = useContext(DIContext);
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
