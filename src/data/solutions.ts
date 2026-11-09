export type Solution = {
  id: string
  icon: 'industry' | 'mobile' | 'embedded' | 'vision'
}

export const solutions: Solution[] = [
  { id: 'industry', icon: 'industry' },
  { id: 'mobile', icon: 'mobile' },
  { id: 'embedded', icon: 'embedded' },
  { id: 'vision', icon: 'vision' },
]
