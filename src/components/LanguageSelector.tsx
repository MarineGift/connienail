'use client';
import { useRouter, usePathname } from 'next-intl/client';

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  const changeLanguage = (e) => {
    const nextLocale = e.target.value;
    router.replace(pathname.replace(`/${locale}`, `/${nextLocale}`));
  };

  return (
    <select onChange={changeLanguage} defaultValue={locale} className="border p-1 rounded">
      <option value="en">EN</option>
      <option value="ko">KO</option>
    </select>
  );
}
