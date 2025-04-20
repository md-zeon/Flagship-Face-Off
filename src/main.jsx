import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/routes";
import CartProvider from "./providers/CartProvider";
import { Toaster } from "react-hot-toast";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<CartProvider>
			<RouterProvider router={router} />
			<Toaster position="bottom-right" />
		</CartProvider>
	</StrictMode>,
);
