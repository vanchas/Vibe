import Cookies from 'js-cookie';
import fetch from 'isomorphic-unfetch';
import { handleResponse } from '../_helpers';

let currentUserSubject = (Cookies.getJSON('currentUser')) ? Cookies.getJSON('currentUser') : {};

const target = `https://intim-vibe-api.padilo.pro/api`;

export const authenticationService = {
  login,
  logout,
  registrationAdmin,
  registrationClient,
  registrationProvider,
  confirmEmail,
  confirmSMS,
  currentUser: currentUserSubject,
  get currentUserValue() { return currentUserSubject }
};

async function login(email: string, password: string): Promise<any> {
  return await fetch(`${target}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }).then(handleResponse)
    .then(user => {
      // if (user.token) {
      Cookies.set('currentUser', JSON.stringify(user));
      currentUserSubject = user;
      return user;
      // }
    }).catch(err => console.error('Error:', err))
  // .then(() => window.location.reload(true));
}

async function registrationClient(name: string, password: number | string, email: string, password_confirmation: number | string): Promise<any> {
  // https://intim-vibe-api.padilo.pro/api/client/register
  return await fetch(`https://intim-vibe-api.padilo.pro/api/client/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      password,
      email,
      password_confirmation
    })
  })
    .then(handleResponse)
    .then(client => {
      console.log('client:', client);

      Cookies.set('currentUser', JSON.stringify(client));
      currentUserSubject = client;
      return client;
    }).catch(err => console.error('Error:', err))
}

async function registrationAdmin(name: string, password: number | string, email: string, password_confirmation: number | string): Promise<any> {
  return await fetch(`${target}/admin/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      password,
      email,
      password_confirmation
    })
  }).then(handleResponse)
    .then(admin => {
      Cookies.set('currentUser', JSON.stringify(admin));
      currentUserSubject = admin;
      return admin;
    })
    .catch(err => console.error('Error:', err))
}

async function registrationProvider(name: string, password: number | string, email: string, password_confirmation: number | string, phone: string | number): Promise<any> {
  return await fetch(`${target}/individual/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      password,
      email,
      password_confirmation,
      phone
    })
  }).then(handleResponse)
    .then(provider => {
      Cookies.set('currentUser', JSON.stringify(provider));
      currentUserSubject = provider;
      return provider;
    })
    .catch(err => console.error('Error:', err))
}

async function logout(): Promise<any> {
  Cookies.remove('currentUser');
  return await fetch(`${target}/logout`, {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }).then(res => res)
    .catch(err => console.error('Error:', err))
}

function confirmEmail(token: string): any {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

  return fetch(`/register/activate_email/${token}`, requestOptions)
    .then(handleResponse)
    .catch(err => console.error('Error:', err))
}

function confirmSMS(token: string): any {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

  return fetch(`/register/activate_sms/${token}`, requestOptions)
    .then(handleResponse)
    .catch(err => console.error('Error:', err))
}
