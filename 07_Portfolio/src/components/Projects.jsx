import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
	const projects = [
		{
			id: 1,
			title: 'E-commerce Website',
			description: 'An online store built with React and Tailwind CSS.',
			technologies: ['React', 'Tailwind CSS', 'Redux'],
			image: 'https://via.placeholder.com/300',
		},
		{
			id: 2,
			title: 'Portfolio Website',
			description: 'A personal portfolio showcasing my work.',
			technologies: ['React', 'HTML', 'CSS'],
			image: 'https://via.placeholder.com/300',
		},
		{
			id: 3,
			title: 'Task Management App',
			description: 'A simple task manager built with React.',
			technologies: ['React', 'Context API'],
			image: 'https://via.placeholder.com/300',
		},
		{
			id: 4,
			title: 'Blog Platform',
			description: 'A responsive blog platform for sharing articles.',
			technologies: ['Next.js', 'Tailwind CSS'],
			image: 'https://via.placeholder.com/300',
		},
	];

	return (
		<section
			id="projects"
			className="min-h-screen p-8 bg-gray-100">
			<h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
				My Projects
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project) => (
					<ProjectCard
						key={project.id}
						project={project}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
