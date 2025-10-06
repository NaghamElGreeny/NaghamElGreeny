import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { cookies } from 'next/headers';
import { getMessages } from 'next-intl/server';
import { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Nagham ElGreeny',
  description: 'this is my portfolio',
  icons: {
    icon: '/assets/icon.png',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  const appCookies = await cookies();
  const themeMode = appCookies.get('modeLayout')?.value ?? '';

  return (
    <html className={themeMode} lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>{/* <link rel="icon" href={webSettings.website_fav_icon || "/logo.png"} /> */}</head>
      <body className="flex flex-col">
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
