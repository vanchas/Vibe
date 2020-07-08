import React, { useState } from "react";
import SignIn from "../components/login-page/SignIn";
import SignUp from "../components/login-page/SignUp";
import LoginControl from '../components/login-page/LoginControl';

export default function login() {
	const [visibleSignInComponent, setVisibleSignInComponent] = useState(true);
	// const [registeredEmail, setRegisteredEmail] = useState('');
	// const [registeredPassword, setRegisteredPassword] = useState('');

	const changeVisibleSignInComponent = () => {
		setVisibleSignInComponent(!visibleSignInComponent);
	};

	return (
		<div className="px-2">
			<LoginControl
				visibleSignInComponent={visibleSignInComponent}
				changeVisibleSignInComponent={changeVisibleSignInComponent}
			/>

			{visibleSignInComponent
				? <SignIn
				// registeredEmail={registeredEmail}
				// registeredPassword={registeredPassword}
				/>
				: <SignUp
				// setRegisteredEmail={setRegisteredEmail}
				// setRegisteredPassword={setRegisteredPassword}
				// setVisibleSignInComponent={setVisibleSignInComponent}
				/>}
		</div>
	);
}
