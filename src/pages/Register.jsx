// import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { register } from '../redux/auth/auth-operations';
import { Container, Form, Label, Input, Button, Title } from './Auth.styled';

export const Register = () => {
  const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = evt => {
  //   const { name, value } = evt.target;

  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

  //     case 'email':
  //       setEmail(value);
  //       break;

  //     case 'password':
  //       setPassword(value);
  //       break;

  //     default:
  //       alert('Error happened. Please try again');
  //       break;
  //   }
  // };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    dispatch(
      register({
        name,
        email,
        password,
      }));
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
          required/>
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
