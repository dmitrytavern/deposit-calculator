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
        'vibrate-1': 'vibrate 15s linear infinite',
        'vibrate-2': 'vibrate 18s linear infinite',
      },
      keyframes: {
        vibrate: {
          '0%, 100%': { transform: 'translate(0)' },
          '10%': { transform: 'translate(-20%, -20%)' },
          '20%': { transform: 'translate(20%, -20%)' },
          '30%': { transform: 'translate(-20%, 20%)' },
          '40%': { transform: 'translate(20%, 20%)' },
          '50%': { transform: 'translate(-20%, -20%)' },
          '60%': { transform: 'translate(20%, -20%)' },
          '70%': { transform: 'translate(-20%, 20%)' },
          '80%': { transform: 'translate(-20%, -20%)' },
          '90%': { transform: 'translate(20%, -20%)' },
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
