import React, { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";
import Button from "./ui/Button";

const PhonesContainer = ({ phones }) => {
	const [displayPhones, setDisplayPhones] = useState([]);
	const [showAll, setShowAll] = useState(false);

	useEffect(() => {
		if (showAll) {
			setDisplayPhones(phones);
		} else {
			setDisplayPhones(phones.slice(0, 6));
		}
	}, [phones, showAll]);

	return (
		<>
			{displayPhones.length === 0 && <p className='text-center text-2xl md:text-4xl font-thin text-gray-900'>Phone not found</p>}
			<div className='py-12'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
					{displayPhones.map((phone) => (
						<PhoneCard
							key={phone.id}
							phone={phone}
						></PhoneCard>
					))}
				</div>
				{displayPhones.length > 1 && (
					<Button
						label={showAll ? "Show Less" : "Show More"}
						onClick={() => {
							setShowAll(!showAll);
							if (showAll) window.scrollTo(0, 400);
						}}
					/>
				)}
			</div>
		</>
	);
};

export default PhonesContainer;
