import React from 'react';
import image1 from '../../assets/images/DeveloperImages/images1.avif';
import image2 from '../../assets/images/DeveloperImages/images2.avif';
import image3 from '../../assets/images/DeveloperImages/images3.avif';
import image4 from '../../assets/images/DeveloperImages/images4.avif';
import image5 from '../../assets/images/DeveloperImages/images5.avif';
import image6 from '../../assets/images/DeveloperImages/images6.avif';
import image7 from '../../assets/images/DeveloperImages/images7.avif';

function HeroData() {
	const devData = [
		{
			id: ,
			name: ,
			src: ,
			description: ,
		}
		image1, image2, image3, image4, image5, image6, image7];
	return (
		<div>
			{devData.map((image, index) => (
				<>
					<div
						className="bg-white "
						key={index}>
						abc
					</div>
					<img
						className="absolute sm:w-96 lg:w-[580px] bottom-0 "
						src={image}
						alt={index}
						key={index}
					/>
				</>
			))}
		</div>
	);
}

export default HeroData;
