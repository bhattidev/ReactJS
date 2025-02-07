import React, { useState } from 'react';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [success, setSuccess] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSuccess(true);
		setFormData({ name: '', email: '', message: '' });
		setTimeout(() => setSuccess(false), 3000);
	};

	return (
		<section
			id="contact"
			className="min-h-screen bg-gray-100 p-8">
			<h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
				Contact Me
			</h2>
			<form
				onSubmit={handleSubmit}
				className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					placeholder="Your Name"
					className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
					required
				/>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="Your Email"
					className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
					required
				/>
				<textarea
					name="message"
					value={formData.message}
					onChange={handleChange}
					placeholder="Your Message"
					className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
					rows="4"
					required></textarea>
				<button
					type="submit"
					className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition">
					Send Message
				</button>
			</form>
			{success && (
				<p className="text-center mt-4 text-green-500">
					Your message has been sent successfully!
				</p>
			)}
		</section>
	);
};

export default Contact;
