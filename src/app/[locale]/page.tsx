// src/app/[locale]/page.tsx
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('Home');

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </main>
  );
}
