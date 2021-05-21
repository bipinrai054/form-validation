import React from 'react';
import useForm from './useForm';

const FormSignup = () => {
  const { handleChange, values, handleSubmit } = useForm();

  return (
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            type='text'
            className='form-input'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            type='email'
            className='form-input'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            type='password'
            className='form-input'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            type='password'
            className='form-input'
            name='password2'
            placeholder='Enter your password2'
            value={values.password2}
            onChange={handleChange}
          />
        </div>
        <button className='form-input-btn' type='submit'>
          Sign Up
        </button>
        <span className='form-input-login'>
          Already have an account? Login<a href='#'> here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
