module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  prefix: "tw-",
  theme: {
    extend: {
      keyframes: {
        //tailwind - fade-in-down custom

        "fade-in-down-fast-modal": {
          "0%": {
            opacity: "0",
            transform: "translate(-50%,-54%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(-50%,-50%)",
          },
        },
        "fade-in-down-fast-dropdown": {
          "0%": {
            opacity: "0",
            transform: "translate(0%, -10%)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(0%,0%)",
          },
        },
        "ani-setup": {
          "0%": {
            opacity: "1",
            transform: "translateY(0%)",
          },
          "50%": {
            opacity: "1",
            transform: "translateY(-5%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0%)",
          },
        },
        "up-card": {
          "0%": {
            opacity: "1",
            transform: "translate(0%, 0%)",
          },
          "50%": {
            opacity: "1",
            transform: "translate(0%,-2%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0%)",
          },
        },
      },
      animation: {
        "ani-setup": "ani-setup 0.3s ease-out",
        "fade-in-down-fast-modal": "fade-in-down-fast-modal 0.5s ease-out",
        "up-card": "up-card 0.5s ease-out",
        "fade-in-down-fast-dropdown":
          "fade-in-down-fast-dropdown 0.4s ease-out",
      },
    },
  },
  plugins: [],
};
