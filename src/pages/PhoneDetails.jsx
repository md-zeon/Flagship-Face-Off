import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../components/ui/Button";
import { MdBookmarkAdd, MdShoppingCartCheckout } from "react-icons/md";
import { addFavorite, addToCart, getCart } from "../utils";
import { CartContext } from "../providers/Contexts";

const PhoneDetails = () => {
	const data = useLoaderData();
	const { id } = useParams();
	const singlePhone = data.find((phone) => phone.id === parseInt(id));
	const { setCart } = useContext(CartContext);
	const { name, image, brand, model, price, description, storage, camera_info } = singlePhone || {};

	const handleFavorite = () => {
		addFavorite(singlePhone);
	};
	const handleCart = () => {
        // Save To Local Storage
		addToCart(singlePhone);
        //  Update State for instant ui change
        setCart(getCart());
	};

	return (
		<div className='py-12'>
			<img
				src={image}
				alt={name}
				className='w-full mx-auto md:w-auto mb-8'
			/>
			{/* Title and Buttons */}
			<div className='flex justify-between'>
				<h1 className='text-6xl font-thin mb-8'>{name}</h1>
				<div className='space-x-4'>
					<Button
						onClick={handleCart}
						label={<MdShoppingCartCheckout />}
					/>
					<Button
						onClick={handleFavorite}
						label={<MdBookmarkAdd />}
					/>
				</div>
			</div>
			{/* Details */}
			<div></div>
		</div>
	);
};

export default PhoneDetails;
