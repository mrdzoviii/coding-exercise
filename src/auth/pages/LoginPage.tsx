import { Flex, HeadingPrimary, Input, PrimaryButton, Card } from 'styled';
import { useForm, Controller } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import { PathRoutes } from '../../config';
import { useLogInWithEmailAndPassword, useLogInWithGoogle } from '../hooks';

export interface ILogInForm {
  email: string;
  password: string;
}

interface ILocationState {
  from: {
    pathname: string;
  };
}

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location as unknown as ILocationState;
  const { login } = useLogInWithEmailAndPassword();
  const { loginWithGoogle } = useLogInWithGoogle();

  const from = PathRoutes.ROOT || locationState?.from?.pathname;

  const { control, handleSubmit } = useForm<ILogInForm>();

  const onSubmit = async (data: ILogInForm) => {
    if (data.email && data.password) {
      await login(data.email, data.password);
      navigate(from, { replace: true });
    }
  };

  return (
    <Flex backgroundColor="primaryLight" flex="1" alignItems="center" justifyContent="center">
      <Card boxShadow="card" flexDirection="column" backgroundColor="secondary">
        <HeadingPrimary>Sign In</HeadingPrimary>
        <Flex
          width="100%"
          as="form"
          flexDirection="column"
          flex="1"
          gap="large"
          padding="extraLarge"
          onSubmit={handleSubmit(onSubmit)}
        >
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
        </Flex>
        <PrimaryButton onClick={loginWithGoogle}>Sign in with Google</PrimaryButton>
      </Card>
    </Flex>
  );
};
