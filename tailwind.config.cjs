module.exports = {
    content: ['./index.html', './baiely_demineur.js'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                neon: {
                    cyan: '#00f3ff',
                    purple: '#b000ff',
                    gold: '#ffd700',
                    rose: '#ff0055',
                    matrix: '#00ff66',
                    magma: '#ff4500'
                }
            },
            keyframes: {
                menuSlideIn: {
                    '0%': { opacity: '0', transform: 'translateX(-30px) scale(0.98)' },
                    '100%': { opacity: '1', transform: 'translateX(0) scale(1)' }
                },
                popIn: {
                    '0%': { opacity: '0', transform: 'scale(0.92) translateY(12px)' },
                    '100%': { opacity: '1', transform: 'scale(1) translateY(0)' }
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0, 243, 255, 0.4))' },
                    '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 25px rgba(0, 243, 255, 0.8))' }
                }
            },
            animation: {
                'menu-slide': 'menuSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'pop-in': 'popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'pulse-glow': 'pulseGlow 3s infinite ease-in-out'
            }
        }
    },
    plugins: []
};
