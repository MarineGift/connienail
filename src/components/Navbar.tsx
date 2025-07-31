'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  return (
    <nav className="bg-white shadow px-4 py-3 flex justify-between items-center">
      <Link href={`/${locale}`} className="text-xl font-bold text-purple-600">
        Connie's Nail
      </Link>
      <div className="flex items-center space-x-4">
        <Link href={`/${locale}/services`} className="text-gray-700 hover:text-purple-500">
          Services
        </Link>
        <Link href={`/${locale}/gallery`} className="text-gray-700 hover:text-purple-500">
          Gallery
        </Link>
        <Link href={`/${locale}/login`} className="text-gray-700 hover:text-purple-500">
          Login
        </Link>
        <LanguageSelector />
      </div>
    </nav>
  );
}
