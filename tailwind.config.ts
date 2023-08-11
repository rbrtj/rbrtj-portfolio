import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        activityBar: "#171d27",
        activityBarBorder: "#12161d",
        backgroundSidebar: "#1f2428",
        text: "#d4d4d4",
        backgroundTitlebar: "#1f2428",
        activityBarSearchBackground: "#1b222e",
        activityBarSearchBorder: "#262e3e",
        activityBarSearchText: "#4a5670",
        sidebarBackground: "#171d27",
        icon: "#343d50",
      },
    },
  },
  plugins: [],
};
export default config;
