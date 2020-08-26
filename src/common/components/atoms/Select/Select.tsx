import React from 'react'
import { StyledSelect } from './Select.style'

interface Option {
  value: string
  label: string
}

interface SelectProps {
  options: Option[]
  onSelect: (value: string) => void
}

export const Select: React.FC<SelectProps> = ({ options, onSelect }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value)
  }

  return (
    <StyledSelect onChange={handleChange}>
      {options.map(license => (
        <option value={license.value} key={license.value}>
          {license.label}
        </option>
      ))}
    </StyledSelect>
  )
}
