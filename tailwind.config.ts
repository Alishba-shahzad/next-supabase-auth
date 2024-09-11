/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        '50px': '50px',
      },
      boxShadow: {
        '3xl': '0px 10px 34px -15px rgba(0, 0, 0, 0.24)',
      },
      height: {
        48: "48px",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        borderColor: "#fff",
        textColor: '#f75959',
        accentColor: '#f15584',
        linkColor: 'gray',
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
      backgroundImage: {
        customFormBg: "var(--custom-form-ng)",
      }
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '50px',
      'large': '12px',
      'left': '12px 0 0 12px',
      'right': '0 12px 12px 0',
      'top': '12px 12px 0 0',
      'bottom': '0 0 12px 12px',
    },
  },
  plugins: [],
};
