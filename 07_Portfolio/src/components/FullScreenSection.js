import * as React from 'react';
import { VStack } from '@chakra-ui/react';

/**
 * A reusable full-screen section component.
 * Supports dark and light backgrounds using the `isDarkBackground` prop.
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
	return (
		<VStack
			minHeight="100vh" // Ensures the section fills the full screen height
			width="100%"
			alignItems="center"
			justifyContent="center"
			backgroundColor={boxProps.backgroundColor}
			color={isDarkBackground ? 'white' : 'black'}
			{...boxProps} // Spread the remaining props for better flexibility
		>
			<VStack
				maxWidth="1280px"
				width="100%"
				p={8}>
				{children}
			</VStack>
		</VStack>
	);
};

export default FullScreenSection;
