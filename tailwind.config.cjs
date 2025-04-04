module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', // Asegúrate de incluir todos los archivos relevantes
  ],
  theme: {
    extend: {
      translate: {
        '-full': '-100%',
      },
    },
  },
  plugins: [],
};