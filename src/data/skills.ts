export type SkillGroup = {
  id: string
  titleKey: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    titleKey: 'skills.groups.frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Vite',
      'Tailwind',
      'Sass',
      'Radix UI',
      'Storybook',
    ],
  },
  {
    id: 'mobile',
    titleKey: 'skills.groups.mobile',
    items: ['React Native', 'Expo', 'WatermelonDB', 'BLE', 'Tauri (Rust)'],
  },
  {
    id: 'backend',
    titleKey: 'skills.groups.backend',
    items: [
      'Node.js',
      'NestJS',
      'Fastify',
      'Python',
      'FastAPI',
      'Zod',
      'Pydantic',
      'REST',
      'Swagger',
    ],
  },
  {
    id: 'data',
    titleKey: 'skills.groups.data',
    items: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'RabbitMQ',
      'Kafka',
      'BullMQ',
      'MQTT',
    ],
  },
  {
    id: 'embedded',
    titleKey: 'skills.groups.embedded',
    items: [
      'Sistemas Embarcados',
      'Firmware (C/C++)',
      'Microcontroladores',
      'ESP-IDF',
      'OpenCV',
      'ONNX / YOLO',
      'Visão Computacional',
    ],
  },
  {
    id: 'devops',
    titleKey: 'skills.groups.devops',
    items: [
      'Docker',
      'Nginx',
      'Certbot',
      'Prometheus',
      'Grafana',
      'Sentry',
      'Vitest',
      'pytest',
      'GitHub Actions',
    ],
  },
]
