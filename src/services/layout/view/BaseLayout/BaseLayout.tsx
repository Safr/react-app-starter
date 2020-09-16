/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-lone-blocks */
import React, { FC } from 'react';
import styled from 'styled-components';
import { LanguageSelector } from 'services/i18n/view/LanguageSelector';
// import { Container } from 'shared/styles';
import { BaseLayoutWrapper } from './BaseLayout.styles';

const Container = styled.div``;

const BaseLayout: FC = ({ children }) => {
  return (
    <BaseLayoutWrapper>
      <LanguageSelector />
      <Container>{children}</Container>
    </BaseLayoutWrapper>
  );
};

export { BaseLayout };
