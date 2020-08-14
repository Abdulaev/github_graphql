import React from 'react'
import { Spinner } from 'common/components/atoms'

interface LoaderProps {
  small?: boolean
  loading: boolean
}

export const Loader: React.FC<LoaderProps> = ({ small = false, loading, children }) => {
  return <>{loading ? <Spinner small={small} /> : children}</>
}
