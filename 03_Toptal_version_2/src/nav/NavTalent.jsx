import React from 'react';

function NavTalent() {
	const talent = [
		'Developers',
		'Designers',
		'Marketing Experts',
		'Product Managers',
		'Project Managers',
		'Finance Experts',
		'Hire a Team',
	];
	return (
		<ul className="bg-white text-gray-500 p-5 lg:p-5 flex gap-4 flex-col lg:absolute ">
			{talent.map((value, index) => (
				<li key={index}>
					<a
						href=""
						className="hover:text-blue-600">
						{value}
					</a>
					{value === 'Finance Experts' && (
						<p className="opacity-50 pt-2.5">Want to Hire a Full Team?</p>
					)}
				</li>
			))}
		</ul>
	);
}

export default NavTalent;
