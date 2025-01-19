import React from 'react';
import macc from '../assets/images/projectManagement/maccpoint.png';

const ProjectManagementSection = () => {
	return (
		<div className="flex flex-wrap w-full p-5 lg:p-10">
			<div className="w-full sm:w-1/2 flex justify-center items-center">
				<img
					src={macc}
					alt="Project Management"
					className=""
				/>
			</div>

			<div className="w-full sm:w-1/2 lg:w-1/2 px-4 mt-8 sm:mt-0">
				<h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center sm:text-left">
					Our Project Management
				</h3>
				<div className="border-t-2 border-teal-500 my-6 w-[30%]"></div>
				<ul className="list-none space-y-4 font-semibold ">
					<li className="flex">
						<span className="text-red-500 mr-2">★</span> Project and Milestone
						tracking
					</li>
					<li className="flex ">
						<span className="text-red-500 mr-2">★</span> Task management with
						SMS/email notification
					</li>
					<li className="flex ">
						<span className="text-red-500 mr-2">★</span> 24/7 online service
						&amp; Support
					</li>
					<li className="flex  ">
						<span className="text-red-500 mr-2">★</span> Billing/invoicing
						transparent management
					</li>
					<li className="flex ">
						<span className="text-red-500 mr-2">★</span> Discussion board for
						project management
					</li>
					<li className="flex ">
						<span className="text-red-500 mr-2">★</span> HR/ Payroll &amp;
						Complete office management
					</li>
					<li className="flex">
						<span className="text-red-500 mr-2">★</span> Cloud-based &amp;
						Robust technology
					</li>
				</ul>

				{/* Buttons */}
				<div className="flex flex-wrap justify-center sm:justify-start space-x-2 mt-6 font-bold">
					<a
						className="inline-block text-teal-500 border-2 border-teal-500 px-4 py-2 rounded hover:bg-teal-500 hover:text-white transition duration-300 mb-2"
						href="https://www.eziline.com/cp/staff/"
						target="_blank"
						rel="noopener noreferrer">
						Staff
					</a>

					<a
						className="inline-block text-blue-500 border-2 border-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition duration-300 mb-2"
						href="https://www.eziline.com/iportal"
						target="_blank"
						rel="noopener noreferrer">
						Intern
					</a>

					<a
						className="inline-block text-green-500 border-2 border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white transition duration-300 mb-2"
						href="https://www.eziline.com/cp/client/"
						target="_blank"
						rel="noopener noreferrer">
						Client
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectManagementSection;
