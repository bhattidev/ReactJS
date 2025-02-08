import React from 'react';
import { useFormik } from 'formik';
import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Select,
	Textarea,
	VStack,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import FullScreenSection from './FullScreenSection';
import useSubmit from '../hooks/useSubmit';
import { useAlertContext } from '../context/alertContext';

const LandingSection = () => {
	const { isLoading, response, submit } = useSubmit();
	const { onOpen } = useAlertContext();

	// ✅ Formik with validation schema
	const formik = useFormik({
		initialValues: {
			firstName: '',
			email: '',
			type: 'hireMe',
			comment: '',
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.min(2, 'Must be at least 2 characters')
				.required('Name is required'),
			email: Yup.string()
				.email('Invalid email address')
				.required('Email is required'),
			type: Yup.string().required('Please select a type'),
			comment: Yup.string()
				.min(10, 'Message must be at least 10 characters')
				.required('Message is required'),
		}),
		onSubmit: async (values, actions) => {
			await submit(values); // Send data
			onOpen(response.type, response.message); // Show alert
			actions.resetForm(); // Clear form after submission
		},
	});

	return (
		<FullScreenSection
			isDarkBackground
			backgroundColor="#512DA8"
			py={16}
			spacing={8}>
			<VStack
				w="1024px"
				p={8}
				alignItems="flex-start">
				<Heading
					as="h1"
					id="contactme-section">
					Contact Me
				</Heading>
				<Box
					p={6}
					rounded="md"
					w="100%">
					<form onSubmit={formik.handleSubmit}>
						<VStack spacing={4}>
							<FormControl
								isInvalid={formik.touched.firstName && formik.errors.firstName}>
								<FormLabel htmlFor="firstName">Name</FormLabel>
								<Input
									id="firstName"
									name="firstName"
									value={formik.values.firstName}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
								<FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
							</FormControl>

							<FormControl
								isInvalid={formik.touched.email && formik.errors.email}>
								<FormLabel htmlFor="email">Email Address</FormLabel>
								<Input
									id="email"
									name="email"
									type="email"
									value={formik.values.email}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
								<FormErrorMessage>{formik.errors.email}</FormErrorMessage>
							</FormControl>

							<FormControl
								isInvalid={formik.touched.type && formik.errors.type}>
								<FormLabel htmlFor="type">Type of enquiry</FormLabel>
								<Select
									id="type"
									name="type"
									value={formik.values.type}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}>
									<option value="hireMe">Freelance project proposal</option>
									<option value="openSource">
										Open source consultancy session
									</option>
									<option value="other">Other</option>
								</Select>
								<FormErrorMessage>{formik.errors.type}</FormErrorMessage>
							</FormControl>

							<FormControl
								isInvalid={formik.touched.comment && formik.errors.comment}>
								<FormLabel htmlFor="comment">Your message</FormLabel>
								<Textarea
									id="comment"
									name="comment"
									height={250}
									value={formik.values.comment}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
								<FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
							</FormControl>

							<Button
								type="submit"
								colorScheme="purple"
								width="full"
								isLoading={isLoading}>
								Submit
							</Button>
						</VStack>
					</form>
				</Box>
			</VStack>
		</FullScreenSection>
	);
};

export default LandingSection;
