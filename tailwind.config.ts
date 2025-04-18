import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                quantum: {
                    DEFAULT: '#9b87f5',
                    dark: '#7E69AB',
                    darker: '#6E59A5',
                    bg: '#1A1F2C',
                    glow: '#00ffe1',
                    blue: '#005eff',
                },
			},
			fontFamily: {
                orbitron: ['Orbitron', 'sans-serif'],
                spaceGrotesk: ['Space Grotesk', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
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
                'fade-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0)'
                    },
                    '50%': {
                        transform: 'translateY(-5px)'
                    }
                },
                'glow': {
                    '0%, 100%': {
                        boxShadow: '0 0 5px rgba(0, 255, 225, 0.5)'
                    },
                    '50%': {
                        boxShadow: '0 0 20px rgba(0, 255, 225, 0.8)'
                    }
                },
                'pulse': {
                    '0%, 100%': {
                        opacity: '1',
                        transform: 'scale(1)'
                    },
                    '50%': {
                        opacity: '0.8',
                        transform: 'scale(1.03)'
                    }
                },
                'rotate-slow': {
                    '0%': {
                        transform: 'rotate(0deg)'
                    },
                    '100%': {
                        transform: 'rotate(360deg)'
                    }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.5s ease-out',
                'fade-in-slow': 'fade-in 1s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite',
                'pulse': 'pulse 3s ease-in-out infinite',
                'rotate-slow': 'rotate-slow 15s linear infinite'
			},
            backgroundImage: {
                'gradient-quantum': 'linear-gradient(135deg, #00ffe1 0%, #9b87f5 50%, #1A1F2C 100%)',
                'gradient-header': 'linear-gradient(to right, rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.7))',
                'gradient-button': 'linear-gradient(90deg, #00ffe1 0%, #005eff 100%)',
                'gradient-card': 'linear-gradient(135deg, rgba(26, 31, 44, 0.8) 0%, rgba(155, 135, 245, 0.1) 100%)',
                'gradient-footer': 'linear-gradient(180deg, #1A1F2C 0%, #0F131B 100%)',
            },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
