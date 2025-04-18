import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
	},
	{
		path: "/about",
		element: <p>This is An About Page</p>,
	},
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
