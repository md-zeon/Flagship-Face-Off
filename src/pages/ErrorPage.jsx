import React from "react";
import Navbar from "../components/Navbar";
import { Link, useRouteError } from "react-router";
import Button from "../components/ui/Button";

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<div>
			<Navbar />
			<div className='py-24 text-center'>
				<h1 className='mb-8 text-7xl font-thin text-gray-900'>{error?.error?.status || 404}</h1>
				<p className='mb-3 text-xl font-bold text-gray-900 md:text-2xl'>
					{error?.error?.message || "Something Went Wrong!"}
				</p>
				<Link to='/'>
					<Button label='Go to Homepage' />
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
