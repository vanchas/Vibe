import React from 'react';
import s from './login.module.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { authenticationService } from '../../_services';

export default function SignIn({  }) {
  const router = useRouter();

  return (
    <div className={s.login_page_form}>
      <h2>Login</h2>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().required('email is required'),
          password: Yup.string().required('Password is required')
        })}
        onSubmit={({ email, password }, { setStatus, setSubmitting }) => {
          setStatus();
          authenticationService.login(email, password)
            .then(
              data => {
                setTimeout(() => {
                    setSubmitting(false)
                }, 3000)
              },
              error => {
                setSubmitting(false)
                setStatus(error)
              }
            )
            .catch((err) => console.error("Error:", err));
        }}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
              <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
              <ErrorMessage name="password" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <button type="submit" className={`btn ${s.submit_btn}`} disabled={isSubmitting}>Submit</button>
              {isSubmitting &&
                <div className="spinner-border spinner-border-sm text-primary ml-3" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              }
            </div>
            {status &&
              <div className={'alert alert-danger'}>{JSON.stringify(status)}</div>
            }
          </Form>
        )}
      />
    </div>
  )
}
