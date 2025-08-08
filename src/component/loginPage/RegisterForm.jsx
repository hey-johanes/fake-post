import axios from 'axios';
import React, { useState } from 'react';
import { USER_URL } from '../../config/config';

const initialField = {
  username: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = ({ triggerButton }) => {
  const [field, setField] = useState(initialField);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setField({
      ...field,
      [name]: value,
    });
  };
  const register = async (e) => {
    e.preventDefault();
    delete field.confirmPassword;
    triggerButton();
    await axios.post(USER_URL, field);
    setField(initialField);
  };

  function checkfield() {
    if (
      field.username.trim() == '' ||
      field.password.trim() == '' ||
      field.confirmPassword.trim() == '' ||
      (field.password === field.confirmPassword) == false
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <form onSubmit={register}>
      <div className="mb-3">
        <label
          htmlFor="exampleInputEmail1"
          className="form-label d-flex flex-row"
        >
          Username
        </label>
        <input
          className="form-control"
          name="username"
          value={field.username}
          aria-describedby="emailHelp"
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
      <div className="mb-3">
        <label
          htmlFor="exampleInputPassword1"
          className="form-label d-flex flex-row"
        >
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          name="confirmPassword"
          value={field.confirmPassword}
          onChange={handleChange}
        />
        {field.password == field.confirmPassword ? (
          <></>
        ) : (
          <p>Password and Confirm Password does not match.</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary" disabled={checkfield()}>
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
