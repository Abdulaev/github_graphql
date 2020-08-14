import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query getRepos($query: String!) {
    search(query: $query, type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            id
            name
            url
            licenseInfo {
              name
            }
            stargazers(first: 10) {
              totalCount
            }
          }
        }
      }
    }
  }
`
