export const Breakpoints = {
  MOBILE: {
    X_SMALL: 'max-width: 319px', // smaller than 319px
    SMALL: 'min-width: 320px', // between 320px and 359px
    REGULAR: 'min-width: 360px', // between 360px and 410px
    LARGE: {
      MIN: 'min-width: 411px',
      MAX: 'max-width: 480px'
    } // between 411px and 480px
  },
  TABLET: {
    SMALL: {
      MIN: 'min-width: 481px',
      MAX: 'max-width: 658px'
    },
    REGULAR: {
      MIN: 'min-width: 659px',
      MAX: 'max-width: 768px'
    }
    // between 481px and 768px
  },
  DESKTOP: {
    REGULAR: 'min-width: 769px', // between 769px and 1024px
    LARGE: 'min-width: 1025px', // between 1025px and 1200px
    X_LARGE: 'min-width: 1201px' // larger than 1201px
  }
}
