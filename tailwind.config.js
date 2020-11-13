module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.vue'
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1400px'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%'
      },
      width: {
        '95/100': '95%',
        '90/100': '90%',
        '73/100': '73%',
        '46/100': '46%',
        '31/100': '31.33333%',
        '23/100': '23%',
        '40px': '40px',
        '800px': '800px',
        '1024px': '1024px',
        '1280px': '1280px'
      },
      height: {
        '40px': '40px'
      },
      padding: {
        1.5: '0.375rem',
        '1%': '1%',
        '2%': '2%'
      },
      margin: {
        1.5: '0.375rem',
        '1%': '1%',
        '2%': '2%'
      },
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#aaaaaa', // 預設值: #a0aec0
          600: '#767676', // 預設值: #718096
          700: '#4a5568',
          800: '#212121', // 預設值: #2d3748
          900: '#1a202c'
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#074ee8' // 預設值: #2a4365
        }
      },
      opacity: {
        8: '0.08'
      },
      boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        focus: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
        bottom: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  variants: {
  },
  plugins: []
}
