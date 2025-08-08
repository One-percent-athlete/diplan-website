/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
        colors: {
            snowwhite: '#F8F8F8',
            skyblue: '#1E508F',
            glacier: '#4A90E2',
            sunrise: '#F5A623',
        },
        },
    },
    plugins: [],
}
