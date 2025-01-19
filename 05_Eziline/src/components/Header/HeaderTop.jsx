import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';

const HeaderTop = () => {
	return (
		<div className="bg-gray-50 text-gray-600 text-sm w-full hidden md:block">
			<div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 max-w-7xl mx-auto">
				{/* Contact Info */}
				<div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 text-center md:text-left">
					<div className="flex items-center gap-2">
						<a
							href="#"
							className="text-xl">
							<CiLocationOn />
						</a>
						<address className="not-italic">
							Office 304-B Amna Plaza Near Radio Pakistan Peshawar Road
							Rawalpindi
						</address>
					</div>

					<div className="flex items-center gap-2">
						<BsTelephoneFill className="text-lg" />
						<a
							href="tel:+923212225212"
							className="hover:text-blue-500">
							+923212225212
						</a>
					</div>

					<div className="flex items-center gap-2">
						<MdOutlineEmail className="text-lg" />
						<a
							href="mailto:info@eziline.com"
							className="hover:text-blue-500">
							info@eziline.com
						</a>
					</div>
				</div>

				{/* Social Links */}
				<div className="flex justify-center items-center gap-3">
					<a
						href="https://www.facebook.com/ezilinepk"
						target="_blank"
						title="Facebook"
						className="hover:text-blue-700 text-xl">
						<FaFacebookF />
					</a>
					<a
						href="https://www.linkedin.com/company/eziline/?originalSubdomain=pk"
						target="_blank"
						title="LinkedIn"
						className="hover:text-blue-700 text-xl">
						<FaLinkedinIn />
					</a>
					<a
						href="https://twitter.com/eziline"
						target="_blank"
						title="Twitter"
						className="hover:text-gray-500 text-xl">
						<FaXTwitter />
					</a>
					<a
						href="https://www.youtube.com/user/ezilinepk"
						target="_blank"
						title="YouTube"
						className="hover:text-red-600 text-xl">
						<FaYoutube />
					</a>
				</div>
			</div>
		</div>
	);
};

export default HeaderTop;
