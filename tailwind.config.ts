import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/libraries/**/*.{js,ts,jsx,tsx,mdx}',
    './src/@views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: '560px',
      md: '740px',
      lg: '1024px',
      xl: '1300px',
      '2xl': '1300px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '1rem'
      },
      screens: {
        sm: '560px',
        md: '740px',
        lg: '1024px',
        xl: '1300px',
        '2xl': '1300px'
      }
    },
    fontFamily: {
      primary: 'var(--font-primary)',
      secondary: 'var(--font-secondary)',
      tertiary: 'var(--font-tertiary)'
    },
    colors: {
      // default
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      label: 'var(--color-label)',
      sub: 'var(--color-sub)',
      20: 'var(--bg-20)',
      50: 'var(--bg-50)',
      line: 'var(--line)',

      // theme
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      white: 'var(--white)',
      dark: 'var(--dark)',
      success: 'var(--success)',
      info: 'var(--info)',
      danger: {
        DEFAULT: 'var(--danger)'
      },
      gray: {
        DEFAULT: 'var(--gray)',
        100: 'var(--gray-100)'
      },
      warning: {
        DEFAULT: 'var(--warning)'
      }
    },
    extend: {
      width: {
        '0.5': '0.125rem',
        '3.5': '0.875rem',
        '4.5': '1.125rem'
      },
      height: {
        '0.5': '0.125rem',
        '3.5': '0.875rem',
        '4.5': '1.125rem'
      },
      spacing: {
        '0.5': '0.125rem',
        '3.5': '0.875rem',
        '4.5': '1.125rem'
      },
      borderWidth: {
        1.5: '1.5px'
      },
      borderRadius: {
        '4xl': '2.25rem'
      },
      fontSize: {
        h1: '48px',
        h2: '40px',
        h3: '33px',
        h4: '28px',
        h5: '23px',
        title1: '19px',
        title2: '16px',
        body: '13px',
        caption: '11px'
      },
      boxShadow: {
        box: '0 0 30px rgba(0, 0, 0, 0.05)'
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '16/9': '16 / 9',
        '9/16': '9 / 16'
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
};
export default config;
