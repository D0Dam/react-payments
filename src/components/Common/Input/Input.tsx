import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: string;
  maxLength?: number;
  textAlign?: 'left' | 'center' | 'right';
  resetStyle?: boolean;
  backgroundColor?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export type { InputProps };

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ backgroundColor, resetStyle = true, maxLength, textAlign, ...props }, ref) => (
    <StyledInput
      backgroundColor={backgroundColor}
      maxLength={maxLength}
      {...props}
      ref={ref}
      resetStyle={resetStyle}
      textAlign={textAlign}
    />
  ),
);

const StyledInput = styled.input<InputProps>`
  background-color: ${({ backgroundColor }) => backgroundColor ?? 'none'};
  width: ${({ maxLength }) => (maxLength ? `${maxLength * 16}px` : `100%`)};
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
  ${({ resetStyle }) =>
    resetStyle &&
    css`
      border: none;
      background: none;
      outline: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      input::-ms-clear {
        display: none;
      }
      input[type='number']::-webkit-inner-spin-button,
      input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    `};
`;

export default Input;