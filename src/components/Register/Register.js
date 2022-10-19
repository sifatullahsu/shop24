import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextComp';


const Register = () => {

  const { userRegiser } = useContext(AuthContext);

  const handleUserRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email;
    const password = form.password;

    userRegiser(email, password)
      .then(result => {
        console.log(result);
        form.reset();
      })
      .catch(error => console.error(error))
  }

  return (
    <div className='page-middle-content'>
      <div className='register auth-form my-14'>
        <h2 className='text-2xl font-medium mb-5'>Register</h2>
        <form onSubmit={handleUserRegister}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" name='name' placeholder='name' required />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' placeholder='email' required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name='password' placeholder='password' required />
          </div>

          <button type="submit">Register</button>
        </form>
        <div className='mt-8'>
          Allready have an accout? <Link
            to='/login'
            style={{ color: 'burlywood', fontWeight: '600' }
            }>Please Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;