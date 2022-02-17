module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.{html,js,svelte,ts}'
    ],
    theme: {
        extend: {
            colors: {
                'light-blue1': '#dbf0fe',
                'light-blue2': '#00c0e0',
                'light-blue3': '#2e90ff',
                'light-blue4': '#0b84c4',
                'light-blue5': '#0b84c4',
                'light-blue6': '#e73c40',
                'light-blue7': '#faa41a',
                'light-blue8': '#fedeb6',
                'light-blue9': '#008200',
            },
            fontFamily: {
                'serif': ['Playfair Display', 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
                'sans': ['Open Sans', 'ui-sans', 'Arial', 'Helvetica', 'sans-serif'],
                'nunito': ['Nunito', 'ui-sans', 'Arial', 'Helvetica', 'sans-serif'],
                'raleway': ['Raleway', 'ui-sans', 'Arial', 'Helvetica', 'sans-serif'],
            },
            fontSize: {
                'xxs': '.50rem',
                'xxm': '.60rem',
                'xxxs': '.30rem',
            },
            dropShadow: ['hover', 'focus'],
        }
    },
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
        require('@tailwindcss/typography')
    ]
};
