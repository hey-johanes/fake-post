import axios from 'axios';
import React, { useState } from 'react';
import ModalsLogin from '../modals/ModalsLogin';

const initialField = {
  username: '',
  password: '',
};

const LoginForm = () => {
  const [field, setField] = useState(initialField);
  const [found, setFound] = useState(true);

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
      const response = await axios.get('http://localhost:1234/user');
      const users = response.data;

      const findUsers = users.find(
        (data) =>
          data.username === field.username && data.password === field.password
      );
      if (findUsers) {
        setFound(true);
      } else {
        setFound(false);
      }
    } catch (error) {
      console.log(error);
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
