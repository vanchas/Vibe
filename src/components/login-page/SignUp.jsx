import React, { useState } from 'react';
import s from './login.module.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { authenticationService } from '../../_services';

export default function SignUp() {
  const router = useRouter();
  const [formUser, setFormUser] = useState(true);

  return (
    <div className={s.login_page_form}>
      <h2>Registration</h2>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          password_confirmation: '',
          phone: ''
        }}
        validationSchema={Yup.object().shape(
          formUser
            ? {
              username: Yup.string().required('Username is required'),
              password: Yup.string().required('Password is required'),
              email: Yup.string().required('Email is required'),
              password_confirmation: Yup.string().required('Password is required')
            }
            : {
              username: Yup.string().required('Username is required'),
              password: Yup.string().required('Password is required'),
              email: Yup.string().required('Email is required'),
              password_confirmation: Yup.string().required('Password is required'),
              phone: Yup.string().required('Phone is required and must contain 12 characters')
            })}
        onSubmit={({ username, email, password, password_confirmation, phone }, { setStatus, setSubmitting }) => {
          setStatus();
          phone.toString().length
            ? authenticationService.registrationProvider(username, password, email, password_confirmation, phone)
            : authenticationService.registrationClient(username, password, email, password_confirmation)
              .then(
                user => {
                  console.log('user:', user);
                  const { from } =
                    // this.props.location.state ||
                    { from: { pathname: "/" } };
                  router.push(from);
                },
                error => {
                  console.log('error:', error);
                  setSubmitting(false);
                  setStatus(error);
                }
              );
        }}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form>
            <div className={`${s.role_toggler}`}>
              {formUser ? <span className={`${s.user}`}>as User</span> : <span className={`${s.model}`}>as Model</span>}
              <label className={s.switch} htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onChange={() => setFormUser(!formUser)} />
                <div className={`${s.slider} ${s.round}`} />
              </label>
            </div>
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
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
              <ErrorMessage name="password" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="password_confirmation">Confirm password</label>
              <Field name="password_confirmation" type="password" className={'form-control' + (errors.password_confirmation && touched.password_confirmation ? ' is-invalid' : '')} />
              <ErrorMessage name="password_confirmation" component="div" className="invalid-feedback" />
            </div>
            {!formUser && <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <Field name="phone" type="number" className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} />
              <ErrorMessage name="phone" component="div" className="invalid-feedback" />
            </div>}
            <div className="form-group">
              <button type="submit" className={`btn ${s.submit_btn}`} disabled={isSubmitting}>Submit</button>
              {isSubmitting &&
                <div className="spinner-border spinner-border-sm text-primary ml-3" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              }
            </div>
            {status &&
              <div className={'alert alert-danger'}>{JSON.stringify(status)}{console.log(status)}</div>
            }
          </Form>
        )}
      />
    </div>
  )
}
