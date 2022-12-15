/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html","./mobileapp.html","./appliances.html","./partners.html","./recipes.html"],
  theme: {
    screens: {
      xs: '420px',
      s: '640px',
      sm: '706px',
      md: '768px',
      lg: '1024px',
      xlg: '1162px',
      '2xlg': '1230px',
      xl: '1280px',
      '2xl': '1536px',
    },

    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125em',
      1: '0.25em',
      1.5: '0.375em',
      2: '0.5em',
      2.5: '0.625em',
      3: '0.75em',
      3.5: '0.875em',
      4: '1em',
      5: '1.25em',
      6: '1.5em',
      7: '1.75em',
      8: '2em',
      9: '2.25em',
      10: '2.5em',
      11: '2.75em',
      12: '3em',
      14: '3.5em',
      16: '4em',
      20: '5em',
      24: '6em',
      28: '7em',
      32: '8em',
      36: '9em',
      40: '10em',
      44: '11em',
      48: '12em',
      52: '13em',
      56: '14em',
      60: '15em',
      64: '16em',
      72: '18em',
      80: '20em',
      96: '24em',
    },

    extend: {
      backgroundImage:{
        'cake': 'url("./images/recipe2.jpg")',
        'soup': 'url("./images/recipe.jpg")',
        'peas': 'url("./images/recipe1.png")',
        'rice': 'url("./images/recipe4.jpg")',
        'shrooms': 'url("./images/recipe5.jpg")',
        'cereal': 'url("./images/recipe3.jpg")',
      },

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
      },
     fontSize: {
        '10xl': ['8.75em', { lineHeight: '1' }],
      },

      borderRadius: {
        '4xl': "2rem",
        '5xl': "2.5rem",
        '6xl': "3rem",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
