import labenuLogo from '../assets/labenu.png'
import codivasLogo from '../assets/codivas.jpg'
import gufersLogo from '../assets/gufers.png'
import compiladorasLogo from '../assets/compiladoras.jpg'

export const getCommunities = ({
  labenuCommunityDescription,
  codivasDescription,
  compiladorasDescription,
  gufersDescription,
  ariaLabels,
  alternativeText
}) => {
  const communities = [
    {
      name: 'Labenu',
      logo: {
        image: labenuLogo,
        alt: alternativeText.logos.labenu
      },
      href: 'https://www.labenu.com.br/',
      ariaLabel: ariaLabels.labenu,
      description: labenuCommunityDescription
    },
    {
      name: 'Codivas',
      logo: {
        image: codivasLogo,
        alt: alternativeText.logos.codivas
      },
      href: 'https://www.codivas.com.br/',
      ariaLabel: ariaLabels.codivas,
      description: codivasDescription
    },
    {
      name: 'Compiladoras de Cafeína',
      logo: {
        image: compiladorasLogo,
        alt: alternativeText.logos.compiladoras
      },
      href: 'https://www.instagram.com/comunidadecafeina/',
      ariaLabel: ariaLabels.compiladoras,
      description: compiladorasDescription
    },
    {
      name: 'Gufers',
      logo: {
        image: gufersLogo,
        alt: alternativeText.logos.gufers
      },
      href: 'https://www.youtube.com/channel/UCcL_lGqZNsa_9cR4ckjy07A',
      ariaLabel: ariaLabels.gufers,
      description: gufersDescription
    }
  ]

  return communities
}
