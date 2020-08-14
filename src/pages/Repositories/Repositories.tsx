import React, { useMemo, useState } from 'react'
import dayjs from 'dayjs'
import { ALL } from 'core/constants'
import { useRepositoriesList } from './services/useRepositoriesList'
import { FilterBar } from './components/FilterBar/FilterBar'
import { RepositoriesList } from './components/RepositoriesList/RepositoriesList'

const Repositories: React.FC = () => {
  const [licenseType, setLicenseType] = useState(ALL)
  const [repoNameQuery, setRepoNameQuery] = useState('')
  const [chosenLanguage] = useState('Javascript')

  const lastMonthDate = useMemo(() => dayjs().subtract(1, 'M').format('YYYY-MM-DD'), [])

  const repositories = useRepositoriesList(
    chosenLanguage,
    licenseType,
    lastMonthDate,
    repoNameQuery
  )

  const handleSelectLicenseType = (value: string) => {
    setLicenseType(value)
  }

  const handleSearchRepoName = (value: string) => {
    if (value.length === 0) setRepoNameQuery('')
    else setRepoNameQuery(value)
  }

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
