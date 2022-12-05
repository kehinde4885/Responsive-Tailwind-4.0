/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html"],
  theme: {
    fontSize: {
      xs: ['0.75em', { lineHeight: '1em' }],
      sm: ['0.875em', { lineHeight: '1.25em' }],
      base: ['1em', { lineHeight: '1.5em' }],
      lg: ['1.125em', { lineHeight: '1.75em' }],
      xl: ['1.25em', { lineHeight: '1.75em' }],
      '2xl': ['1.5em', { lineHeight: '2em' }],
      '3xl': ['1.875em', { lineHeight: '2.25em' }],
      '4xl': ['2.25em', { lineHeight: '2.5em' }],
      '5xl': ['3em', { lineHeight: '1' }],
      '6xl': ['3.75em', { lineHeight: '1' }],
      '7xl': ['4.5em', { lineHeight: '1' }],
      '8xl': ['6em', { lineHeight: '1' }],
      '9xl': ['8em', { lineHeight: '1' }],
    },

    extend: {
      fontFamily: {
        dmsans: "DM Sans",
        walsheim: "GT Walsheim",
        founders : "Founders"
      },

      colors: {
        coal : "rgb(31,29,26)",
        metal : "rgb(143,143,143)",
        squash : "rgb(254,210,67)",
        "squash-tint" : "rgb(255,237,180)",
        "squash-shade" : "rgb(80,74,36)",
        carrot : "rgb(255,127,17)",
        "carrot-shade" : "rgb(89,45,5)",
        "carrot-tint" : "rgb(253,201,156)",
        rocket : "rgb(68,175,105)",
        "rocket-tint" : "rgb(186,227,200)",
        "rocket-shade" : "rgb(38,56,43)",
        tomato : "rgb(255,69,69)",
        "tomato-shade" : "rgb(71,16,16)",
        "tomato-tint" : "rgb(249,201,200)",
        crema : "rgb(252,240,213)",
        "crema-tint" : "rgb(254,249,238)",
        aubergine : "rgb(117,8,58)",
        "aubergine-shade" : "rgb(63,16,38)",
        "aubergine-tint" : "rgb(246,183,209)",
      }
    },
  },
  plugins: [],
}
