/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      'orange': '#eb6a37',
      
      'light-orange': '#fdf0eb',

      'white': '#ffffff',

      'black':'#282828',

      'gray': '#c2c2c2',

      'light-gray': '#f2f2f2',

      'dark-gray': '#808080',
    },
    fontFamily: {
      sans: ['Noto Sans Thai', 'sans-serif'],
    },
    fontSize: {
      'xxs':'10px',

      'xs':'12px',

      's': '16px',

      'm': '20px',

      'l': '24px',

      'xl': '32px',

      '2xl': '40px',
    },
    extend: {
      spacing: {
        'xxs': '4px',

        'xs': '8px',

        's': '12px',

        'm': '16px',

        'l': '20px',

        'xl': '24px',

        '2xl': '28px',

        '3xl': '32px',

        '4xl': '36px',

        '5xl': '64px',

        '6xl': '96px',

        '7xl': '120px',

        '8xl': '128px',
      },
      borderRadius: {
        '8': '8px',

        '16': '16px',
      },
      borderWidth: {
        '0.5': '0.5px',

        '1': '1px',

        '1.5': '1.5px'
      },
    },
    maxWidth: {
      'container-imac':'3456px',

      'container-desktop':'1152px',

      'container-laptop':'956px',

      'container-tablet':'735px',

      'container-mobile':'361px',
    },
    screens: {
      'mobile': '375px',

      'tablet': '768px',

      'laptop': '1024px',

      'desktop': '1440px',

      'imac': '4480px',
    }
  },
  plugins: [],
}
