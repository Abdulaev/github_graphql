import React from 'react'
import { EdgeType, Repository } from '@types'
import { Card } from 'common/components/organisms'
import { Loader } from 'common/components/atoms'
import {
 Title, CardContainer, Container, Text, Anchor 
} from './RepositoriesList.style'

interface RepositoriesListProps {
  repositories: EdgeType<Repository>
  loading: boolean
}

export const RepositoriesList: React.FC<RepositoriesListProps> = ({ loading, repositories }) => {
  return (
    <Loader loading={loading}>
      <Container>
        {repositories?.edges.map(({ node }) => (
          <CardContainer key={node.id}>
            <Card header={<Title>{node.name}</Title>}>
              <Text>{`Stargazer count: ${node.stargazers.totalCount}`}</Text>
              <Anchor href={node.url}>{node.url}</Anchor>
            </Card>
          </CardContainer>
        ))}
      </Container>
    </Loader>
  )
}
