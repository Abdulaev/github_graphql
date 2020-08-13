export interface License {
  key: string
  name: string
}

export type NodeType<T> = {
  node: T
}

export interface Stargaze {
  totalCount: number
}

export interface Repository {
  id: string
  name: string
  url: string
  stargazers: Stargaze
}

export type EdgeType<T> = {
  edges: NodeType<T>[]
}
