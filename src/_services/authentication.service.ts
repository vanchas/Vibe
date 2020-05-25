import Cookies from 'js-cookie';

import { handleResponse } from '../_helpers';

let currentUserSubject = (Cookies.getJSON('currentUser')) ? Cookies.getJSON('currentUser') : {};

export const authenticationService = {
  login,
  logout,
  registration,
  confirmEmail,
  confirmSMS,
  currentUser: currentUserSubject,
  get currentUserValue() { return currentUserSubject }
};

function login(username: string, password: string): any {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  return fetch(`/api/auth/login`, requestOptions)
    .then(handleResponse)
    .then(user => {
      Cookies.set('currentUser', JSON.stringify(user));
      currentUserSubject = user;
      return user;
    })
    // .then(() => window.location.reload(true));
}

function registration(name: string, email: string, phone: number, password: number | string, password_confirmation: number | string): any {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      email,
      phone,
      password,
      password_confirmation
    })
  };

  return fetch(`/api/auth/register`, requestOptions)
    .then(handleResponse)
    .then(user => {
      Cookies.set('currentUser', JSON.stringify(user));
      // currentUserSubject.next(user);
      currentUserSubject = user;
      return user;
    });
}

function logout(): any {
  Cookies.remove('currentUser');

  // const requestOptions = {
  //   method: 'GET',
  //   headers: { 'Content-Type': 'application/json' }
  // };

  // return fetch(`/api/auth/logout`, requestOptions)
  //   .then(handleResponse)
}

function confirmEmail(token: string): any {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

  return fetch(`/register/activate_email/${token}`, requestOptions)
    .then(handleResponse)
}

function confirmSMS(token: string): any {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

  return fetch(`/register/activate_sms/${token}`, requestOptions)
    .then(handleResponse)
}
