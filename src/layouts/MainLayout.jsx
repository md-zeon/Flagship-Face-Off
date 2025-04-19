import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
	return (
		<>
			<Navbar />
			<div className="min-h-[calc(100vh-7.25rem)]">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default MainLayout;
