/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { Check, Info, Error } from 'common/ui/icons';
import './notify.css';

const SUCCESS = 'success';
const ERROR = 'error';
const INFO = 'info';
const WARN = 'warn';

const CenteredFlexContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 4px;
  }
`;

const generateToastContent = (type: string | number, children: React.ReactNode) => {
  const Icons = {
    [SUCCESS]: Check,
    [WARN]: Error,
    [ERROR]: Error,
    [INFO]: Info,
  };
  const Icon = Icons[type];

  return (
    <CenteredFlexContainer>
      <CenteredFlexContainer>
        <Icon />
      </CenteredFlexContainer>
      {children}
    </CenteredFlexContainer>
  );
};

const generateNotifier = (type: string, children: any, options: any) => {
  const toastContent = generateToastContent(type, children);

  return toast[type](toastContent, {
    ...options,
  });
};

export const notify = {
  [SUCCESS]: (children: any, options = {}) => {
    generateNotifier(SUCCESS, children, options);
  },
  [ERROR]: (children: any, options: any) => generateNotifier(ERROR, children, options),
  [WARN]: (children: any, options: any) => generateNotifier(WARN, children, options),
  [INFO]: (children: any, options: any) => generateNotifier(INFO, children, options),
  POSITION: {
    TOP_LEFT: toast.POSITION.TOP_LEFT,
    TOP_RIGHT: toast.POSITION.TOP_RIGHT,
    TOP_CENTER: toast.POSITION.TOP_CENTER,
    BOTTOM_LEFT: toast.POSITION.BOTTOM_LEFT,
    BOTTOM_RIGHT: toast.POSITION.BOTTOM_RIGHT,
    BOTTOM_CENTER: toast.POSITION.BOTTOM_CENTER,
  },
};
