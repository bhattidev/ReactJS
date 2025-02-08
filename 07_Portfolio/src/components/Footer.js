import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const Footer = () => {
	return (
		<Box
			as="footer"
			backgroundColor="#18181b"
			py={4}
			textAlign="center">
			<Flex
				mx="auto" // Centers the content horizontally
				px={{ base: 4, md: 12 }} // Responsive padding
				color="white"
				justifyContent="center"
				alignItems="center"
				maxWidth="1024px"
				height={16}>
				<Text fontSize="sm">Imran • © {new Date().getFullYear()}</Text>
			</Flex>
		</Box>
	);
};

export default Footer;
