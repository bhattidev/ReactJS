import {
	Heading,
	HStack,
	Image,
	Text,
	VStack,
	Box,
	Link,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = ({ title, description, imageSrc }) => {
	return (
		<Box
			borderRadius="lg"
			overflow="hidden"
			bg="white"
			boxShadow="md"
			transition="transform 0.2s"
			_hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}>
			{/* Card Image */}
			<Image
				src={imageSrc}
				alt={title}
				width="100%"
				height="200px"
				objectFit="cover"
			/>

			{/* Card Content */}
			<VStack
				p={4}
				align="start"
				spacing={2}>
				<Heading
					as="h3"
					size="md">
					{title}
				</Heading>
				<Text
					fontSize="sm"
					color="gray.600">
					{description}
				</Text>

				{/* Read More Button */}
				<HStack
					spacing={2}
					color="blue.500"
					cursor="pointer">
					<Text fontWeight="bold">Read More</Text>
					<FontAwesomeIcon icon={faArrowRight} />
				</HStack>
			</VStack>
		</Box>
	);
};

export default Card;
