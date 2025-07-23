// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#111112', // deep black
        charcoal: '#18181b',   // charcoal gray
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        montreal: ['Neue Montreal', 'sans-serif'],
      },
      boxShadow: {
        'spotlight': '0 0 80px 20px rgba(255,255,255,0.15)',
      },
      transitionTimingFunction: {
        'cinematic': 'cubic-bezier(0.77,0,0.175,1)',
      },
      blur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}; 