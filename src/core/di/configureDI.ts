import React from 'react';
import { initializeI18n } from 'services/i18n/i18nInitializer';
import { Meta } from 'services/meta';
import { notify } from 'services/notifier/notify';

const i18n = initializeI18n();

const config = {
  i18n,
  Meta,
  notify,
};

export const DIContext = React.createContext<typeof config>(config);

export function configureDI() {
  return config;
}
