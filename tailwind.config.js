/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"; // Import fungsi

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#556AEB",
        hover: "#EBEFFF",
        "neutral-0": "#FFFFFF",
        "neutral-500": "#ADB5BD",
        "neutral-600": "#6C757D",
        "neutral-800": "#343A40",
        "purple-100": "#EBEFFF",
      },
      boxShadow: {
        1: "0px 2px 2px 0px rgba(33, 37, 41, 0.06), 0px 0px 1px 0px rgba(33, 37, 41, 0.08)",
        2: "0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);",
      },
    },
  },
  plugins: [],
});
