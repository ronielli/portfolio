export type Project = {
  id: string
  name: string
  privateRepo: boolean
  liveUrl?: string
  architecture: string[]
  tags: string[]
}

/** Vazio por enquanto — produtos próprios ficam fora até você liberar. */
export const projects: Project[] = []
