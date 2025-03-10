import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();

  const initialValues = {
    firstName: '',
    surname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'First Name cannot exceed 15 characters')
      .required('Required'),
    surname: Yup.string()
      .max(20, 'Surname cannot exceed 20 characters')
      .required('Required'),
    username: Yup.string()
      .min(4, 'Username must be at least 4 characters')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Must contain at least one lowercase letter')
      .matches(/[0-9]/, 'Must contain at least one number')
      .matches(/[@$!%*?&]/, 'Must contain at least one special character')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    localStorage.setItem('user', JSON.stringify(values)); // Store user data in localStorage
    alert('Registration successful! You can now log in.');
    navigate('/login'); // Redirect to login page
    setSubmitting(false);
  };

  return (
    <div className="min-vh-100 bg-dark text-light d-flex align-items-center justify-content-center">
      <div className="container mt-5">
        <h1>Register</h1>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label>First Name:</label>
                <Field type="text" name="firstName" className="form-control" />
                <ErrorMessage name="firstName" component="div" className="text-danger" />
              </div>

              <div>
                <label>Surname:</label>
                <Field type="text" name="surname" className="form-control" />
                <ErrorMessage name="surname" component="div" className="text-danger" />
              </div>

              <div>
                <label>Username:</label>
                <Field type="text" name="username" className="form-control" />
                <ErrorMessage name="username" component="div" className="text-danger" />
              </div>

              <div>
                <label>Email Address:</label>
                <Field type="email" name="email" className="form-control" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>

              <div>
                <label>Password:</label>
                <Field type="password" name="password" className="form-control" />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>

              <div>
                <label>Confirm Password:</label>
                <Field type="password" name="confirmPassword" className="form-control" />
                <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
              </div>

              <button type="submit" className="btn btn-primary mt-3" disabled={isSubmitting}>
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Registration;
