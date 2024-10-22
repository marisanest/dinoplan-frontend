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
        'blue-faded': 'rgba(76,118,201,0.27)',
        'brown-200': '#857459',
        'blue-600': '#294290',
        'blue-600-faded': '#889bd3',
        'red-200': '#FAA19F',
        'red-200-faded': '#ffc7c6',
        orange: '#E6B45A',
        'orange-faded': '#eecb8d',
        'orange-600': '#CAA263',
        'orange-400': '#EFE6D6',
        'orange-300': '#F3EBDF',
        'orange-200': '#F7F2EA',
        'orange-200-faded': 'rgb(236,219,193)',
        'yellow-100': '#FFFFFA',
        'yellow-100-transparent': 'rgba(255,255,250,0.6)',
      },
      width: {
        sm: 'calc(100dvw - 20rem)',
        md: 'calc(100dvw - 10rem)',
      },
      maxWidth: {
        'sm': 'var(--max-w-sm)',
        'md': 'var(--max-w-md)'
      },
      height: {
        banner: 'var(--height-banner)',
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
