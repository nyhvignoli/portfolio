import labenuLogo from '../assets/labenu.png'
import codivasLogo from '../assets/codivas.jpg'
import gufersLogo from '../assets/gufers.png'
import compiladorasLogo from '../assets/compiladoras.jpg'
import { getCommunities } from './communities'

test('getCommunities function', () => {
  const dictionaryMock = {
    labenuCommunityDescription: 'bar',
    codivasDescription: 'foo bar',
    compiladorasDescription: 'bar foo',
    gufersDescription: 'foo bar foo',
    ariaLabels: {
      labenu: 'foo',
      codivas: 'bar',
      compiladoras: 'foo',
      gufers: 'bar'
    },
    alternativeText: {
      logos: {
        labenu: 'labenu',
        codivas: 'codivas',
        compiladoras: 'compiladoras',
        gufers: 'gufers'
      }
    }
  }

  const communities = getCommunities(dictionaryMock)

  const expectedResult = [
    {
      name: 'Labenu',
      logo: {
        image: labenuLogo,
        alt: dictionaryMock.alternativeText.logos.labenu
      },
      href: 'https://www.labenu.com.br/',
      ariaLabel: dictionaryMock.ariaLabels.labenu,
      description: dictionaryMock.labenuCommunityDescription
    },
    {
      name: 'Codivas',
      logo: {
        image: codivasLogo,
        alt: dictionaryMock.alternativeText.logos.codivas
      },
      href: 'https://www.codivas.com.br/',
      ariaLabel: dictionaryMock.ariaLabels.codivas,
      description: dictionaryMock.codivasDescription
    },
    {
      name: 'Compiladoras de Cafeína',
      logo: {
        image: compiladorasLogo,
        alt: dictionaryMock.alternativeText.logos.compiladoras
      },
      href: 'https://www.instagram.com/comunidadecafeina/',
      ariaLabel: dictionaryMock.ariaLabels.compiladoras,
      description: dictionaryMock.compiladorasDescription
    },
    {
      name: 'Gufers',
      logo: {
        image: gufersLogo,
        alt: dictionaryMock.alternativeText.logos.gufers
      },
      href: 'https://www.youtube.com/channel/UCcL_lGqZNsa_9cR4ckjy07A',
      ariaLabel: dictionaryMock.ariaLabels.gufers,
      description: dictionaryMock.gufersDescription
    }
  ]

  expect(communities.length).toEqual(4)
  expect(communities).toEqual(expectedResult)
})
