
import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/auth-operations';
import { Container, Form, Label, Input, Button, Title } from './Auth.styled';


export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
        const form = evt.target;
    const email = form.email.value;
    const password = form.password.value;
      if ((email && password) === '') {
      return
    } else {
      dispatch(logIn({ email, password }));
      form.reset();
    }

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
