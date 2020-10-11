import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DIContext } from 'core/di';

function AboutPage(): React.ReactElement<Record<string, unknown>> {
  const { Meta } = useContext(DIContext);
  const { t } = useTranslation();
  return (
    <>
      <Meta title={t('page.about.title')} />
      <h1>{t('page.about.title')}</h1>
      <Link to="/">{t('page.home.title')}</Link>
    </>
  );
}

export default AboutPage;
