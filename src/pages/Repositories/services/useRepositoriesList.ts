import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from 'core/queries/search/getRepositories'
import { ALL } from 'core/constants'
import { EdgeType, Repository } from '@types'

interface RepositoriesLoadData {
  search: EdgeType<Repository>
}

export const useRepositoriesList = (
  chosenLanguage: string,
  licenseType: string,
  createdTime: string,
  repoName: string
) => {
  const { data, loading, error } = useQuery<RepositoriesLoadData>(GET_REPOSITORIES, {
    variables: {
      query: `${createdTime ? `created:>${createdTime}` : ''} ${
        chosenLanguage ? `language:${chosenLanguage}` : ''
      } ${licenseType !== ALL ? `license:${licenseType}` : ''} ${
        repoName ? `${repoName} in:name` : ''
      } sort:stars`
    }
  })

  return { data, loading, error }
}
