'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({
  href,
  children,
  className,
}: Readonly<{
  href: string;
  children: React.ReactNode;
  className?: string;
}>) {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname !== '/' && pathname.startsWith(href));
  return (
    <Link href={href} className={cn('transition-colors text-sm duration-200 text-gray-600 hover:text-purple-500', 
      className,
      isActive && 'text-purple-600'
    )}>
      {children}
    </Link>
  );
}