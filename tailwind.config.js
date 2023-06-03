
module.exports = {
    mode: "jit",
    content: [
        "./app/**/*.{js,jsx}",
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                medium: ["medium"],
                semibold: ["semibold"],
                bold: ["bold"]
            },
            colors: {
                mautim: '#bf06ac'
            },
        },

    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}