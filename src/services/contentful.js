import { GraphQLClient } from 'graphql-request'

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`

const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN}`
  }
})

export default client
