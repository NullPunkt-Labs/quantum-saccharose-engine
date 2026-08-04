/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        page: 'rgb(var(--bg-primary) / <alpha-value>)',
        surface: 'rgb(var(--bg-surface) / <alpha-value>)',
        linec: 'rgb(var(--bg-border) / <alpha-value>)',
        inset: 'rgb(var(--bg-inset) / <alpha-value>)',
        ink: 'rgb(var(--text-main) / <alpha-value>)',
        muted: 'rgb(var(--text-muted) / <alpha-value>)',
        faint: 'rgb(var(--text-faint) / <alpha-value>)',
        flux: 'rgb(var(--accent-cyan) / <alpha-value>)',
        ultraviolet: 'rgb(var(--accent-purple) / <alpha-value>)',
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
        'flux-glow': '0 0 24px -6px rgb(var(--accent-cyan) / 0.30)',
        'uv-glow': '0 0 24px -6px rgb(var(--accent-purple) / 0.30)',
        card: '0 4px 6px -1px rgb(15 23 42 / 0.05)',
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
