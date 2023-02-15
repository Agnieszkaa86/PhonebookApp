import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/auth-operations';
import { Container, Form, Label, Input, Button, Title } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();


  const handleSubmit = evt => {
      evt.preventDefault();
      const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
      form.reset();
 
  };
  return (
    <Container>
      <Title>Log in your account</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input
            type="email"
            name="email"
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
          />
        </Label>
        <Button type="submit">Log In</Button>
      </Form>
    </Container>
  );
};
