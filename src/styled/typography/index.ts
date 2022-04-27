import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const HeadingPrimary = styled(Typography).attrs(() => ({ variant: 'h1' }))`
  &.MuiTypography-h1 {
    font-family: ${(props) => props.theme.fonts.roboto};
    font-weight: ${(props) => props.theme.fontWeightBold};
    font-size: ${(props) => props.theme.fontSize.extraLarge};
    padding: ${(props) => props.theme.spacing.extraLarge};
  }
`;

export const HeadingSecondary = styled(Typography).attrs(() => ({ variant: 'h2' }))`
  &.MuiTypography-h2 {
    font-family: ${(props) => props.theme.fonts.roboto};
    font-weight: ${(props) => props.theme.fontWeightBold};
    font-size: ${(props) => props.theme.fontSize.large};
    padding: ${(props) => props.theme.spacing.large};
  }
`;

export const HeadingTertiary = styled(Typography).attrs(() => ({ variant: 'h3' }))`
  &.MuiTypography-h3 {
    font-family: ${(props) => props.theme.fonts.roboto};
    font-weight: ${(props) => props.theme.fontWeightBold};
    font-size: ${(props) => props.theme.fontSize.medium};
    padding: ${(props) => props.theme.spacing.medium};
  }
`;
