/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.{html,js}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '',
				screens: {
					sm: '640px',
					md: '768px',
					lg: '1024px',
					xl: '1110px',
					'2xl': '1440px',
				},
			},
			colors: {
				primary: '#333333',
				secondary: '#78c0de'
			},
		},
	},
	plugins: [],
}

