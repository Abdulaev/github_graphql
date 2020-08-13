import { ApolloClient, InMemoryCache } from '@apollo/client'

const createClient = (uri: string) => {
  return new ApolloClient({
    uri,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
    },
    cache: new InMemoryCache()
  })
}

export const client = createClient(process.env.REACT_APP_URL)
