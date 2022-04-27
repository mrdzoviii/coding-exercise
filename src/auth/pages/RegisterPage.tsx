import { Flex, HeadingPrimary, Input, PrimaryButton, Card } from 'styled';
import { useForm, Controller } from 'react-hook-form';
import { useRegister } from '../hooks';

export interface IRegisterForm {
  name: string;
  email: string;
  password: string;
}

export const RegisterPage = () => {
  const { register } = useRegister();

  const { control, handleSubmit } = useForm<IRegisterForm>();

  const onSubmit = async (data: IRegisterForm) => {
    if (data.email && data.password && data.name) {
      await register(data.name, data.email, data.password);
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
