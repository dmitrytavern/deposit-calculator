import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'vibrate-1': 'vibrate 25s linear infinite',
        'vibrate-2': 'vibrate 20s linear infinite',
      },
      keyframes: {
        vibrate: {
          '0%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-24%, -24%)' },
          '20%': { transform: 'translate(24%, -24%)' },
          '30%': { transform: 'translate(-24%, 24%)' },
          '40%': { transform: 'translate(24%, 24%)' },
          '50%': { transform: 'translate(24%, -24%)' },
          '60%': { transform: 'translate(-24%, 24%)' },
          '70%': { transform: 'translate(-24%, -24%)' },
          '80%': { transform: 'translate(24%, -24%)' },
          '90%': { transform: 'translate(-24%, -24%)' },
          '100%': { transform: 'translate(0, 0)' },
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
