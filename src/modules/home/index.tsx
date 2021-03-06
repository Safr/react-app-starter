import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DIContext } from 'core/di';
import { theme } from 'common/styles/theme';
import { Button } from 'common/ui/button';

function HomePage(): React.ReactElement<Record<string, unknown>> {
  const { Meta, notify } = useContext(DIContext);
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
