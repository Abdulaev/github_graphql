import React, { useMemo } from 'react'
import { useQuery } from '@apollo/client'
import { Input, Select } from 'common/components/atoms'
import { GET_ALL_LICENSES } from 'core/queries/licenses/getAllLicenses'
import { License } from '@types'
import { Container } from './FilterBar.style'

interface FilterBarProps {
  onSelectLicenseType: (value: string) => void
  onSearchRepoName: (name: string) => void
}

interface LicensesLoadData {
  licenses: License[]
}

const defaultOption = [
  {
    value: 'all',
    label: 'All licenses'
  }
]

export const FilterBar: React.FC<FilterBarProps> = ({ onSelectLicenseType, onSearchRepoName }) => {
  const { data, loading } = useQuery<LicensesLoadData>(GET_ALL_LICENSES)

  const options = useMemo(
    () =>
      data?.licenses.reduce(
        (acc, license) => [...acc, { label: license.name, value: license.key }],
        defaultOption
      ),
    [data]
  )

  if (loading) return <p>Loading license types...</p>

  return (
    <Container>
      <Select options={options} onSelect={onSelectLicenseType} />
      <Input onChange={onSearchRepoName} placeholder='Search by repository name' />
    </Container>
  )
}
