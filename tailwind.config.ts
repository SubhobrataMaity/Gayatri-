import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#F5F7FA',
          bgGradientStart: '#F5F7FA',
          bgGradientEnd: '#E9EEF5',
          card: 'rgba(255, 255, 255, 0.7)',
          cardSolid: '#FFFFFF',
          text: '#1A202C',
          textSecondary: '#64748B',
          accent: '#007BFF',
          accentSecondary: '#00BFA6',
          accentHover: '#0056CC',
          shadow: '#D4D8E0',
          shadowLight: '#FFFFFF',
          border: 'rgba(0, 123, 255, 0.1)',
        },
        dark: {
          bg: '#0D1117',
          card: '#1E1E1E',
          text: '#F9FAFB',
          textSecondary: '#9CA3AF',
          accent: '#00FFFF',
          accentHover: '#00CCCC',
          accentSecondary: '#9D4EDD',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
      letterSpacing: {
        'wider-custom': '0.02em',
      },
      backdropBlur: {
        'glass': '20px',
      },
      boxShadow: {
        'neumorphic-light': '12px 12px 24px #D4D8E0, -12px -12px 24px #FFFFFF',
        'neumorphic-light-hover': '16px 16px 32px #D4D8E0, -16px -16px 32px #FFFFFF',
        'neumorphic-light-inset': 'inset 6px 6px 12px #D4D8E0, inset -6px -6px 12px #FFFFFF',
        'glass-light': '0 8px 32px 0 rgba(0, 123, 255, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'glass-light-hover': '0 12px 48px 0 rgba(0, 123, 255, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08)',
        'glass-dark': '0 8px 32px 0 rgba(0, 255, 255, 0.1)',
        'glow-cyan': '0 0 20px rgba(0, 255, 255, 0.5)',
        'glow-magenta': '0 0 20px rgba(157, 78, 221, 0.5)',
        'button-light': '0 4px 14px 0 rgba(0, 123, 255, 0.25)',
        'button-light-hover': '0 6px 20px 0 rgba(0, 123, 255, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'aurora': 'aurora 60s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 255, 255, 0.6)' },
        },
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
      },
    },
  },
  plugins: [
    function addVariablesForColors({ addBase, theme }: any) {
      // Flatten the color palette manually
      const colors = theme("colors");
      const flatColors: Record<string, string> = {};
      
      const flatten = (obj: any, prefix = '') => {
        Object.keys(obj).forEach(key => {
          const value = obj[key];
          const newKey = prefix ? `${prefix}-${key}` : key;
          
          if (typeof value === 'string') {
            flatColors[newKey] = value;
          } else if (typeof value === 'object' && value !== null) {
            flatten(value, newKey);
          }
        });
      };
      
      flatten(colors);
      
      const newVars = Object.fromEntries(
        Object.entries(flatColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": newVars,
      });
    }
  ],
}

export default config
