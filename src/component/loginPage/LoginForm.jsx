import axios from 'axios';
import React, { useState } from 'react';
import ModalsLogin from '../modals/ModalsLogin';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { USER_URL } from '../../config/config';

const initialField = {
  username: '',
  password: '',
};

const LoginForm = () => {
  const [field, setField] = useState(initialField);
  const [found, setFound] = useState(true);
  const navigate = useNavigate();

  const { login } = useAuthContext();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setField({
      ...field,
      [name]: value,
    });
  };

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.get(
        `${USER_URL}?username=${field.username}&password=${field.password}`
      );
      const findUsers = response.data[0];
      if (findUsers) {
        setFound(true);
        login(findUsers);
        navigate('/dashboard');
      } else {
        setFound(false);
      }
    } catch (error) {
      console.log(error);
      setFound(false);
    }
  }
  const handleClose = () => {
    setFound(true);
    setField(initialField);
  };
  return (
    <>
      <ModalsLogin show={!found} handleClose={handleClose} />
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label d-flex flex-row"
          >
            Username
          </label>
          <input
            className="form-control"
            aria-describedby="emailHelp"
            name="username"
            value={field.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label d-flex flex-row"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={field.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginForm;
