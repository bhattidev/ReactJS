import React from 'react';

function NavLinks() {
	return (
		<ul className="flex justify-center items-center gap-4 -ml-1">
			<li>
				<a
					href=""
					className="py-4 hover:border-b-2 hover:border-blue-800">
					Top 3%
				</a>
			</li>
			<li>
				<div className="py-4 border-b-2 hover:border-blue-800">Hire Talent</div>
			</li>
			<li>
				<a
					href=""
					className="py-4 hover:border-b-2 hover:border-blue-800">
					Consulting & Services
				</a>
			</li>
			<li>
				<a
					href=""
					className="py-4 hover:border-b-2 hover:border-blue-800">
					Clients
				</a>
			</li>
			<li>
				<a
					href=""
					className="py-4 hover:border-b-2 hover:border-blue-800">
					Blog
				</a>
			</li>
			<li>
				<a
					href=""
					className="py-4 hover:border-b-2 hover:border-blue-800">
					About Us
				</a>
			</li>
		</ul>
	);
}

export default NavLinks;
