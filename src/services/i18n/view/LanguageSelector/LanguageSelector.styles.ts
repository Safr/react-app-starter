import styled, { css } from 'styled-components';
import { createTransition } from 'common/styles/theme';

const ArrowElement = styled.div<{ reverse: boolean }>(
  ({
    reverse = false,
    theme: {
      palette: { secondary },
    },
  }) => {
    return css`
      width: 0;
      height: 0;
      margin-left: 0.3em;
      opacity: 0.9;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid ${secondary};
      transition: transform 400ms ease;

      &:hover {
        opacity: 1;
      }

      transform: ${reverse && 'rotate(180deg)'};
    `;
  },
);

const CurrentLanguage = styled.div`
  font-size: 12px;
  color: #000;
`;

const Option = styled.div(() => {
  return css`
    display: flex;
    padding-right: 15px;
    padding-left: 10px;
    justify-content: flex-start;
    width: 100%;
    min-height: 35px;
    font-size: 80%;
    line-height: 35px;
    text-decoration: none;
    transition: all 200ms ease-in-out;
    cursor: pointer;
    color: #000;

    &:hover {
      color: #ccc;
    }
  `;
});

const Overlay = styled.div<{ showed: boolean }>(({ showed = false }) => {
  return css`
    display: ${showed ? 'block' : 'none'};
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  `;
});

const Select = styled.div<{ showed: boolean }>(({ showed = false }) => {
  return css`
    position: absolute;
    left: auto;
    bottom: auto;
    top: 18px;
    right: 1px;
    z-index: 4;
    width: auto;
    margin-top: 40px;
    font-size: 14px;
    border-radius: 0;
    overflow-y: hidden;
    visibility: ${showed ? 'visible' : 'hidden'};
    opacity: ${showed ? '1' : '0'};

    & > div {
      position: static;
      overflow-y: hidden;
      height: auto;
    }
  `;
});

const SelectWrapper = styled.div(() => {
  return css`
    display: flex;
    padding: 1px 15px 0 10px;
    justify-content: flex-start;
    align-items: center;
    min-height: 36px;
    margin-left: 10px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    line-height: 1.3em;
    font-weight: 400;
    text-align: center;
    text-transform: none;
    border-radius: 0;
    background-color: transparent;
    cursor: pointer;
    transition: ${createTransition(['background-color'], { duration: 200, easing: 'ease-in' })};

    &:hover {
      color: #fff;
    }
  `;
});

export { ArrowElement, CurrentLanguage, Option, Overlay, Select, SelectWrapper };
