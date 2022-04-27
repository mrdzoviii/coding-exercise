import { Flex, HeadingPrimary, Input, PrimaryButton, Card } from 'styled';
import { useForm, Controller } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import { useAppDispatch, useSetUser } from '../../store';
import { PathRoutes } from '../../config';

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

  const from = PathRoutes.ROOT || locationState?.from?.pathname;

  const { control, handleSubmit } = useForm<ILogInForm>();

  const dispatch = useAppDispatch();
  const dispatchSetUser = useSetUser(dispatch);

  const onSubmit = (data: ILogInForm) => {
    setTimeout(() => {
      if (data.email && data.password) {
        dispatchSetUser({ fullName: data.email, username: data.email });
        navigate(from, { replace: true });
      }
    }, 2000);
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
      </Card>
    </Flex>
  );
};
