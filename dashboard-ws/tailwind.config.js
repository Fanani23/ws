const plugin = require("tailwindcss/plugin");

module.exports = {
	mode: "jit",
	purge: ["./src/**/*.js", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: {
					900: "#000000",
					500: "#333340",
					100: "#0A0A0D",
				},
			},
			fontFamily: {
				"nunito-sans": "Nunito Sans",
				montserrat: "Montserrat",
				"noto-sans": "Noto Sans",
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ["even"],
		},
	},
	plugins: [
		plugin(function ({addUtilities}) {
			addUtilities({
				".scrollbar-hide": {
					/* IE and Edge */
					"-ms-overflow-style": "none",

					/* Firefox */
					"scrollbar-width": "none",

					/* Safari and Chrome */
					"&::-webkit-scrollbar": {
						display: "none",
					},
				},
				".scrollbar": {
					"&::-webkit-scrollbar": {
						width: ".5rem",
					},
					"&::-webkit-scrollbar-track": {
						"background-color": "none",
					},
					"&::-webkit-scrollbar-thumb": {
						"background-color": "#333340",
						"border-radius": "1rem",
					},
				},
			});
		}),
	],
};
