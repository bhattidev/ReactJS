import React from 'react';
import '../assets/style/bgAnimate.css'; // Import the custom CSS for the animation

const StarBackground = ({ numberOfStars = 200 }) => {
	const stars = Array.from({ length: numberOfStars }, (_, index) => ({
		id: index,
		top: `${Math.random() * 100}%`,
		left: `${Math.random() * 100}%`,
		animationDuration: `${Math.random() * 50 + 10}s`, // Random duration (10s to 60s)
		animationDelay: `${Math.random() * 50}s`, // Random delay
		size: `${Math.random() * 0.2 + 0.5}vmin`, // Random size between 0.5 and 1.5vmin
		distance: `${Math.random() * 50 + 50}px`, // Random distance from center
	}));

	return (
		<div className="background absolute top-0 left-0 w-full h-full overflow-hidden">
			{stars.map((star) => (
				<span
					key={star.id}
					className="star"
					style={{
						top: star.top,
						left: star.left,
						animationDuration: star.animationDuration,
						animationDelay: star.animationDelay,
						width: star.size,
						height: star.size,
						transform: `translate(-50%, -50%)`, // To center each star
						animation: `move ${star.animationDuration} linear infinite`, // Apply animation
						transformOrigin: 'center', // Rotation around the center of the star
						animationDelay: star.animationDelay, // Apply random delay to each star
					}}
				/>
			))}
		</div>
	);
};

export default StarBackground;
