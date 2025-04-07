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
        'brown-200': 'var(--brown-200)',

        blue: 'var(--blue)',
        'blue-faded': 'var(--blue-faded)',
        'blue-200': 'var(--blue-200)',
        'blue-600': 'var(--blue-600)',
        'blue-600-faded': 'var(--blue-600-faded)',
        'blue-600-faded-2': 'var(--blue-600-faded-2)',

        'red-200': 'var(--red-200)',
        'red-200-faded': 'var(--red-200-faded)',
        'red-200-faded-2': 'var(--red-200-faded-2)',

        orange: 'var(--orange)',
        'orange-faded': 'var(--orange-faded)',
        'orange-faded-2': 'var(--orange-faded-2)',
        'orange-600': 'var(--orange-600)',
        'orange-400': 'var(--orange-400)',
        'orange-300': 'var(--orange-300)',
        'orange-200': 'var(--orange-200)',
        'orange-200-faded': 'var(--orange-200-faded)',
        'orange-100': 'var(--orange-100)',

        'yellow-100': 'var(--yellow-100)',
        'yellow-100-transparent': 'var(--yellow-100-transparent)',
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
      minHeight: {
        'input-field': 'var(--height-input-field)',
      },
      maxHeight: {
        'input-field': 'var(--height-input-field)',
      },
      height: {
        banner: 'var(--height-banner)',
        start: 'var(--height-start)',
        'start-description': 'var(--height-start-description)',
        'footer-image': 'var(--height-footer-image)',
        'input-field': 'var(--height-input-field)',
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
