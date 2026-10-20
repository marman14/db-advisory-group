/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f5fa',
          100: '#e1ecf5',
          200: '#c3d8eb',
          300: '#95bedc',
          400: '#5e9dc9',
          500: '#3980b3',
          600: '#286695',
          700: '#225279',
          800: '#1e4564',
          900: '#0A192F',
          950: '#060F1E',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'premium': '0 10px 30px -10px rgba(10, 25, 47, 0.08), 0 4px 6px -2px rgba(10, 25, 47, 0.03)',
        'floating': '0 20px 40px -15px rgba(13, 148, 136, 0.15), 0 0 25px -5px rgba(10, 25, 47, 0.05)',
      }
    },
  },
  plugins: [],
}
