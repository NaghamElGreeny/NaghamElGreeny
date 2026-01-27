import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

export function proxy(request: NextRequest) {
  // const { pathname } = request.nextUrl;
  const response = NextResponse.next();
  const isArabicLocale = request.nextUrl.pathname.startsWith('/ar');

  if (request.nextUrl.pathname.startsWith('/en')) {
    const newPathname = request.nextUrl.pathname.replace('/en', '');
    const url = new URL(request.nextUrl.origin + newPathname);

    return NextResponse.redirect(url);
  }

  response.cookies.set('NEXT_LOCALE', isArabicLocale ? 'ar' : 'en');

  const guestToken = request.cookies.get('guest_token');

  if (!guestToken) {
    const generatedToken = uuidv4();
    response.cookies.set('guest_token', generatedToken, {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
    });
  }

  const handleI18nRouting = createMiddleware(routing);
  const i18nResponse = handleI18nRouting(request);

  // Merge headers and cookies from i18nResponse to response
  i18nResponse.headers.forEach((value, key) => {
    response.headers.set(key, value);
  });

  const setCookieHeaders = i18nResponse.headers.get('set-cookie');
  if (setCookieHeaders) {
    setCookieHeaders.split(',').forEach(cookie => {
      response.headers.append('set-cookie', cookie);
    });
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|public/|assets/images|assets/icons|logo.png|logo.webp|favicon.webp|assets|header.gif|footer_logo.png).*)',
  ],
};
