import React, { useMemo, useState } from 'react'
import dayjs from 'dayjs'
import { useDebounce } from 'use-debounce'
import { ALL } from 'core/constants'
import { useRepositoriesList } from './services/useRepositoriesList'
import { FilterBar } from './components/FilterBar/FilterBar'
import { RepositoriesList } from './components/RepositoriesList/RepositoriesList'

const Repositories: React.FC = () => {
  const [licenseType, setLicenseType] = useState(ALL)
  const [repoNameQuery, setRepoNameQuery] = useState('')
  const [chosenLanguage] = useState('Javascript')

  const handleSelectLicenseType = (value: string) => {
    setLicenseType(value)
  }

  const handleSearchRepoName = (value: string) => {
    if (value.length === 0) setRepoNameQuery('')
    else setRepoNameQuery(value)
  }

  const [repoName] = useDebounce(repoNameQuery, 400)

  const lastMonthDate = useMemo(() => dayjs().subtract(1, 'M').format('YYYY-MM-DD'), [])

  const repositories = useRepositoriesList(chosenLanguage, licenseType, lastMonthDate, repoName)

  return (
    <>
      <FilterBar
        onSelectLicenseType={handleSelectLicenseType}
        onSearchRepoName={handleSearchRepoName}
      />
      <RepositoriesList repositories={repositories.data?.search} loading={repositories.loading} />
    </>
  )
}

export default Repositories
