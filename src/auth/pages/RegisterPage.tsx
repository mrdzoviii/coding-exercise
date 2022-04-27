import { useForm, Controller } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import { Flex, HeadingPrimary, Input, PrimaryButton, Card } from '../../styled';
import { useRegister } from '../hooks';
import { PathRoutes } from '../../config';

export interface IRegisterForm {
  name: string;
  email: string;
  password: string;
}

interface ILocationState {
  from: {
    pathname: string;
  };
}

export const RegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location as unknown as ILocationState;

  const from = PathRoutes.ROOT || locationState?.from?.pathname;

  const { register } = useRegister();
  const { control, handleSubmit } = useForm<IRegisterForm>();

  const onSubmit = async (data: IRegisterForm) => {
    if (data.email && data.password && data.name) {
      await register(data.name, data.email, data.password);
      navigate(from, { replace: true });
    }
  };

  return (
    <Flex backgroundColor="primaryLight" flex="1" alignItems="center" justifyContent="center">
      <Card boxShadow="card" flexDirection="column" backgroundColor="secondary">
        <HeadingPrimary>Sign Up</HeadingPrimary>
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
            render={({ field }) => <Input {...field} label="Name" />}
            name="name"
            control={control}
            defaultValue=""
          />
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
          <Flex flexDirection="column" alignItems="flex-start" width="100%" gap="medium">
            <PrimaryButton type="submit">Register</PrimaryButton>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};
