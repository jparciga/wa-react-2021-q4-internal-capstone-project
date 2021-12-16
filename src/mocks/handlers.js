import * as apiCalls from './users'
import {API_BASE_URL} from '../utils/constants'

async function mockFetch(queryString, config) {
  switch (url) {
    case '':
      const user = await users.login(JSON.parse(config.body))
      return {
        ok: true,
        status: 200,
        json: async () => ({user}),
      }
    }
    case '/checkout': {
      const isAuthorized = user.authorize(config.headers.Authorization)
      if (!isAuthorized) {
        return Promise.reject({
          ok: false,
          status: 401,
          json: async () => ({message: 'Not authorized'}),
        })
      }
      const shoppingCart = JSON.parse(config.body)
      // do whatever other things you need to do with this shopping cart
      return {
        ok: true,
        status: 200,
        json: async () => ({success: true}),
      }
    }
    default: {
      throw new Error(`Unhandled request: ${url}`)
    }
  }
}

beforeAll(() => jest.spyOn(window, 'fetch'))
beforeEach(() => window.fetch.mockImplementation(mockFetch))