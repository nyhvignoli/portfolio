import {
  musicatchersScreenshot,
  musicatchers2,
  musicatchers3,
  musicatchers4,
  musicatchers5
} from '../assets/musicatchers'
import {
  labedditScreenshot,
  labeddit2,
  labeddit3,
  labeddit4
} from '../assets/labeddit'
import {
  mongoDBComponentLibCover,
  masonryCards,
  formComponents
} from '../assets/mondo-db-component-lib'
import {
  backgroundImgBefore,
  backgroundImgAfter,
  detailsBefore,
  detailsAfter,
  lpNavBefore,
  lpNavAfter,
  segaBefore,
  segaAfter,
  segaBeforeMobile,
  segaAfterMobile
} from '../assets/mongo-db'

export const getProjects = ({
  mongoDBDescription,
  mongoDBComponentLibrary,
  mongoDBComponentLibDescription,
  musicatchersDescription,
  labedditDescription,
  viewDocumentation,
  labenuSystemDescription,
  labookDescription,
  images
}) => {
  const { mongoDB, mongoDBComponentLib, musicatchers, labeddit } = images

  const projects = [
    {
      title: 'MongoDB Website',
      type: 'Full Stack',
      images: [
        {
          src: backgroundImgAfter,
          alt: mongoDB.backgroundImgAfter.alt,
          caption: mongoDB.backgroundImgAfter.caption
        },
        {
          src: backgroundImgBefore,
          alt: mongoDB.backgroundImgBefore.alt,
          caption: mongoDB.backgroundImgBefore.caption
        },
        {
          src: detailsBefore,
          alt: mongoDB.detailsBefore.alt,
          caption: mongoDB.detailsBefore.caption
        },
        {
          src: detailsAfter,
          alt: mongoDB.detailsAfter.alt,
          caption: mongoDB.detailsAfter.caption
        },
        {
          src: lpNavBefore,
          alt: mongoDB.lpNavBefore.alt,
          caption: mongoDB.lpNavBefore.caption
        },
        {
          src: lpNavAfter,
          alt: mongoDB.lpNavAfter.alt,
          caption: mongoDB.lpNavAfter.caption
        },
        {
          src: segaBefore,
          alt: mongoDB.segaBefore.alt,
          caption: mongoDB.segaBefore.caption
        },
        {
          src: segaBeforeMobile,
          alt: mongoDB.segaBeforeMobile.alt,
          caption: mongoDB.segaBeforeMobile.caption
        },
        {
          src: segaAfter,
          alt: mongoDB.segaAfter.alt,
          caption: mongoDB.segaAfter.caption
        },
        {
          src: segaAfterMobile,
          alt: mongoDB.segaAfterMobile.alt,
          caption: mongoDB.segaAfterMobile.caption
        }
      ],
      description: mongoDBDescription,
      ctas: [{ href: 'https://www.mongodb.com/' }],
      tags: [
        'react',
        'preact',
        'styled-components',
        'svelte',
        'jest',
        'node',
        'mongoDB'
      ]
    },
    {
      title: mongoDBComponentLibrary,
      type: 'Front-end',
      images: [
        {
          src: mongoDBComponentLibCover,
          alt: mongoDBComponentLib.webinarsPresentation.alt,
          caption: mongoDBComponentLib.webinarsPresentation.caption
        },
        {
          src: masonryCards,
          alt: mongoDBComponentLib.cardGrid.alt,
          caption: mongoDBComponentLib.cardGrid.caption
        },
        {
          src: formComponents,
          alt: mongoDBComponentLib.form.alt,
          caption: mongoDBComponentLib.form.caption
        }
      ],
      description: mongoDBComponentLibDescription,
      ctas: [{ href: 'https://www.mongodb.com/' }],
      tags: ['react', 'theme-ui', 'storybook', 'rollup', 'jest', 'node']
    },
    {
      title: 'MusiCatchers',
      type: 'Full Stack',
      images: [
        {
          src: musicatchersScreenshot,
          alt: musicatchers.musicatchersScreenshot.alt,
          caption: musicatchers.musicatchersScreenshot.caption
        },
        {
          src: musicatchers2,
          alt: musicatchers.musicatchers2.alt,
          caption: musicatchers.musicatchers2.caption
        },
        {
          src: musicatchers3,
          alt: musicatchers.musicatchers3.alt,
          caption: musicatchers.musicatchers3.caption
        },
        {
          src: musicatchers4,
          alt: musicatchers.musicatchers4.alt,
          caption: musicatchers.musicatchers4.caption
        },
        {
          src: musicatchers5,
          alt: musicatchers.musicatchers5.alt,
          caption: musicatchers.musicatchers5.caption
        }
      ],
      description: musicatchersDescription,
      ctas: [
        {
          text: 'Front-end (GitHub)',
          href: 'https://github.com/nyhvignoli/musicatchers-frontend'
        },
        {
          text: 'Back-end (GitHub)',
          href: 'https://github.com/nyhvignoli/musicatchers-backend'
        }
      ],
      tags: [
        'react',
        'axios',
        'styled-components',
        'material-ui',
        'nodejs',
        'mysql',
        'jest'
      ]
    },
    {
      title: 'Labeddit',
      type: 'Front-end',
      images: [
        {
          src: labedditScreenshot,
          alt: labeddit.labedditScreenshot.alt,
          caption: labeddit.labedditScreenshot.caption
        },
        {
          src: labeddit2,
          alt: labeddit.labeddit2.alt,
          caption: labeddit.labeddit2.caption
        },
        {
          src: labeddit3,
          alt: labeddit.labeddit3.alt,
          caption: labeddit.labeddit3.caption
        },
        {
          src: labeddit4,
          alt: labeddit.labeddit4.alt,
          caption: labeddit.labeddit4.caption
        }
      ],
      description: labedditDescription,
      ctas: [
        { href: 'http://nyhv-labeddit.surge.sh' },
        {
          text: 'Front-end (GitHub)',
          href: 'https://github.com/nyhvignoli/labeddit'
        }
      ],
      tags: ['react', 'axios', 'styled-components', 'material-ui']
    },
    {
      title: 'Labenu System',
      type: 'Back-end',
      description: labenuSystemDescription,
      ctas: [
        {
          text: 'Back-end (GitHub)',
          href: 'https://github.com/nyhvignoli/labenu-system'
        },
        {
          text: viewDocumentation,
          href: 'https://documenter.getpostman.com/view/13242412/TVza9tK7'
        }
      ],
      tags: ['express', 'knex', 'mysql', 'uuid', 'dotenv', 'dayjs', 'cors']
    },
    {
      title: 'Labook',
      type: 'Back-end',
      description: labookDescription,
      ctas: [
        {
          text: 'Back-end (GitHub)',
          href: 'https://github.com/nyhvignoli/labook'
        },
        {
          text: viewDocumentation,
          href: 'https://github.com/nyhvignoli/labook#endpoints'
        }
      ],
      tags: [
        'express',
        'knex',
        'mysql',
        'uuid',
        'dotenv',
        'jasonwebtoken',
        'bcrypt'
      ]
    }
  ]

  return projects
}
