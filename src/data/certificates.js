export const getCertificates = ({
  css3Animations,
  gcpFundamentals,
  fullStackDevelopment,
  ariaLabels
}) => {
  const certificates = [
    {
      text: css3Animations,
      href: 'https://drive.google.com/file/d/15rnBJPZtUfGP8oQd_GvYrCPSPiAS475J/view?usp=share_link',
      ariaLabel: ariaLabels.css3Animations
    },
    {
      text: gcpFundamentals,
      href: 'https://www.coursera.org/account/accomplishments/verify/ML3XGYBHM97P?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
      ariaLabel: ariaLabels.gcpFundamentals
    },
    {
      text: fullStackDevelopment,
      href: 'https://drive.google.com/file/d/1C48TL50Qi3j4AP8OyjYdQSQew0urRBRA/view?usp=share_link',
      ariaLabel: ariaLabels.fullStackDevelopment
    }
  ]

  return certificates
}
