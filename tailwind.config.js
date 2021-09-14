module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateColumns: {
                '16': 'repeat(16, minmax(0, 1fr))',
            },
            animation: {
                fadeIn: "fadeIn 2s ease-in forwards",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
            },
            colors: {
                brand: "#7140FF",
                brandLight: "#804FFF",
                brandOutline: "#9B51E0",
                navItems: "#151517",
                heroP: "#828282",
                heroH: "#2F2F2F",
                card: "#1C1C1C",
                bar: "#E5E5E5",
                divider: "#717171",
                exp: "#121212",
                expSec: "#414141",
            },
            inset: {
                "95percent": "95%",
            },
            fontSize: {
                xss: ["8px", "12px"],
                lgg: ["24px", "28px"],
            },
            backgroundImage: {
                "hero-pattern": "url('/assets/bgimage.png')",
                "hero-pattern-2": "url('/assets/bgimage (2).png')",
                "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
                "gradient-radial-at-t": "radial-gradient(ellipse at top, var(--tw-gradient-stops))",
                "gradient-radial-at-b": "radial-gradient(ellipse at bottom, var(--tw-gradient-stops))",
                "gradient-radial-at-l": "radial-gradient(ellipse at left, var(--tw-gradient-stops))",
                "gradient-radial-at-r": "radial-gradient(ellipse at right, var(--tw-gradient-stops))",
                "gradient-radial-at-tl": "radial-gradient(ellipse at top left, var(--tw-gradient-stops))",
                "gradient-radial-at-tr": "radial-gradient(ellipse at top right, var(--tw-gradient-stops))",
                "gradient-radial-at-bl": "radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))",
                "gradient-radial-at-br": "radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))",
            },
            spacing: {
                97: "33.75rem",
                510: "31.875rem",
                491: "30.7rem",
                480: "30rem",
                445: "27.8rem",
                483: "30.2rem",
                402: "25rem",
                thumbnailW: "33.2rem",
                thumbnailH: "30.3rem",
            },
            width: {
                "6/7": "96%",
                "5/7": "94%",
                "4/7": "92%",
                "3/7": "87%",
                "2/7": "79%",
                "11/24": "45.83%",
                "9/24": "37.5%",
                "17/48": "35.416%",
            },
            maxWidth: {
                card: "33.75rem",
                projectRoute: "81.875rem",
                caseStudyCard: "57.8rem",
            },
            fontFamily: {
                poppins: ["Poppins"],
                roboto: ["Roboto"],
                badScript: ["Bad Script"],
                cursive: ["cursive"],
                cardo: ["Cardo"],
                playfair: ["Playfair Display"],
            },
            screens: {
                "1xl": "1440px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};