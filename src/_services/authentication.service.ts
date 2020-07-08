import Cookies from "js-cookie";
import fetch from "isomorphic-unfetch";
import { handleResponse } from "../_helpers";
import Router from "next/Router";

let currentUserSubject = Cookies.getJSON("currentUser")
  ? Cookies.getJSON("currentUser")
  : {};

const target = `https://intim-vibe-api.padilo.pro/api`;

export const authenticationService = {
  login,
  logout,
  registrationAdmin,
  registrationClient,
  registrationProvider,
  registrationAgency,
  currentUser: currentUserSubject,
  get currentUserValue() {
    return currentUserSubject;
  },
};

async function login(email: string, password: string): Promise<any> {
  Cookies.remove("currentUser");
  return await fetch(`${target}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then(handleResponse)
    .then((user) => {
      if (user.token) {
        Cookies.set("currentUser", JSON.stringify(user), { expires: 1 });
        currentUserSubject = user;
        return user;
      }
    }).then((user) => {
      if (user.user.role === 'client') {
        Router.push('/userCabinet');
      } else if (user.user.role = 'individual') {
        Router.push('/modelCabinet');
      } else if (user.user.role === 'admin') {
        Router.push('/admin');
      } else if (user.user.role === 'agency') {
        Router.push('/modelCabinet');
      }
    })
    // .then(() => window.location.reload(true))
    .catch((err) => console.error("Error:", err));
}
async function registrationClient(
  name: string,
  password: string,
  email: string,
  password_confirmation: string
): Promise<any> {
  Cookies.remove("currentUser");
  return await fetch(`https://intim-vibe-api.padilo.pro/api/client/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
    body: JSON.stringify({
      name,
      password,
      email,
      password_confirmation,
    }),
  })
    .then(handleResponse)
    // .then((client) => {
    //   Cookies.set("currentUser", JSON.stringify(client));
    //   currentUserSubject = client;
    //   return client;
    // })
    // .then(() => {
    //   login(email, password);
    // })
    // .then(() => window.location.reload(true))
    .catch((err) => console.error("Error:", err));
}
async function registrationAdmin(
  name: string,
  password: string,
  email: string,
  password_confirmation: string
): Promise<any> {
  Cookies.remove("currentUser");
  return await fetch(`${target}/admin/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
    body: JSON.stringify({
      name,
      password,
      email,
      password_confirmation,
    }),
  })
    .then(handleResponse)
    // .then((admin) => {
    //   Cookies.set("currentUser", JSON.stringify(admin));
    //   currentUserSubject = admin;
    //   return admin;
    // })
    // .then(() => {
    //   login(email, password);
    // })
    // .then(() => window.location.reload(true))
    .catch((err) => console.error("Error:", err));
}
async function registrationProvider(
  name: string,
  password: string,
  email: string,
  password_confirmation: string,
  phone: string | number
): Promise<any> {
  Cookies.remove("currentUser");
  return await fetch(`${target}/individual/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
    body: JSON.stringify({
      name,
      password,
      email,
      password_confirmation,
      phone
    }),
  })
    .then(handleResponse)
    // .then((provider) => {
    //   Cookies.set("currentUser", JSON.stringify(provider.user));
    //   currentUserSubject = provider;
    //   return provider;
    // })
    // .then(() => {
    //   login(email, password);
    // })
    // .then(() => window.location.reload(true))
    .catch((err) => console.error("Error:", err));
}
async function registrationAgency(
  name: string,
  password: string,
  email: string,
  password_confirmation: string,
  phone: string | number,
  agency_name: string
): Promise<any> {
  Cookies.remove("currentUser");
  const response = await fetch(`${target}/agency/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
    body: JSON.stringify({
      name,
      password,
      email,
      password_confirmation,
      phone,
      agency_name
    }),
  });
  const promise = response.json();
  promise.then(provider => {
    // Cookies.set("currentUser", JSON.stringify(provider));
    // currentUserSubject = provider;
    // return provider;
  })
    // .then(() => login(email, password))
    // .then(() => window.location.reload(true))
    .catch((err) => console.error("Error:", err));
}
async function logout(): Promise<any> {
  Cookies.remove("currentUser");
  return await fetch(`${target}/logout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then(() => Router.push('/login'))
    .then(() => window.location.reload(true))
    .catch((err) => console.error("Error:", err));
}
