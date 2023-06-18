/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        safelist: [
            '!duration-[0ms]',
            '!delay-[0ms]',
            'html.js :where([class*="taos:"]:not(.taos-init))'
        ],
        content: {
            transform: (content) => content.replace(/taos:/g, ''),
        },
        plugins: [
            // Other plugins
            require('taos/plugin')
        ],
        animatedSettings: {
            animatedSpeed: 1000,
            heartBeatSpeed: 500,
            hingeSpeed: 2000,
            bounceInSpeed: 750,
            bounceOutSpeed: 750,
            animationDelaySpeed: 500,
            classes: ['bounce', 'heartBeat']
        },
        extend: {
            colors: {
                'gr1': '#191823',
                'gr2': '#151D39',
                'gr3': '#32213F',

                'gr4': '#070A12',
                'gr5': '#1C0D37',
                'gr6': '#070A12',

                'bot-color': '#10141F',
                'chat-color': '#22293A'
            }
        },
        fontFamily: {
            'sans': ['ui-sans-serif', 'system-ui'],
            'serif': ['ui-serif', 'Georgia'],
            'mono': ['ui-monospace', 'SFMono-Regular'],
            'display': ['Poppins'],
            'body': ['"Open Sans"'],
        },
    },
    plugins: [],
}

