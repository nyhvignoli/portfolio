export const createBGImagesStyle = (src) => {
  const images = [
    {
      src,
      styles: {
        desktop: { opacity: '0.06', left: 0 },
        mobile: { opacity: '0.06', top: 0 }
      }
    },
    {
      src,
      styles: {
        desktop: { opacity: '0.02', left: '20%' },
        mobile: { opacity: '0.01', top: '-20%' }
      }
    },
    {
      src,
      styles: {
        desktop: { opacity: '0.01', left: '40%' },
        mobile: { opacity: '0', top: 0 }
      }
    }
  ]

  return images
}
