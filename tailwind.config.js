export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00ff99',
        'dark-card': '#111',
        'soft-black': '#0d0d0d',
      },
      boxShadow: {
        'neon': '0 0 10px #00ff99, 0 0 20px #00ff99',
      }
    },
  },
  plugins: [],
}
