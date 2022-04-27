import { Flex, HeadingPrimary, Input, PrimaryButton, Card } from 'styled';
import { useForm, Controller } from 'react-hook-form';

export interface ILogInForm {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const { control, handleSubmit } = useForm<ILogInForm>();

  const onSubmit = (data: ILogInForm) => {
    console.log(JSON.stringify(data));
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
