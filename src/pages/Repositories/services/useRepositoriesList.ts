import { useMemo } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from 'core/queries/search/getRepositories'
import {
  getLicenseQuery,
  getRepositoryNameQuery,
  getLanguageQuery,
  getSortQuery,
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
  repoName: string,
  sort: string
) => {
  const queryVar = useMemo(
    () =>
      [
        getLicenseQuery(licenseType),
        getRepositoryNameQuery(repoName),
        getLanguageQuery(chosenLanguage),
        getCreatedTimeQuery(createdTime),
        getSortQuery(sort)
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
