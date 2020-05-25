import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { authenticationService } from '../../_services';

export default function SignUp() {
  const router = useRouter();

  return (
    <div className="bg-light">
      <h2>Registration</h2>
      <Formik
        initialValues={{
          username: '',
          email: '',
          phone: '',
          password: '',
          password_confirmation: ''
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required('Username is required'),
          password: Yup.string().required('Password is required')
        })}
        onSubmit={({ username, email, phone, password, password_confirmation }, { setStatus, setSubmitting }) => {
          setStatus();
          authenticationService.registration(username, email, phone, password, password_confirmation)
            .then(
              user => {
                const { from } =
                  // this.props.location.state ||
                  { from: { pathname: "/" } };
                router.push(from);
              },
              error => {
                setSubmitting(false);
                setStatus(error);
              }
            );
        }}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
              <ErrorMessage name="username" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
              <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <Field name="phone" type="number" className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} />
              <ErrorMessage name="phone" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
              <ErrorMessage name="password" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="password_confirmation">Confirm password</label>
              <Field name="password_confirmation" type="password" className={'form-control' + (errors.password_confirmation && touched.password_confirmation ? ' is-invalid' : '')} />
              <ErrorMessage name="password_confirmation" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Login</button>
              {isSubmitting &&
                <div className="spinner-border spinner-border-sm text-primary ml-3" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              }
            </div>
            {status &&
              <div className={'alert alert-danger'}>{status}</div>
            }
          </Form>
        )}
      />
    </div>
  )
}
