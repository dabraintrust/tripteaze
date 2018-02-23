import React from 'react';

let Signup = (props) => {

	let submit = (event) => {
		event.preventDefault();
		props.signup(props.username, props.password);
	}

	let changeUsername = event => {
		props.updateUsername(event.target.value);
	}

	let changePassword = event => {
		props.updatePassword(event.target.value);
	}
	
	return (
		<div>
			<h2>Sign up</h2>

			<form onSubmit = {submit} >
				<div>
					<label>Username:</label>
					<input type="text" onChange = {changeUsername} />
				</div>
				<div>
					<label>Password:</label>
					<input type="password" onChange = {changePassword} />
				</div>
				<div>
					<input type="submit" value="Sign up"/>
				</div>
			</form>
		</div>
	);
}


export default Signup;