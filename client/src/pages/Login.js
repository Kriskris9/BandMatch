import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import{ PROFILE_LOGIN } from '../utils/mutations';

import Auth from '../utils/auth';



const Login = (props) => {
    const [formState, setFormState] = useState({
    email:'',
    password:'',
  });
  const [login, { error, data }] = useMutation(PROFILE_LOGIN);

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
    };

    const handleFormSubmit = async (event) =>{
        event.preventDefault();
        console.log(formState);
        
    try{
        const {data} = await login({
            variables:{...formState},
        });
        Auth.login(data.login.token);
      } catch (e) {
        console.log(e);
        console.log('unable to login')
      }
//FORM DEFAULT
        setFormState({
            email: '',
            password:'',
        });
    };


    return(
        <main className="flex-row justify-center mb-4">
          <div className="col-12 col-lg-10">
            <div className="card">
              <h4 className="card-header bg-dark text-light p-2">Login</h4>
              <div className="card-body">
                {data ? (
                  <p>
                    You are now logged in {' '}
                    <Link to="/">back to the homepage.</Link>
                  </p>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <input
                      className="form-input"
                      placeholder="Email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="******"
                      name="password"
                      type="password"
                      value={formState.password}
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-block btn-primary"
                      style={{ cursor: 'pointer' }}
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                )}
    
                {error && (
                  <div className="my-3 p-3 bg-danger text-white">
                    {error.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      );
};

export default Login;
