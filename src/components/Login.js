import { GoogleLogin } from "@react-oauth/google";
import { json, Link, redirect } from "react-router-dom";
import { useEffect } from "react";

const clientId = "968658749452-5n8j9kjdionsmfulgehjn9jcma2k5s8n.apps.googleusercontent.com";

const checkAuth = () => {};

const Login = () => {
	const handleSubmit = async (e) => {
		e.preventDefault();

		const token = await fetch("http://localhost:2121/api/auth/login", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				email: e.target.email.value,
				password: e.target.password.value,
			}),
		});
		console.log(await token.json());

		if (!token) {
			console.log("Auth Error");
		} else {
			// redirect("/feed");
			console.log("Success");
		}
	};

	const onSuccess = (e) => {
		console.log(e + "success");
	};

	const onFailure = (e) => {
		console.log(e + "Failure");
	};

	const handleGoogleSignIn = (token) => {
		if (!token) {
			console.log("Google Auth Error");
		} else {
			// redirect("/feed");
			console.log("Google Success");
		}
	};

	return (
		<div className="bg-white font-family-karla min-h-screen">
			<div className="w-full flex flex-wrap">
				{/* <!-- Login Section --> */}
				<div className="w-full md:w-1/2 flex flex-col">
					<div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
						<a href="#" className="bg-black text-white font-bold text-xl p-4">
							4x4Logo
						</a>
					</div>

					<div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
						<p className="text-center text-3xl">Welcome.</p>
						<form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
							<div className="flex flex-col pt-4">
								<label htmlFor="email" className="text-lg">
									Email
								</label>
								<input
									type="email"
									id="email"
									placeholder="your@email.com"
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
								/>
							</div>

							<div className="flex flex-col pt-4">
								<label htmlFor="password" className="text-lg">
									Password
								</label>
								<input
									type="password"
									id="password"
									placeholder="Password"
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
								/>
							</div>

							<input
								type="submit"
								value="Log In"
								className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 my-8"
							/>
						</form>
						<GoogleLogin
							className="bg-red-700 text-white font-bold text-lg hover:bg-red-600 p-2 mt-8"
							clientId={clientId}
							buttonText="Sign in with Google"
							onSuccess={onSuccess}
							onFailure={onFailure}
							cookiePolicy={"single_host_origin"}
							isSignedIn={true}
						/>
						;
						{/* <button
                type="button"
                onClick={handleGoogleSignIn}
                className="bg-red-700 text-white font-bold text-lg hover:bg-red-600 p-2 mt-6"
              >
                {" "}
                Login with Google{" "}
              </button> */}
						<div className="text-center py-4">
							<p>
								Don't have an account?{" "}
								<Link to="./signup" className="underline font-semibold">
									Register here
								</Link>
							</p>
						</div>
					</div>
				</div>

				{/* <!-- Image Section --> */}
				<div className="w-1/2 shadow-2xl">
					<img
						className="object-cover w-full h-screen hidden md:block"
						src="https://source.unsplash.com/IXUM4cJynP0"
						alt="img"
					/>
				</div>
			</div>
		</div>
	);
};
export default Login;
