import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        footerBackground: "url('/footer-background.jpg')"
      },
      fontFamily: {
        merriweather: ["Merriweather", "serif"]
      },
      colors: {
        primary: "#c48222",
        secondary: "#A76500",
        grey: "#3d3e3e"
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '175ch', // add required value here
          }
        }
      }

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
