module.exports = {
	mode: 'jit',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			animation: {
				spinnerRotate:
					'spinnerRotate 2s linear 0s infinite normal none running',
				spinnerDash:
					'spinnerDash 1.5s ease-in-out 0s infinite normal none running',
				spinnerStroke:
					'spinnerStroke 0.4s cubic-bezier(0.65, 0, 0.45, 1) 0.15s 1 normal forwards running',
			},
			keyframes: {
				spinnerRotate: {
					'100%': {
						transform: 'rotate(360deg)',
					},
				},
				spinnerDash: {
					'0%': {
						['stroke-dasharray']: '1px, 200px',
						['stroke-dashoffset']: '0px',
					},
					'50%': {
						['stroke-dasharray']: '89px, 200px',
						['stroke-dashoffset']: '-35px',
					},
					'100%': {
						['stroke-dasharray']: '89px, 200px',
						['stroke-dashoffset']: '-124px',
					},
				},
				spinnerStroke: {
					'0%': {
						['stroke-dashoffset']: '3rem',
					},
					'100%': {
						['stroke-dashoffset']: '0px',
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
