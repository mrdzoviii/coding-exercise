import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const PrimaryButton = styled(Button).attrs(() => ({ variant: 'contained', fullWidth: true }))`
  &.MuiButton-contained,
  &.MuiButton-contained:hover {
    background-color: ${(props) => props.theme.colors.primary};
    margin-top: auto;
    height: 5.4rem;
    .MuiButton-label {
      font-size: ${(props) => props.theme.fontSize.normal};
    }
  }
}
`;
