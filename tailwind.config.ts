import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        lora: ["LORA-REGULAR"],
        montserrat: ["MONTSERRAT-REGULAR"],
        minion_pro: ["MINION-PRO-REGULAR"],
        newsreader_light: ["NEWSREADER-LIGHT"]
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          200: "rgb(var(--tw-clr-primary-200) / <alpha-value>)",
          300: "rgb(var(--tw-clr-primary-300) / <alpha-value>)",
          400: "rgb(var(--tw-clr-primary-400) / <alpha-value>)",
          500: "rgb(var(--tw-clr-primary-500) / <alpha-value>)",
        },
        dark: "#0e1111",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  
           ],
};
export default config;
