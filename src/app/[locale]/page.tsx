import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('Home');

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900">{t('title')}</h1>
      <p className="mt-4 text-lg text-gray-600">{t('description')}</p>
    </main>
  );
}
