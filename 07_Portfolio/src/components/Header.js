import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faLinkedin,
	faMedium,
	faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { Box, HStack, Link } from '@chakra-ui/react';

const socials = [
	{
		icon: faEnvelope,
		url: 'mailto:imranbhattidev@gmail.com',
	},
	{
		icon: faGithub,
		url: 'https://github.com/bhattidev',
	},
	{
		icon: faLinkedin,
		url: 'https://www.linkedin.com/in/bhattidev/',
	},
	{
		icon: faMedium,
		url: 'https://medium.com',
	},
	{
		icon: faStackOverflow,
		url: 'https://stackoverflow.com',
	},
];

const Header = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	const handleScroll = () => {
		const currentScrollPos = window.scrollY;
		setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
		setPrevScrollPos(currentScrollPos);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos]);

	const handleClick = (anchor) => () => {
		const id = `${anchor}-section`;
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	};

	return (
		<Box
			position="fixed"
			top={0}
			left={0}
			right={0}
			transform={visible ? 'translateY(0)' : 'translateY(-200px)'}
			transition="transform 0.3s ease-in-out"
			backgroundColor="#18181b"
			boxShadow="md"
			zIndex={1000}>
			<Box
				color="white"
				maxWidth="1280px"
				margin="0 auto">
				<HStack
					px={16}
					py={4}
					justifyContent="space-between"
					alignItems="center">
					{/* Social Media Links */}
					<nav>
						<HStack spacing={4}>
							{socials.map((social, index) => (
								<Link
									key={index}
									href={social.url}
									target="_blank"
									rel="noopener noreferrer">
									<FontAwesomeIcon
										icon={social.icon}
										size="2x"
									/>
								</Link>
							))}
						</HStack>
					</nav>

					{/* Internal Navigation Links */}
					<nav>
						<HStack spacing={8}>
							<Link
								href="#projects-section"
								onClick={handleClick('projects')}
								fontSize="lg"
								_hover={{ color: 'gray.400' }}>
								Projects
							</Link>
							<Link
								href="#contactme-section"
								onClick={handleClick('contactme')}
								fontSize="lg"
								_hover={{ color: 'gray.400' }}>
								Contact Me
							</Link>
						</HStack>
					</nav>
				</HStack>
			</Box>
		</Box>
	);
};

export default Header;
