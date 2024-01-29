import styled from 'styled-components';
import theme from '../theme';

const Input = styled.input`
  background: ${theme.palette.background.base};
  padding: ${theme.spacing(2)};
  border: none;
  color: ${theme.palette.text.primary};
  &:focus {
    box-shadow: inset 0 0 0 1px #0e40c1, 0 0 3px 1px #3067e1; // "border" created with a drop shadow plus the focus ring
    outline: none; // disable default focus styles
  }
`;

export default Input;
