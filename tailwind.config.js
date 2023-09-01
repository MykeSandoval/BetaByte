/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        "primary": "#bf930d",
        "background": "#ffc600",
        "extra": "#8f6e0a"
      },
      backgroundImage: {
        "login_img": "url('/img/login_bg.jpeg')"
      }
    },
  },
  plugins: [],
}

