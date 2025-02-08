import { useState } from 'react';

// Simulate a delay in response
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that simulates submitting a form with a random success or failure.
 * It returns a loading state, response message, and a function to trigger the submission.
 */
const useSubmit = () => {
	const [isLoading, setLoading] = useState(false);
	const [response, setResponse] = useState({ type: '', message: '' });

	// Function to simulate form submission
	const submit = async (url, data) => {
		const random = Math.random(); // Simulate random success/failure
		setLoading(true);

		try {
			await wait(2000); // Simulate network delay
			if (random < 0.5) {
				throw new Error('Simulated failure'); // Simulate failure
			}

			// Simulated success response
			setResponse({
				type: 'success',
				message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
			});
		} catch (error) {
			// Handle simulated error
			setResponse({
				type: 'error',
				message: 'Something went wrong, please try again later!',
			});
		} finally {
			setLoading(false); // Set loading to false once completed
		}
	};

	return { isLoading, response, submit };
};

export default useSubmit;
