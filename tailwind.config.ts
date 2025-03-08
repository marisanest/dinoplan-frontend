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
        'blue-200': 'var(--blue-200)',
        'blue-600': '#294290',
        'blue-600-faded': '#889bd3',
        'red-200': 'var(--red-200)',
        'red-200-faded': 'var(--red-200-faded)',
        'red-200-faded-2': 'var(--red-200-faded-2)',
        orange: '#E6B45A',
        'orange-faded': '#eecb8d',
        'orange-faded-2': 'var(--orange-faded-2)',
        'orange-600': '#CAA263',
        'orange-400': '#EFE6D6',
        'orange-300': '#F3EBDF',
        'orange-200': '#F7F2EA',
        'orange-200-faded': 'rgb(236,219,193)',
        'yellow-100': '#FFFFFA',
        'yellow-100-transparent': 'rgba(255,255,250,0.6)',
      },
      width: {
        sm: 'var(--width-sm)',
        md: 'var(--width-md)',
        text: 'var(--width-text)',
        'text-lg': 'var(--width-text-lg)',
        'footer-image': 'var(--width-footer-image)',
      },
      maxWidth: {
        sm: 'var(--width-sm)',
        md: 'var(--width-md)',
        text: 'var(--width-text)',
        'text-lg': 'var(--width-text-lg)',
        'footer-image': 'var(--width-footer-image)',
      },
      minWidth: {
        sm: 'var(--width-sm)',
        md: 'var(--width-md)',
        text: 'var(--width-text)',
        'text-lg': 'var(--width-text-lg)',
        'footer-image': 'var(--width-footer-image)',
      },
      height: {
        banner: 'var(--height-banner)',
        start: 'var(--height-start)',
        'start-description': 'var(--height-start-description)',
        'footer-image': 'var(--height-footer-image)',
      },
      spacing: {
        'x-xs': 'var(--spacing-x-xs)',
        'x-s': 'var(--spacing-x-s)',
        'x-sm': 'var(--spacing-x-sm)',
        'x-m': 'var(--spacing-x-m)',
        'x-outer': 'var(--spacing-x-outer)',

        'y-xs': 'var(--spacing-y-xs)',
        'y-s': 'var(--spacing-y-s)',
        'y-sm': 'var(--spacing-y-sm)',
        'y-m': 'var(--spacing-y-m)',

        'y-outer': 'var(--spacing-y-outer)',
        'y-block': 'var(--spacing-y-block)',
        'y-section': 'var(--spacing-y-section)',
        'y-paragraph': 'var(--spacing-y-paragraph)',

        circle: 'var(--spacing-circle)',
        banner: 'var(--height-banner)',
      },
      gap: {
        sm: 'var(--gap-sm)',
      },
      borderRadius: {
        lg: '90px',
        md: '50px',
      }
    },
    fontFamily: {
      nunito: ['var(--font-nunito)'],
      afacad: ['var(--font-afacad)'],
    },
    screens: {
      lg: '1245px',
      md: '1150px',
      sm: '1045px',
      s: '980px',
      ss: '820px',
      xs: '470px',
      xxs: '405px',
    },
  },
  plugins: [],
};
export default config;
