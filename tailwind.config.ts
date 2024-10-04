import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#4772D2',
        'blue-600': '#294290',
        'red-200': '#FAA19F',
        'red-200-faded': '#ffc7c6',
        orange: '#E6B45A',
        'orange-faded': '#eecb8d',
        'orange-600': '#CAA263',
        'orange-400': '#EFE6D6',
        'orange-200': '#F7F2EA',
        'yellow-100': '#FFFFFA'
      },
      width: {
        sm: 'calc(100dvw - 20rem)'
      },
      maxWidth: {
        'sm': 'var(--max-w-sm)'
      },
      padding: {
        'x-xs': 'var(--spacing-y-xs)',
        'x-s': 'var(--spacing-y-s)',
        'x-sm': 'var(--spacing-y-sm)',
        'x-m': 'var(--spacing-y-m)',

        'y-xs': 'var(--spacing-y-xs)',
        'y-s': 'var(--spacing-y-s)',
        'y-sm': 'var(--spacing-y-sm)',
        'y-m': 'var(--spacing-y-m)',
      },
     margin: {
       'x-xs': 'var(--spacing-y-xs)',
       'x-s': 'var(--spacing-y-s)',
       'x-sm': 'var(--spacing-y-sm)',
       'x-m': 'var(--spacing-y-m)',

       'y-xs': 'var(--spacing-y-xs)',
       'y-s': 'var(--spacing-y-s)',
       'y-sm': 'var(--spacing-y-sm)',
       'y-m': 'var(--spacing-y-m)',
     },
      gap: {
        sm: 'var(--gap-sm)',
      }
    },
    fontFamily: {
      nunito: ['var(--font-nunito)'],
      afacad: ['var(--font-afacad)'],
    },
  },
  plugins: [],
};
export default config;
