module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.{html,js,svelte,ts}'
    ],
    theme: {
        extend: {
            colors: {},
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
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ]
};
