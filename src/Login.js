import React, { useState, useDispatch } from "react";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [profilePic, setProfilePic] = useState("");

	const Register = () => {
		if (!name) {
			return alert("Please enter a full name!");
		}
	};
	const loginToApp = (e) => {
		e.preventDefault();
	};

	return (
		<div className="login">
			<img
				src="https://www.socialmediabutterflyblog.com/wp-content/uploads/sites/567/2019/02/linkedin.jpg"
				alt=""
			/>
			<form>
				<input
					type="text"
					placeholder="Full name (required if registering)"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<input
					type="text"
					placeholder="Profile pic URL(optional)"
					value={profilePic}
					onChange={(e) => setProfilePic(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<button type="submit" onClick={loginToApp}>
					Sign In
				</button>
			</form>
			<p>
				Not a member?{" "}
				<span onClick={Register} className="login__register">
					Register Now
				</span>
			</p>
		</div>
	);
}

export default Login;
