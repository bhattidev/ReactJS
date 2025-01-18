import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';

const HeaderTop = () => {
	return (
		<div className="flex bg-gray-50 justify-center items-center gap-10 text-gray-600 w-full text-sm">
			<div className="flex justify-center items-center gap-16">
				<div className="flex justify-center items-center gap-2">
					<a href="#">
						<CiLocationOn />
					</a>
					<address>
						Office 304-B Amna Plaza Near Radio Pakistan Peshawar Road Rawalpindi
					</address>
				</div>

				<div className="flex justify-center items-center">
					<BsTelephoneFill />
					<a
						href="tel:+923212225212"
						className="hover:text-blue-500 p-2">
						+923212225212
					</a>
				</div>
				<div className="flex justify-center items-center ">
					<MdOutlineEmail />
					<a
						href="mailto:info@eziline.com"
						className="hover:text-blue-500 p-2">
						info@eziline.com
					</a>
				</div>
			</div>
			<div className="flex justify-center items-center gap-3">
				<a
					href="https://www.facebook.com/ezilinepk"
					target="_blank"
					title="Facebook"
					className="hover:text-blue-700 p-2">
					<FaFacebookF />
				</a>
				<a
					href="https://www.linkedin.com/company/eziline/?originalSubdomain=pk"
					target="_blank"
					title="LinkedIn"
					className="hover:text-blue-700 p-2">
					<FaLinkedinIn />
				</a>

				<a
					href="https://twitter.com/eziline"
					target="_blank"
					title="Twitter"
					className="hover:text-gray-500 p-2">
					<FaXTwitter />
				</a>
				<a
					href="https://www.youtube.com/user/ezilinepk"
					target="_blank"
					title="YouTube"
					className="hover:text-red-600 p-2">
					<FaYoutube />
				</a>
			</div>
		</div>
	);
};

export default HeaderTop;
