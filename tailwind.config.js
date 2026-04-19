/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0F15",
        cardbg: "rgba(18, 30, 38, 0.6)",
        neon: "#4DF8CD",
        neonDark: "#10B981",
        muted: "#93A5B8",
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'glow-radial': 'radial-gradient(circle at center, rgba(77, 248, 205, 0.15) 0%, rgba(10, 15, 21, 0) 70%)',
      }
    },
  },
  plugins: [],
}
