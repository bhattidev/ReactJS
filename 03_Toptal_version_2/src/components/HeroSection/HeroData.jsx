import React from 'react';
import image1 from '../../assets/images/DeveloperImages/images1.avif';
import image2 from '../../assets/images/DeveloperImages/images2.avif';
import image3 from '../../assets/images/DeveloperImages/images3.avif';
import image4 from '../../assets/images/DeveloperImages/images4.avif';
import image5 from '../../assets/images/DeveloperImages/images5.avif';
import image6 from '../../assets/images/DeveloperImages/images6.avif';
import image7 from '../../assets/images/DeveloperImages/images7.avif';
import mapImage from '../../assets/images/map/map1.avif';

function HeroData() {
	const devData = [
		{
			id: 1,
			name: 'John Doe',
			src: image1,

			rank: 'Senior Developer',
			company: 'Tech Corp',
		},
		{
			id: 2,
			name: 'Jane Smith',
			src: image2,
			rank: 'Junior Developer',
			company: 'Innovatech',
		},
		{
			id: 3,
			name: 'Alice Johnson',
			src: image3,
			rank: 'Frontend Developer',
			company: 'Designify',
		},
		{
			id: 4,
			name: 'Robert Brown',
			src: image4,
			rank: 'Backend Developer',
			company: 'CodeBase Inc.',
		},
		{
			id: 5,
			name: 'Emily Davis',
			src: image5,
			rank: 'Full Stack Developer',
			company: 'BuildIt Ltd.',
		},
		{
			id: 6,
			name: 'Chris Wilson',
			src: image6,
			rank: 'Software Engineer',
			company: 'DevWorks',
		},
		{
			id: 7,
			name: 'Sarah Parker',
			src: image7,
			rank: 'Lead Developer',
			company: 'Createch',
		},
	];
	return (
		<div>
			{devData.map((item) => (
				<div
					className=""
					key={item.id}>
					<img
						className="absolute  bottom-0 sm:w-96 lg:w-[580px] "
						src={item.src}
						alt={item.name}
					/>
					<div className="bg-white absolute right-10 z-10 ">
						<img
							src={mapImage}
							alt=""
							className="w-60"
						/>
						<p className="text-blue-700 text-sm font-bold">{item.name}</p>
						<h2 className="text-green-600 flex text-xs">
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-label="Verified Icon"
								role="img">
								<rect
									className="text-white"
									fill="currentColor"
									x="4.5"
									y="4.5"
									width="7"
									height="7"></rect>
								<path
									fill="currentColor"
									d="m2.3438,5.6562l-2.3438,2.3438,2.3438,2.3438v3.3137h3.3137l2.3425,2.3425,2.3425-2.3425h3.315v-3.315l2.3425-2.3425-2.3425-2.3425v-3.3137h-3.3138l-2.3437-2.3438-2.3438,2.3438h-3.3125v3.3125Zm5.0488,2.7528l2.754-2.7654.9705.9739-3.7245,3.7399-.9705-.9739-1.3672-1.3733.9705-.9752,1.3672,1.3739Z"></path>
								<path
									className="text-white"
									fillRule="evenodd"
									clipRule="evenodd"
									d="M10.1465 5.64374L7.39254 8.4091L6.02535 7.03518L5.05485 8.01039L6.42204 9.38364L7.39254 10.3575L11.117 6.61761L10.1465 5.64374Z"
									fill="currentColor"></path>
							</svg>
							<strong className="font-bold">Verified Expert</strong>
							<div>&nbsp;in {item.rank}</div>
						</h2>
					</div>
				</div>
			))}
		</div>
	);
}

export default HeroData;
