/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        "primary": "#171a20",
        "light-dark": "rgba(0, 0, 0, 0.15)",
        "graysh-light": "#e2e3e3",
        "light-black": "#393c41",
        "light-white": "#eee"
      },
      fontFamily: {
        "gotham-book": "Gotham-Book",
        "gotham-light": "Gotham-Light",
        "gotham-bold": "Gotham-Bold",
        "gotham-medium": "Gotham-Medium"
      },
      backgroundImage: {
        "top-ad": "radial-gradient(54.97% 272.54% at 27.36% -134.72%,rgba(108,148,255,.92) 0,rgba(0,0,0,.92) 100%)",
        "models": "url('../images/models.jpeg')",
        "blue-car": "url('../images/blue car.avif')",
      },
      boxShadow: {
        "bottom-lg": "box-shadow: inset 0 0 500px 8px #000"
      }
    },
  },
  plugins: [],
}

