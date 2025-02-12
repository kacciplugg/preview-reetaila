/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{html,ts,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#1a2342",
        secondary: "#2FAD66",
        tertiary: "#F0F0F0",
        default: "#4A4A4A",
      },
      boxShadow: {
        dropShadow: "0 4px 75px 0 rgba(0, 0, 0, 0.25)",
      },
      spacing: {
        "3px": "3px",
        "30px": "30px",
        "600px": "600px",
      },
      width: {
        "360px": "360px",
      },
      height: {
        // Add your custom heights here
      },
      backgroundColor: {
        // Add your custom background colors here
      },
      backgroundImage: {
        "hero-pattern": "url('assets/hero-pattern.svg')",
        "hero-pattern-mobile": "url('assets/heroBackgroundmobile.png')",
        "hero-cloth": "url('assets/lady_selecting_cloth.jpeg')",
        "lady-phone": "url('assets/lady_pressing_phone.jpeg')",
        "hero-warehouse": "url('assets/warehouse.jpeg')",
        "frame-1": "url('assets/frame_1.png')",
        "lady-glasses": "url('assets/lady_in_glasses.jpeg')",
        "hero-cover": "url('assets/hero_comingsoon.jpg')",
        "product-image": "url('assets/productImage1.png')",
        "testify-main": "url('assets/testifier.png')",
        "testifier-md": "url('assets/testifier-desktop.png')",
        "feature-card": "url('assets/featureimage.png')",
        "fashion-main":
          "url('assets/medium-shot-man-repairing-fashion-goods 1.png')",
        "why-us01": "url('assets/featurecard01.png')",
        "why-us02": "url('assets/featurecard02.png')",
        "why-us03": "url('assets/featurecard03.png')",
        "why-us04": "url('assets/featurecard04.png')",
        "testifier-image1": "url('assets/testifier-image1.png')",
        "testifier-image2": "url('assets/testifier-image2.jpg')",
        "testifier-image3": "url('assets/testifier-image3.jpg')",
      },
    },
  },
  variants: {
    extend: {
      width: ["responsive", "hover", "focus"],
      height: ["responsive", "hover", "focus"],
      backgroundColor: ["responsive", "hover", "focus", "active"],
    },
  },
  plugins: [],
};
