'use client';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLanguageChange = (newLocale: string) => {
    // 현재 경로에서 언어 코드 부분을 새 언어로 교체
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleLanguageChange('ko')}
        className={`px-3 py-1 rounded ${
          locale === 'ko' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        한국어
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 rounded ${
          locale === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        English
      </button>
      <button
        onClick={() => handleLanguageChange('ja')}
        className={`px-3 py-1 rounded ${
          locale === 'ja' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        日本語
      </button>
      <button
        onClick={() => handleLanguageChange('es')}
        className={`px-3 py-1 rounded ${
          locale === 'es' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        Español
      </button>
    </div>
  );
}
