import React, { useState } from 'react';

const AnniversaryButton = () => {
	const [backgroundImage, setBackgroundImage] = useState(
		'https://www.eziline.com/wp-content/uploads/71dd02f49176464168ee8120e90b1bed-1.png'
	);

	const handleMouseOver = () => {
		setBackgroundImage(
			'https://vudesk.com/wp-content/uploads/2024/01/download.jpg'
		);
	};

	const handleMouseOut = () => {
		setBackgroundImage(
			'https://www.eziline.com/wp-content/uploads/71dd02f49176464168ee8120e90b1bed-1.png'
		);
	};

	return (
		<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-36171 megamenu-first-element">
			<a href="https://www.eziline.com/16th-anniversary/">
				<span
					className="anniversary-button inline-block text-white text-lg font-bold border-2 border-goldenrod rounded-2xl h-12 w-48 p-2 mt-[-10px] mb-[-10px]"
					style={{
						backgroundImage: `url(${backgroundImage})`,
						backgroundSize: 'cover',
					}}
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}>
					16th Anniversary
				</span>
			</a>
		</li>
	);
};

export default AnniversaryButton;
