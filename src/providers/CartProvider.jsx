import React, { useEffect, useState } from "react";
import { CartContext } from "./Contexts";
import { getCart } from "../utils";

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

    useEffect(() => {
        // Local Storage Diye Dekho Cart er data ase kina
        setCart(getCart());
    }, []);

	return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
