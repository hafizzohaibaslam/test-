/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      "2xl": { max: "1536px" },
      // => @media (max-width: 1536px) { ... }
      xl: { max: "1200px" },
      // => @media (max-width: 1200px) { ... }
      lg: { max: "960px" },
      // => @media (max-width: 960px) { ... }
      md: { max: "748px" },
      // => @media (max-width: 748px) { ... }
      sm: { max: "640px" },
      // => @media (max-width: 640px) { ... }
      xs: { max: "480px" },
      // => @media (max-width: 640px) { ... }
    },
    extend: {
      colors: {
        themeBlue: "rgb(20, 43, 111)",
        themeYellow: "rgb(255, 214, 0)",
        themeGray: "rgb(242, 241, 245)",
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
        secondary: ["Times New Roman", "serif"],
      },
      fontSize: {
        h2: "2.5rem",
        "1.5xl": "1.375rem",
        "2.5xl": "1.625rem",
      },
      width: {
        calcLargest: "calc(100vw - 80px)",
      },
      height: {
        calcLargest: "calc((100vw - 80px) * 0.39)",
        calcLarge: "calc((100vw - 48px) * 0.52778)",
        calcMedium: "calc(100vw - 16px)",
      },
      backgroundImage: {
        hero: "url('/src/assets/hero.webp')",
        heroMobile: "url('/src/assets/heroMobile.webp')",
        heroApproach: "url('/src/assets/heroApproach.webp')",
        heroApproachMobile: "url('/src/assets/heroApproachMobile.webp')",
        loginSignupBg: "url('/src/assets/loginSignup.webp')",
      },
      lineHeight: {
        h2: "3.375rem",
      },
      transitionProperty: {
        transform: "transform",
        "grid-rows": "grid-template-rows",
        bottom: "bottom",
        right: "right",
        left: "left",
      },
    },
  },
};
