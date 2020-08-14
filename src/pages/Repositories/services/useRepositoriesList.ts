import { useMemo } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from 'core/queries/search/getRepositories'
import {
  getLicenseQuery,
  getRepositoryNameQuery,
  getLanguageQuery,
  getOrderByQuery,
  getCreatedTimeQuery
} from 'common/helpers'
import { EdgeType, Repository } from '@types'

interface RepositoriesLoadData {
  search: EdgeType<Repository>
}

interface RepositoriesQueryVars {
  query: string
}

export const useRepositoriesList = (
  chosenLanguage: string,
  licenseType: string,
  createdTime: string,
  repoName: string
) => {
  const queryVar = useMemo(
    () =>
      [
        getLicenseQuery(licenseType),
        getRepositoryNameQuery(repoName),
        getLanguageQuery(chosenLanguage),
        getCreatedTimeQuery(createdTime),
        getOrderByQuery()
      ].join(' '),
    [chosenLanguage, licenseType, createdTime, repoName]
  )

  const { data, loading, error } = useQuery<RepositoriesLoadData, RepositoriesQueryVars>(
    GET_REPOSITORIES,
    {
      variables: {
        query: queryVar
      }
    }
  )

  return { data, loading, error }
}
