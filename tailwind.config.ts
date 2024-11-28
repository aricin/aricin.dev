import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent-primary))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
				wave: {
					'0%': { transform: 'rotate(0deg)' },
					'10%': { transform: 'rotate(14deg)' },
					'20%': { transform: 'rotate(-8deg)' },
					'30%': { transform: 'rotate(14deg)' },
					'40%': { transform: 'rotate(-4deg)' },
					'50%': { transform: 'rotate(10deg)' },
					'60%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(0deg)' },
				},
				blink: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
				'wave': 'wave 1.5s',
				blink: 'blink 1s step-end infinite',
  		}
  	},
		backgroundImage: {
			'grid-neutral-100': 'linear-gradient(to right, #f5f5f5 1px, transparent 1px), linear-gradient(to bottom, #f5f5f5 1px, transparent 1px)',
			'grid-neutral-900': 'linear-gradient(to right, #171717 1px, transparent 1px), linear-gradient(to bottom, #171717 1px, transparent 1px)',
			// 'gradient-pattern': `
			// 	radial-gradient(circle at 20% 20%, rgba(173, 216, 230, 0.1) 0%, transparent 50%),
			// 	radial-gradient(circle at 80% 40%, rgba(135, 206, 235, 0.1) 0%, transparent 50%),
			// 	radial-gradient(circle at 50% 80%, rgba(176, 224, 230, 0.1) 0%, transparent 50%),
			// 	radial-gradient(circle at 70% 60%, rgba(224, 255, 255, 0.1) 0%, transparent 50%)
			// `,
			// 'gradient-pattern': `
			// 	radial-gradient(circle at 10% 20%, rgba(255, 0, 255, 0.2) 0%, transparent 70%),
			// 	radial-gradient(circle at 90% 30%, rgba(32, 142, 255, 0.2) 0%, transparent 70%),
			// 	radial-gradient(circle at 50% 80%, rgba(0, 255, 127, 0.2) 0%, transparent 70%),
			// 	radial-gradient(circle at 70% 60%, rgba(255, 165, 0, 0.2) 0%, transparent 70%)
			// `,
			'gradient-pattern': `
				radial-gradient(circle at 50% 40%, rgba(31, 143, 255, 0.2) 0%, transparent 60%),
				radial-gradient(circle at 50% 60%, rgba(0, 100, 255, 0.2) 0%, transparent 60%),
				radial-gradient(circle at 100% 100%, rgba(75, 0, 130, 0.2) 0%, transparent 60%)
			`,
		},
		// fontFamily: {
		// 	sans: ['var(--font-geist)'],
		// 	mono: ['var(--font-geist-mono)'],
		// },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
