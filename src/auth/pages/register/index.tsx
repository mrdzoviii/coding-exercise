import { useForm, Controller } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { Flex, HeadingPrimary, Input, PrimaryButton, Card } from '../../../styled';
import { useRegister } from '../../hooks';
import { PathRoutes } from '../../../config';
import { ILocationState, IRegisterForm } from '../../types';

const registerFormSchema = object({
  name: string().required('Name is required').max(50, 'Maximum length exceeded.').min(7, 'Minimum email length is 7'),
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

export const RegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location as unknown as ILocationState;

  const from = PathRoutes.ROOT || locationState?.from?.pathname;

  const { register } = useRegister();
  const { control, handleSubmit, reset } = useForm<IRegisterForm>({
    mode: 'onSubmit',
    resolver: yupResolver(registerFormSchema)
  });

  const onSubmit = async (data: IRegisterForm) => {
    try {
      await register(data.name, data.email, data.password);
      navigate(from, { replace: true });
      toast.success('Registration successful.');
    } catch (err) {
      reset();
      toast.error('Registration failed.');
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
            render={({ field, fieldState: { error } }) => (
              <Input
                {...field}
                error={!!error}
                helperText={error?.message}
                inputProps={{ maxLength: 50 }}
                label="Name"
              />
            )}
            name="name"
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
            <PrimaryButton type="submit">Register</PrimaryButton>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};
