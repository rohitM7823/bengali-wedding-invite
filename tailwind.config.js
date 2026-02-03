/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Traditional Bengali Wedding Colors - Lal-Sona (লাল-সোনালি)
        'sindoor': {
          DEFAULT: '#C41E3A',
          light: '#D94452',
          dark: '#9B1830',
        },
        'maroon': {
          DEFAULT: '#8B0000',
          deep: '#660000',
          light: '#A52A2A',
        },
        'gold': {
          royal: '#D4AF37',
          champagne: '#F7E7CE',
          metallic: '#C5A059',
          light: '#E5C585',
        },
        'ivory': '#FFFDF7',
        'cream': '#FFF8E7',
      },
      fontFamily: {
        'bengali': ['"Noto Serif Bengali"', 'serif'],
        'script': ['"Great Vibes"', 'cursive'],
        'serif': ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #C5A059, #E5C585, #C5A059)',
        'red-gradient': 'linear-gradient(to bottom, #C41E3A, #8B0000)',
        'red-radial': 'radial-gradient(circle at center, #C41E3A 0%, #660000 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        'shimmer': 'shimmer 4s linear infinite',
        'fall': 'fall 10s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fall: {
          '0%': { transform: 'translateY(-100px) rotate(0deg)', opacity: '0' },
          '20%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
}
