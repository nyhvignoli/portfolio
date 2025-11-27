import '@testing-library/jest-dom'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

global.IntersectionObserver = class IntersectionObserver {
  observe() {}
  unobserve() {}
}

// Mock AOS
jest.mock('aos', () => ({
  init: jest.fn()
}))

// Mock dotenv
jest.mock('dotenv', () => ({
  config: jest.fn()
}))

// Mock graphql-request
jest.mock('graphql-request', () => ({
  GraphQLClient: jest.fn(() => ({
    request: jest.fn().mockResolvedValue({
      heroCollection: {
        items: []
      }
    })
  })),
  gql: jest.fn((query) => query)
}))

// Mock contentful
jest.mock('contentful', () => ({
  createClient: jest.fn(() => ({
    getEntries: jest.fn().mockResolvedValue({
      items: []
    })
  }))
}))
