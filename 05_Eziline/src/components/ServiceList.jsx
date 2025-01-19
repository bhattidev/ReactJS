import React from 'react';

const ServicesList = () => {
	return (
		<div className="">
			<div className="hidden sm:block">
				<div
					className="w-full bg-cover bg-center relative"
					style={{
						backgroundImage:
							'url(https://www.eziline.com/wp-content/uploads/7-15-1.jpg)',
					}}>
					<div className="">
						<div className="flex flex-wrap -mx-4">
							<div className="w-full lg:w-4/12 px-4">
								<div className="py-[20px]">
									<div className="quickfinder-item">
										<div className="quickfinder-item-info-wrapper min-h-[150px]">
											<div className="quickfinder-item-info py-[10px]">
												<h3 className="text-[#ff6601] text-xl font-bold">
													Website Development
												</h3>
												<p className="text-[#f0f0f0]">
													Developing a website is fun and anyone can do this but
													very few understand how to build websites.
												</p>
											</div>
										</div>
										<div className="quickfinder-item-image">
											<img
												className="rounded-full w-20 h-20 object-cover"
												src="https://www.eziline.com/wp-content/uploads/website-development.png"
												alt="website development"
											/>
										</div>
									</div>
								</div>

								<div className="py-[20px]">
									<div className="quickfinder-item">
										<div className="quickfinder-item-info-wrapper min-h-[150px]">
											<div className="quickfinder-item-info py-[10px]">
												<h3 className="text-white text-xl font-bold">
													Web App Development
												</h3>
												<p className="text-[#f0f0f0]">
													Web applications have been changing the ways business
													operates across the globe.
												</p>
											</div>
										</div>
										<div className="quickfinder-item-image">
											<img
												className="rounded-full w-20 h-20 object-cover"
												src="https://www.eziline.com/wp-content/uploads/web-app.png"
												alt="web app"
											/>
										</div>
									</div>
								</div>

								<div className="py-[20px]">
									<div className="quickfinder-item">
										<div className="quickfinder-item-info-wrapper min-h-[150px]">
											<div className="quickfinder-item-info py-[10px]">
												<h3 className="text-white text-xl font-bold">
													Mobile App Development
												</h3>
												<p className="text-[#f0f0f0]">
													In this modern era, businesses should not ignore
													having a business mobile app.
												</p>
											</div>
										</div>
										<div className="quickfinder-item-image">
											<img
												className="rounded-full w-20 h-20 object-cover"
												src="https://www.eziline.com/wp-content/uploads/mobile-development.png"
												alt="mobile development"
											/>
										</div>
									</div>
								</div>
							</div>

							{/* Column for additional content */}
							<div className="w-full lg:w-4/12 px-4">
								<div className="gem-image">
									<img
										className="w-full object-cover"
										src="https://www.eziline.com/wp-content/uploads/mobile-bg-2.png"
										alt="Mobile Background"
									/>
								</div>
								<div className="mt-4">
									<img
										className="w-full"
										src="https://www.eziline.com/wp-content/uploads/eziline-device.png"
										alt="EziLine Device"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesList;
