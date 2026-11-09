export const profile = {
  name: 'Ronielli',
  fullName: 'Ronielli Oliveira de Jesus',
  initials: 'RJ',
  titleKey: 'hero.title',
  avatar: '/avatar.webp?v=8',
  avatarFallback: '/avatar.jpg?v=8',
  email: 'eu@ronielli.com',
  github: 'https://github.com/ronielli',
  linkedin: 'https://www.linkedin.com/in/ronielli/',
  instagram: 'https://www.instagram.com/ronielli_jesus/',
  facebook: 'https://www.facebook.com/ronielli.jesus',
  location: {
    city: 'Vitória da Conquista',
    state: 'BA',
    country: 'Brasil',
  },
  company: {
    name: 'Intuitiva',
    url: 'https://intuitiva.io',
  },
  /** keys under hero.roles.* */
  roleKeys: ['fullstack', 'mobile', 'embedded', 'vision'] as const,
  stats: [
    { value: '12+', labelKey: 'about.stats.years' },
    { value: '5+', labelKey: 'about.stats.company' },
    { value: '30+', labelKey: 'about.stats.techs' },
  ],
}
