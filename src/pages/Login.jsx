import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoggedInUser }) => {
  const navigate = useNavigate();

  const initialValues = {
    username: '', 
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
  });

  const handleSubmit = (values) => {
    console.log('Login Form Values:', values);

    // Simulate a successful login by storing the user in localStorage
    const savedUser = { username: values.username };  // You can store more details if needed
    localStorage.setItem("loggedInUser", JSON.stringify(savedUser)); 

    // Set the logged-in user in state (if using state management)
    setLoggedInUser(savedUser);

  };

  return (
    <div className="min-vh-100 bg-dark text-light d-flex align-items-center justify-content-center">
      <div className="container mt-5">
        <h1>Login</h1>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <div>
                <label>Username:</label>
                <Field type="text" name="username" className="form-control" />
                <ErrorMessage name="username" component="div" className="text-danger" />
              </div>

              <div>
                <label>Password:</label>
                <Field type="password" name="password" className="form-control" />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>

              <button type="submit" className="btn btn-primary mt-3">
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
