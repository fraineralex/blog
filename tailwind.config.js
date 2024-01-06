const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./mdx-components.tsx",
		"content/**/*.mdx",
	],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
					},
				},
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:first-of-type::after": { content: "none" },
					},
				},
			},
			fontFamily: {
				londrina: ["var(--font-londrina)", '"Londrina Solid"', ...defaultTheme.fontFamily.sans],
				sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
				calsans: ["var(--font-calsans)", ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				"fade-in": "fade-in 3s ease-in-out forwards",
				title: "title 3s ease-out forwards",
				"fade-left": "fade-left 3s ease-in-out forwards",
				"fade-right": "fade-right 3s ease-in-out forwards",
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"75%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"fade-left": {
					"0%": {
						transform: "translateX(100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				"fade-right": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				title: {
					"0%": {
						"line-height": "0%",
						"letter-spacing": "0.25em",
						opacity: "0",
					},
					"25%": {
						"line-height": "0%",
						opacity: "0%",
					},
					"80%": {
						opacity: "100%",
					},

					"100%": {
						"line-height": "100%",
						opacity: "100%",
					},
				},
			},
			borderRadius: {
        xl: '.75rem'
      },
      colors: {
        black: '#12151E',
        'hot-pink': '#fd2d78'
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem'
      }
		},
		rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '-10': '-10deg',
      '-9': '-9deg',
      '-8': '-8deg',
      '-7': '-7deg',
      '-6': '-6deg',
      '-5': '-5deg',
      '-4': '-4deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      0: '0',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      4: '4deg',
      5: '5deg',
      6: '6deg',
      7: '7deg',
      8: '8deg',
      9: '9deg',
      10: '10deg',
      45: '45deg',
      90: '90deg',
      180: '180deg'
    },
    spacing: {
      px: '1px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      22: '5.5rem',
      24: '6rem',
      26: '6.5rem',
      28: '7rem',
      30: '7.5rem',
      32: '8rem',
      34: '8.5rem',
      36: '9rem',
      38: '9.5rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      68: '17rem',
      72: '18rem',
      76: '19rem',
      80: '20rem',
      88: '22rem',
      96: '24rem',
      104: '26rem',
      110: '28rem',
      118: '30rem',
      126: '32rem',
      132: '34rem',
      140: '36rem'
    },
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwindcss-debug-screens"),
	],
};
