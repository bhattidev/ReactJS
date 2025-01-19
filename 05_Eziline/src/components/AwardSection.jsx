import React from 'react';

const AwardSection = () => {
	return (
		<div className="flex justify-end items-center">
			<div className="wpb_single_image wpb_content_element vc_align_left wpb_animate_when_almost_visible wpb_fadeInDown fadeInDown vc_custom_1710320738271 fixed-fullpage-image wpb_start_animation animated">
				<figure className="wpb_wrapper vc_figure">
					<div className="vc_single_image-wrapper vc_box_border_grey">
						<img
							width="150"
							height="150"
							src="https://www.eziline.com/wp-content/uploads/award-pic-1-150x150.png"
							alt="Eziline Software House award"
							title="Eziline Software House has achieved a remarkable milestone by winning the Best Software House in the IT sector award, presented by the President of Pakistan."
							className="vc_single_image-img attachment-thumbnail"
							srcSet="https://www.eziline.com/wp-content/uploads/award-pic-1-150x150.png 150w, https://www.eziline.com/wp-content/uploads/award-pic-1-256x256.png 256w"
							sizes="(max-width: 150px) 100vw, 150px"
						/>
					</div>
				</figure>
			</div>
		</div>
	);
};

export default AwardSection;
