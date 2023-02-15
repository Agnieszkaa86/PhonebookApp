import { useDispatch } from 'react-redux';

import { register } from '../../redux/auth/auth-operations';
import { Container, Form, Label, Input, Button, Title } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
  const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };


  return (
    <Container>
      <Title>Register new account</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Username
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required />
        </Label>
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
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          />
        </Label>
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );

};