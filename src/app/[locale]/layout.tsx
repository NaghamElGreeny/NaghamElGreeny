import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { cookies } from 'next/headers';
import { getMessages } from 'next-intl/server';
import { Metadata } from 'next';
import '../globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/layout/navbar/Navbar';
import Footer from '@/components/layout/footer/Footer';

export const metadata: Metadata = {
  title: 'Nagham ElGreeny',
  description: 'this is my portfolio',
  icons: {
    icon: '/assets/icon.png',
  },
};
interface RootLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  const appCookies = await cookies();
  const themeMode = appCookies.get('modeLayout')?.value ?? '';

  return (
    <html className={themeMode} lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className="flex flex-col min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
