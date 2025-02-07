import React from 'react';

const ProjectCard = ({ project }) => {
	return (
		<div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2">
			<img
				src={project.image}
				alt={project.title}
				className="w-full h-40 object-cover rounded-md mb-4"
			/>
			<h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
			<p className="text-gray-600">{project.description}</p>
			<ul className="flex flex-wrap gap-2 mt-2">
				{project.technologies.map((tech, index) => (
					<li
						key={index}
						className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
						{tech}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProjectCard;
