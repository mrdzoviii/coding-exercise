import { Heading } from 'rebass/styled-components';
import styled from 'styled-components';

export const HeadingPrimary = styled(Heading)`
  font-family: ${(props) => props.theme.fonts.roboto};
  font-weight: ${(props) => props.theme.fontWeightBold};
  font-size: ${(props) => props.theme.fontSizeExtraLarge};
  padding: ${(props) => props.theme.paddingExtraLarge};
`;

export const HeadingSecondary = styled(Heading)`
  font-family: ${(props) => props.theme.fonts.roboto};
  font-weight: ${(props) => props.theme.fontWeightBold};
  font-size: ${(props) => props.theme.fontSizeLarge};
  padding: ${(props) => props.theme.paddingLarge};
`;

export const HeadingTertiary = styled(Heading)`
  font-family: ${(props) => props.theme.fonts.roboto};
  font-weight: ${(props) => props.theme.fontWeightBold};
  font-size: ${(props) => props.theme.fontSizeMedium};
  padding: ${(props) => props.theme.paddingMedium};
`;
