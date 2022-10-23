import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextComp';

const Login = () => {

  const { userLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  console.log(from);


  const handleUserLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then(result => {
        console.log(result.user);
        // form.reset();
        console.log(from);
        navigate(from);
      })
      .catch(error => console.error(error))
  }

  return (
    <div className='page-middle-content'>
      <div className='login auth-form my-14'>
        <h2 className='text-2xl font-medium mb-5'>Login</h2>
        <form onSubmit={handleUserLogin}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' placeholder='email' required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name='password' placeholder='password' required />
          </div>

          <button type="submit">Login</button>
        </form>

        <div className='mt-8'>
          Don't have any accout? <Link
            to='/register'
            style={{ color: 'burlywood', fontWeight: '600' }
            }>Please Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;