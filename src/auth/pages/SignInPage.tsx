import { FlexCenter, HeadingPrimary } from 'styled';
import styled from 'styled-components';
import { Card } from 'rebass/styled-components';

const LoginContainer = styled(FlexCenter)`
  background-color: ${(props) => props.theme.colors.primaryLight};
`;

const LoginCard = styled(Card)`
  min-width: 50rem;
  height: 50rem;
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export const SignInPage = () => {
  return (
    <LoginContainer>
      <LoginCard>
        <HeadingPrimary>Sign In</HeadingPrimary>
      </LoginCard>
    </LoginContainer>
  );
};
