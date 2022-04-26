import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

export const Input = styled(TextField).attrs(() => ({ autoComplete: 'off', variant: 'outlined' }))`
  &.MuiTextField-root {
    .MuiFormLabel-root,
    .MuiInputBase-root {
      font-size: ${(props) => props.theme.fontSizeMedium};
    }
  }
`;
