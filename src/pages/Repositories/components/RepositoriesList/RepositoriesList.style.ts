import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 8px;
`

export const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 20px 10px;

  @media (min-width: ${p => p.theme.breakPoints.md}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: ${p => p.theme.breakPoints.lg}px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

export const Text = styled.p`
  margin: 4px 0;
`

export const Title = styled.h3``

export const Anchor = styled.a`
  word-break: break-word;
`

export const Warning = styled.p`
  text-align: center;
  margin: 24px 0 0 0;
  font-size: ${p => p.theme.fontSize.large}px;
`
