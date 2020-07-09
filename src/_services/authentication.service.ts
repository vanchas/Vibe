import Cookies from "js-cookie";
import fetch from "isomorphic-unfetch";
import Router from "next/router";
import store from "../redux/store";
import {showSuccess} from "../redux/actions/actions";

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
    const response = await fetch(`${target}/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password}),
    });
    const promise = response.json();
    if (response.status === 200) {
        return promise.then(data => {
            Cookies.set("currentUser", JSON.stringify(data), {expires: 1});
            currentUserSubject = data;
            return data;
        }).then(() => Router.push('/'))
            .then(() => window.location.reload())
            .catch((err) => console.error("Error:", err));
    }
}

async function registrationClient(
    name: string,
    password: string,
    email: string,
    password_confirmation: string
): Promise<any> {
    Cookies.remove("currentUser");
    const response = await fetch(`https://intim-vibe-api.padilo.pro/api/client/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json", 'Accept': 'application/json'},
        body: JSON.stringify({
            name,
            password,
            email,
            password_confirmation,
        }),
    });
    const promise = response.json();
    if (response.status === 201) {
        return promise.then((data: any) => {
            store.dispatch(showSuccess(data.message))
            setTimeout(() => window.location.reload(), 3000)
        }).catch((err: any) => console.error("Error:", err));
    }
}

async function registrationAdmin(
    name: string,
    password: string,
    email: string,
    password_confirmation: string
): Promise<any> {
    Cookies.remove("currentUser");
    const response = await fetch(`${target}/admin/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json", 'Accept': 'application/json'},
        body: JSON.stringify({
            name,
            password,
            email,
            password_confirmation,
        }),
    });
    const promise = response.json();
    if (response.status === 201) {
        return promise.then((data: any) => {
            store.dispatch(showSuccess(data.message))
            setTimeout(() => window.location.reload(), 3000)
        }).catch((err: any) => console.error("Error:", err));
    }
}

async function registrationProvider(
    name: string,
    password: string,
    email: string,
    password_confirmation: string,
    phone: string | number
): Promise<any> {
    Cookies.remove("currentUser");
    const response = await fetch(`${target}/individual/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json", 'Accept': 'application/json'},
        body: JSON.stringify({
            name,
            password,
            email,
            password_confirmation,
            phone
        }),
    });
    const promise = response.json();
    if (response.status === 201) {
        return promise.then((data: any) => {
            store.dispatch(showSuccess(data.message))
            setTimeout(() => window.location.reload(), 3000)
        }).catch((err: any) => console.error("Error:", err));
    }
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
        headers: {"Content-Type": "application/json", 'Accept': 'application/json'},
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
    if (response.status === 201) {
        return promise.then((data: any) => {
            store.dispatch(showSuccess(data.message))
            setTimeout(() => window.location.reload(), 3000)
        }).catch((err: any) => console.error("Error:", err));
    }
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
