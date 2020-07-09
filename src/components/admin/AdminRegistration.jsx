import React, { useState } from "react";
import { authenticationService } from '../../_services';
import { connect } from "react-redux";
import { showAlert } from "../../redux/actions/actions";

function AdminRegistration(props) {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [confirmedPassword, setConfirmedPassword] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		if (
			!name.length ||
			!password.length ||
			!email.length ||
			!confirmedPassword.length
		) {
			return props.showAlert("All fields must be filled");
		}
		if (password !== confirmedPassword) {
			return props.showAlert("Password confirmation did not match");
		}
		authenticationService.registrationAdmin(name, password, email, confirmedPassword);
	};

	return (
		<div className="text-white">
			<span className="text-center d-block py-3">New admin registration</span>

			<form onSubmit={(e) => submitHandler(e)} className="form-group container">
				<label className="form-group d-block">
					name
					<input
						type="text"
						className="form-control"
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label className="form-group d-block">
					password
					<input
						type="password"
						className="form-control"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<label className="form-group d-block">
					email
					<input
						type="email"
						className="form-control"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label className="form-group d-block">
					password_confirmation
					<input
						type="password"
						className="form-control"
						onChange={(e) => setConfirmedPassword(e.target.value)}
					/>
				</label>
				<button type="submit" className=" btn btn-light">
					Submit
				</button>
			</form>
		</div>
	);
}

const mapStateToProps = (state) => ({
	alert: state.app.alert,
});

const mapDispatchToProps = {
	showAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminRegistration);
