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
			<div className='space-y-4'>
				<h2 className='font-thin text-4xl'>Details: </h2>
				<p>
					<span className='font-bold'>Brand:</span> {brand}
				</p>
				<p>
					<span className='font-bold'>Model:</span> {model}
				</p>
				{/* Storage Info */}
				<div className='flex gap-1'>
					<p className='font-bold'>Storage:</p>
					<div>
						{storage.map((item) => {
							return (
								<div key={item}>
									<div>{item}</div>
								</div>
							);
						})}
					</div>
				</div>
				{/* Price info */}
				<div className='flex gap-1'>
					<p className='font-bold'>Price:</p>
					<div>
						{Object.entries(price).map(([storage, price]) => (
							<p
								key={storage}
								className=''
							>
								<span>{storage}:</span> <span>{price}</span>
							</p>
						))}
					</div>
				</div>
				<p>
					<span className='font-bold'>Camera Info:</span> {camera_info}
				</p>
				<p>
					<span className='font-bold'>Description:</span> {description}
				</p>
			</div>
		</div>
	);
};

export default PhoneDetails;
