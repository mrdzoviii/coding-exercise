import { FlexCenter, HeadingPrimary, Input, PrimaryButton } from 'styled';
import styled from 'styled-components';
import { Card, Flex } from 'rebass/styled-components';
import { useForm, Controller } from 'react-hook-form';

const LoginContainer = styled(FlexCenter)`
  background-color: ${(props) => props.theme.colors.primaryLight};
`;

const LoginCard = styled(Card)`
  display: flex;
  flex-direction: column;
  min-width: 50rem;
  height: 50rem;
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

const LoginForm = styled(Flex)`
  padding: 3.2rem;
  flex-direction: column;
  gap: 2.4rem;
  flex: 1;
`;

interface IFormInput {
  email: string;
  password: string;
}

export const SignInPage = () => {
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(JSON.stringify(data));
  };

  return (
    <LoginContainer>
      <LoginCard>
        <HeadingPrimary>Sign In</HeadingPrimary>
        <LoginForm as="form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            render={({ field }) => <Input {...field} label="Email" />}
            name="email"
            control={control}
            defaultValue=""
          />
          <Controller
            render={({ field }) => <Input {...field} label="Password" type="password" />}
            name="password"
            control={control}
            defaultValue=""
          />
          <PrimaryButton type="submit">Sign in</PrimaryButton>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  );
};
