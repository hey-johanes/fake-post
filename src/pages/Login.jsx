import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import RegisterForm from '../component/loginPage/RegisterForm';
import LoginForm from '../component/loginPage/LoginForm';

const Login = () => {
  const [formLogin, setFormLogin] = useState(true);
  const [formRegister, setFormRegister] = useState(false);

  const triggerButton = () => {
    setFormLogin((prev) => !prev);
    setFormRegister((prev) => !prev);
  };

  return (
    <Container className="mt-5 p-4 border rounded w-25">
      <Button
        variant="primary"
        disabled={formLogin == true}
        onClick={triggerButton}
      >
        Login
      </Button>
      <Button
        className="ms-3"
        variant="success"
        disabled={formRegister == true}
        onClick={triggerButton}
      >
        Register
      </Button>
      {formLogin ? (
        <LoginForm />
      ) : (
        <RegisterForm triggerButton={triggerButton} />
      )}
    </Container>
  );
};

export default Login;
