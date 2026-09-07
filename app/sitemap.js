export const dynamic = 'force-static';

const SITE_URL = 'https://iamsuriyan.github.io/Portfolio/';

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
