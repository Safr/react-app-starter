import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { theme } from 'common/styles/theme';
import { Button } from 'common/ui/button';
import { Meta } from 'services/meta';
import { notify } from 'services/notifier/notify';

function HomePage(): React.ReactElement<Record<string, unknown>> {
  const { t } = useTranslation();
  return (
    <>
      <Meta title={t('page.home.title')} />
      <h1>{t('page.home.title')}</h1>
      <Button color={theme.palette.black} onClick={() => {}}>
        {t('buttonText')}
      </Button>
      <Link to="/about">{t('page.about.title')}</Link>
      {notify.success(t('page.home.welcome'))}
    </>
  );
}

export default HomePage;
