import * as React from 'react';
import styled from 'styled-components';

export interface Props {
  /** Button content  */
  color: string;
  children: React.ReactNode;
  /** Callback to handle the click event  */
  onClick?: () => void;
  /**
   * Disables onClick
   *
   * @default false
   * */
  disabled?: boolean;
}

const noop = () => {};

const StyledButton = styled.button`
  cursor: pointer;
  padding: 0 ${props => props.theme.spacing.unit * 2};
  height: 49px;
  border-radius: 2px;
  border: 2px solid ${props => props.theme.palette.white};
  display: inline-flex;
  color: ${props => (props.color ? props.color : 'blue')};
  background-color: ${props =>
    props.disabled ? props.theme.palette.secondary : props.theme.palette.primary};
`;

const ButtonSpan = styled.span`
  margin: auto;
  font-size: ${props => props.theme.typography.fontSizeButton};
  font-weight: ${props => props.theme.typography.fontWeightBold};
  text-align: center;
  color: ${props => props.theme.palette.white};
  text-transform: uppercase;
`;

/*
 * If you opt to do export default, you'll still need to have this
 * export for the TsDocGen work properly (I struggled to find this out)
 */
export const Button: React.FC<Props> = (props: Props): React.ReactElement => {
  const { children, color, onClick, disabled = false } = props;

  return (
    <StyledButton color={color} disabled={disabled} onClick={!disabled ? onClick : noop}>
      <ButtonSpan>{children}</ButtonSpan>
    </StyledButton>
  );
};
