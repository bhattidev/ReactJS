import React from 'react';
import { Avatar, Heading, VStack, Text } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import imran from '../images/imran.jpeg';

const greeting = 'Hello, I am Imran!';
const bio1 = 'A frontend developer';
const bio2 = 'specialized in React';

const LandingSection = () => (
	<FullScreenSection
		justifyContent="center"
		alignItems="center"
		isDarkBackground
		backgroundColor="#2A4365">
		<VStack spacing={4}>
			{/* Avatar */}
			<Avatar
				size="2xl"
				name="Imran"
				src={imran}
			/>

			{/* Heading */}
			<Heading
				as="h1"
				size="xl"
				color="white">
				{greeting}
			</Heading>

			{/* Bio */}
			<Text
				fontSize="lg"
				color="gray.300">
				{bio1}
			</Text>
			<Text
				fontSize="lg"
				color="gray.300">
				{bio2}
			</Text>
		</VStack>
	</FullScreenSection>
);

export default LandingSection;
