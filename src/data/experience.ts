export type Experience = {
  id: string
  company: string
  companyUrl?: string
  locationKey?: string
  periodKey: string
  titleKey: string
  descriptionKey: string
  tagKeys: string[]
}

export const experiences: Experience[] = [
  {
    id: 'intuitiva',
    company: 'Intuitiva',
    companyUrl: 'https://intuitiva.io',
    locationKey: 'experience.location.vdc',
    periodKey: 'experience.intuitiva.period',
    titleKey: 'experience.intuitiva.title',
    descriptionKey: 'experience.intuitiva.description',
    tagKeys: [
      'experience.tags.architecture',
      'experience.tags.mobile',
      'experience.tags.embedded',
      'experience.tags.vision',
      'experience.tags.product',
    ],
  },
  {
    id: 'cansho',
    company: 'CANSHO Group',
    locationKey: 'experience.location.vdc',
    periodKey: 'experience.cansho.period',
    titleKey: 'experience.cansho.title',
    descriptionKey: 'experience.cansho.description',
    tagKeys: [
      'experience.tags.leadership',
      'experience.tags.mobile',
      'experience.tags.nodejs',
      'experience.tags.react',
    ],
  },
  {
    id: 'dass',
    company: 'Grupo Dass — Sport & Style',
    locationKey: 'experience.location.vdc',
    periodKey: 'experience.dass.period',
    titleKey: 'experience.dass.title',
    descriptionKey: 'experience.dass.description',
    tagKeys: [
      'experience.tags.support',
      'experience.tags.networks',
      'experience.tags.training',
      'experience.tags.hardware',
    ],
  },
]
