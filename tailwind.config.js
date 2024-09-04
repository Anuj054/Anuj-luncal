/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-light-gray": "#616161D1",
        "custom-dark-gray": "#363C43",
        "custom-gray-three":"#969696",
        "custom-gray-four":"#28292F",
        "custom-gray-five": " #969696",
        "custom-black-one":"#171717",
        "custom-black-two":"#101213"
      }
    },
  },
  plugins: [],
}

