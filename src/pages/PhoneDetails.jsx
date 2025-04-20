import React from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../components/ui/Button";
import { MdBookmarkAdd, MdShoppingCartCheckout } from "react-icons/md";
import { addFavorite } from "../utils";

const PhoneDetails = () => {
	const data = useLoaderData();
	const { id } = useParams();
	// console.log(typeof id, typeof data);
	const singlePhone = data.find((phone) => phone.id === parseInt(id));
	// console.table(singlePhone);
	const { name, image, brand, model, price, description, storage, camera_info } = singlePhone || {};

    const handleFavorite = () => {
        addFavorite(singlePhone);
    }

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
					<Button label={<MdShoppingCartCheckout />} />
					<Button onClick={handleFavorite} label={<MdBookmarkAdd />} />
				</div>
			</div>
            {/* Details */}
            <div>

            </div>
		</div>
	);
};

export default PhoneDetails;
