module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    colors: {
      customBlue: 'rgb(63, 81, 181)',
    },
    border: {
      customBlue: 'rgb(63, 81, 181)',
    }
  }
};