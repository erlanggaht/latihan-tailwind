module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage :{
         'hero-pattern': "url('./public/erlangga.png)"
        },
        backgroundSize : {
          '70vw' : '70vw'
        },
      },
    },
    plugins: [],
  }