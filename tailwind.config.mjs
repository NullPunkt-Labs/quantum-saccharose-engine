/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        void: {
          950: '#08090b',
          900: '#0d0f12',
          800: '#15181d',
          700: '#1e2229',
          500: '#3a404b',
          300: '#8b93a1',
          100: '#e6e9ee',
        },
        flux: '#00F0FF',
        ultraviolet: '#7000FF',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'JetBrains Mono',
          'Menlo',
          'monospace',
        ],
      },
      boxShadow: {
        'flux-glow': '0 0 24px -6px rgba(0, 240, 255, 0.35)',
        'uv-glow': '0 0 24px -6px rgba(112, 0, 255, 0.35)',
      },
      animation: {
        scan: 'scan 4s linear infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};
