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
				navbar: 'hsl(var(--navbar))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))',
					hovered: 'hsl(var(--card-hovered))'
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
				scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
				fadeInUp: {
          '0%': { transform: 'translatey(-10px)' },
          '100%': { transform: 'translatey(0)' },
        },
				jiggle: {
					'0%, 100%': { transform: 'rotate(0deg)' },
					'10%': { transform: 'rotate(5deg)' },
					'20%': { transform: 'rotate(-5deg)' },
					'30%': { transform: 'rotate(5deg)' },
					'40%': { transform: 'rotate(-5deg)' },
					'50%': { transform: 'rotate(5deg)' },
					'60%': { transform: 'rotate(-5deg)' },
					'70%': { transform: 'rotate(5deg)' },
					'80%': { transform: 'rotate(-5deg)' },
					'90%': { transform: 'rotate(5deg)' },
				},
				'pulse-once': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.01)', opacity: '1' },
        },
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
				'wave': 'wave 1.5s',
				blink: 'blink 1s step-end infinite',
				scroll: 'scroll 20s linear infinite backwards',
				fadeInUp: 'fadeInUp 0.5s ease-in-out',
				jiggle: 'jiggle 0.8s ease-in-out',
				'pulse-once': 'pulse-once 0.3s ease-out forwards',
  		}
  	},
		backgroundImage: {
			'grid-neutral-100': 'linear-gradient(to right, #f5f5f5 1px, transparent 1px), linear-gradient(to bottom, #f5f5f5 1px, transparent 1px)',
			'grid-neutral-900': 'linear-gradient(to right, #171717 1px, transparent 1px), linear-gradient(to bottom, #171717 1px, transparent 1px)',
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
