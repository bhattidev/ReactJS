import React from 'react';
import image1 from '../../assets/images/DeveloperImages/images1.avif';
import image2 from '../../assets/images/DeveloperImages/images2.avif';
import image3 from '../../assets/images/DeveloperImages/images3.avif';
import image4 from '../../assets/images/DeveloperImages/images4.avif';
import image5 from '../../assets/images/DeveloperImages/images5.avif';
import image6 from '../../assets/images/DeveloperImages/images6.avif';
import image7 from '../../assets/images/DeveloperImages/images7.avif';

function HeroData() {
	const devImages = [image1, image2, image3, image4, image5, image6, image7];
	return (
		<>
			<div className="">
				{/* {devImages.map((image, index) => (
					<img
						className="absolute"
						src={image}
						alt={index}
						key={index}
					/>
				))} */}
			</div>
		</>
	);
}

export default HeroData;
