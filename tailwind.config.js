/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
    	"./src/**/*.{vue,js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js"
	],
	theme: {
		container: {
			center: true,
		},
		colors: {
			bvprimary: '#eb2614',
			'bvprimary-50': '#F5FAFF',
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
