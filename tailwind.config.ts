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
        mainBg: "var(--main-bg)",
        bgText: "var(--bg-text)",
        mainText: "var(--text-color)",
        accentText: "var(--accent-color)",
        titlebarBg: "var(--titlebar-bg)",
        titlebarHoverBg: "var(--titlebar-hover-bg)",
        sidebarBg: "var(--sidebar-bg)",
        sidebarHoverBg: "var(--sidebar-hover-bg)",
        sidebarBorder: "var(--header-border)",
        headerBg: "var(--header-bg)",
        headerHoverBg: "var(--header-hover-bg)",
        headerBorder: "var(--header-border)",
        headerText: "var(--header-text)",
        headerSearchboxBg: "var(--header-searchbox-bg)",
        explorerBg: "var(--explorer-bg)",
        explorerActiveBg: "var(--explorer-active-bg)",
        explorerHoverBg: "var(--explorer-hover-bg)",
        explorerBorder: "var(--explorer-border)",
        tabBg: "var(--tab-bg)",
        tabActiveBg: "var(--tab-active-bg)",
        tabBorder: "var(--tab-border)",
        tabActiveBorder: "var(--tab-border-active)",
        bottombarBg: "var(--bottombar-bg)",
        bottombarBorder: "var(--bottombar-border)",
        bottombarHoverBg: "var(--bottombar-hover-bg)",
        buttonBg: "var(--button-bg)",
        buttonText: "var(--button-text)",
      },
    },
  },
  plugins: [],
};
export default config;
