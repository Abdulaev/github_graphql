import { gql } from '@apollo/client'

export const GET_ALL_LICENSES = gql`
  query getAllLicenses {
    licenses {
      name
      key
    }
  }
`
