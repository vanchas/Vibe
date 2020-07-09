import React, { useState } from "react";
import SignIn from "../components/login-page/SignIn";
import SignUp from "../components/login-page/SignUp";
import LoginControl from '../components/login-page/LoginControl';
import {connect} from "react-redux";
import Success from "../components/helpers/Success";
import Alert from "../components/helpers/Alert";

function login({success, alert}) {
	const [visibleSignInComponent, setVisibleSignInComponent] = useState(true);

	const changeVisibleSignInComponent = () => {
		setVisibleSignInComponent(!visibleSignInComponent);
	};

	return (
		<div className="px-2">
			<LoginControl
				visibleSignInComponent={visibleSignInComponent}
				changeVisibleSignInComponent={changeVisibleSignInComponent}
			/>
			{success && <Success />}
			{alert && <Alert />}
			{visibleSignInComponent
				? <SignIn />
				: <SignUp />}
		</div>
	);
}

const mapStateToProps = state => ({
	success: state.app.success,
	alert: state.app.alert
})

const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(login)