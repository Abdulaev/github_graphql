import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { ROUTES } from 'common/enums'
import { MainLayout, Spinner } from 'common/components'

const RepositoriesPage = React.lazy(() => import('./Repositories/Repositories'))

export const App = () => {
  return (
    <MainLayout>
      <React.Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={ROUTES.repositories} component={RepositoriesPage} exact />
          <Redirect from='*' to={ROUTES.repositories} />
        </Switch>
      </React.Suspense>
    </MainLayout>
  )
}
