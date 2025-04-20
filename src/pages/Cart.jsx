import React, { useContext } from "react";
import { CartContext } from "../providers/Contexts";
import PhoneCard from "../components/PhoneCard";
import { getCart, removeCart } from "../utils";
import EmptyState from "../components/ui/EmptyState";

const Cart = () => {
	const { cart, setCart } = useContext(CartContext);
	console.log(cart);
	const handleDelete = (id) => {
		removeCart(id);
		setCart(getCart());
	};

    if (cart.length < 1) return <EmptyState />;
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
			{cart.map((phone) => (
				<PhoneCard
					key={phone.id}
					phone={phone}
					deletable={true}
					handleDelete={handleDelete}
				></PhoneCard>
			))}
		</div>
	);
};

export default Cart;
