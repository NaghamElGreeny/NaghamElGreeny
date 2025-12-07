import Link from 'next/link';
import Head from 'next/head';
import { cookies } from 'next/headers';
// import "@/styles/globals.css";
import Image from 'next/image';

export default async function NotFoundPage() {
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'en';
  const isArabic = locale === 'ar';

  return (
    <>
      <Head>
        <title>{isArabic ? 'الصفحة غير موجودة' : 'Page Not Found'}</title>
      </Head>

      <div
        dir={isArabic ? 'rtl' : 'ltr'}
        className="flex min-h-screen items-center justify-center bg-gray-50 px-4"
      >
        <div className="max-w-md text-center">
          <Image
            src="/assets/images/cuate.png"
            width={400}
            height={400}
            alt="404 Not Found"
            className="mx-auto mb-8 w-4/5"
          />
          <h1 className="mb-3 text-4xl font-extrabold text-gray-800">
            404 - {isArabic ? 'الصفحة غير موجودة' : 'Page Not Found'}
          </h1>
          <p className="mb-6 text-lg text-gray-600">
            {isArabic
              ? 'عذرًا، الصفحة التي تبحث عنها غير موجودة.'
              : "Sorry, the page you're looking for doesn't exist."}
          </p>
          <Link href={`/${locale}`}>
            <span className="inline-flex h-10 cursor-pointer items-center justify-center rounded-full bg-[#5A6AE8] px-6 font-medium text-white shadow-md transition hover:bg-[#4e5dd8]">
              {isArabic ? 'العودة للرئيسية' : 'Go to Home'}
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
