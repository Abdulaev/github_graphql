import { ALL } from 'core/constants'

export const getLicenseQuery = (licenseType: string) =>
  licenseType !== ALL ? `license:${licenseType}` : ''

export const getLanguageQuery = (language: string) => (language ? `language:${language}` : '')

export const getRepositoryNameQuery = (repositoryName: string) =>
  repositoryName ? `${repositoryName} in:name` : ''

export const getCreatedTimeQuery = (createdTime: string) =>
  createdTime ? `created:>${createdTime}` : ''

export const getOrderByQuery = () => 'sort:stars'
