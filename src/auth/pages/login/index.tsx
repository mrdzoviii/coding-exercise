import { useForm, Controller } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import { string, object } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { Flex, HeadingPrimary, Input, PrimaryButton, SecondaryButton, Card } from '../../../styled';
import { PathRoutes } from '../../../config';
import { useLogInWithEmailAndPassword, useLogInWithGoogle } from '../../hooks';
import { ILocationState, ILogInForm } from '../../types';

const loginFormSchema = object({
  email: string()
    .required('Email is required')
    .max(50, 'Maximum length exceeded.')
    .min(7, 'Minimum email length is 7')
    .email('Email not valid'),
  password: string()
    .required('Password is required')
    .min(7, 'Password minimum length is 8 characters.')
    .max(50, 'Password minimum length is 8 characters.')
});

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location as unknown as ILocationState;
  const { login } = useLogInWithEmailAndPassword();
  const { loginWithGoogle } = useLogInWithGoogle();

  const from = PathRoutes.ROOT || locationState?.from?.pathname;

  const { control, handleSubmit, reset } = useForm<ILogInForm>({
    mode: 'onSubmit',
    resolver: yupResolver(loginFormSchema)
  });

  const onSubmit = async (data: ILogInForm) => {
    try {
      await login(data.email, data.password);
      navigate(from, { replace: true });
    } catch (err) {
      reset();
      toast.error('Wrong email/password');
    }
  };

  const onGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate(from, { replace: true });
    } catch (err) {
      toast.error('Login via Google failed');
    }
  };

  const onRegister = () => {
    navigate(PathRoutes.REGISTER, { replace: true, state: { from: location } });
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
            render={({ field, fieldState: { error } }) => (
              <Input
                {...field}
                error={!!error}
                helperText={error?.message}
                inputProps={{ maxLength: 50 }}
                label="Email"
              />
            )}
            name="email"
            control={control}
            defaultValue=""
          />
          <Controller
            render={({ field, fieldState: { error } }) => (
              <Input
                {...field}
                error={!!error}
                helperText={error?.message}
                inputProps={{ maxLength: 50 }}
                label="Password"
                type="password"
              />
            )}
            name="password"
            control={control}
            defaultValue=""
          />
          <Flex flexDirection="column" alignItems="flex-start" width="100%" gap="medium">
            <PrimaryButton type="submit">Login</PrimaryButton>
            <PrimaryButton onClick={onGoogleLogin}>Login with Google</PrimaryButton>
            <SecondaryButton onClick={onRegister}>Register</SecondaryButton>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};
