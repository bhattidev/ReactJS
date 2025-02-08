// tailwind.config.js
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}', // Adjust based on your project structure
	],
	theme: {
		extend: {
			screens: {
				custom: { min: '1192px' },
			},
		},
	},
	plugins: [],
};
