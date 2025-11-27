import { gql } from 'graphql-request'

export const GET_HERO = gql`
  query GetHero($locale: String!) {
    heroCollection(locale: $locale) {
      items {
        title
        subtitle
        bodyCopy {
          json
        }
        imagesCollection {
          items {
            url
            description
          }
        }
      }
    }
  }
`

// Add more queries as needed
