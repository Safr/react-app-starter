/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { DIContext } from 'core/di';
import { Logo } from 'common/ui/icons';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 380px;
  min-height: 100vh;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 45px;
  margin-bottom: 25px;
  font-size: 32px;
  font-weight: 300;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.43;
  color: var(--color-gray-black);
`;

const GoBackButton = styled.button`
  /* color: var(--color-black); */
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

function NotFoundPage(): React.ReactElement<any, any> {
  const { Meta } = useContext(DIContext);
  const { t } = useTranslation();
  const history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return (
    <>
      <Meta title={t('page.404.title')} />
      <Wrapper>
        <Logo width="48" height="48" fill="#afafaf" />
        <Title>{t('page.404.title')}</Title>
        <Description>
          {t('page.404.description')}{' '}
          <GoBackButton onClick={handleClick}>{t('page.404.goBack')}</GoBackButton>
        </Description>
      </Wrapper>
    </>
  );
}

export default NotFoundPage;
