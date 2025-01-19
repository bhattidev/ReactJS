import React from 'react';
import '../../assets/style/bgAnimate.css'; // Import the custom CSS for the animation

const StarBackground = ({ numberOfStars = 200 }) => {
	const stars = Array.from({ length: numberOfStars }, (_, index) => ({
		id: index,
		top: `${Math.random() * 100}%`,
		left: `${Math.random() * 100}%`,
		animationDuration: `${Math.random() * 100 + 10}s`,
		animationDelay: `${Math.random() * 50}s`,
		size: `${Math.random() * 0.2 + 0.5}vmin`, // Random size
		boxShadow: `${Math.random() * 1 + 1}vmin 0 ${Math.random() * 1.5 + 0.5}vmin currentColor`,
		transformOrigin: `${Math.random() * 20 + -10}vw ${Math.random() * 20 + -10}vh`,
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
						boxShadow: star.boxShadow,
						transformOrigin: star.transformOrigin,
					}}
				/>
			))}
		</div>
	);
};

export default StarBackground;
