import Test from '@/components/Test';
import ToggleLang from '@/components/ui/ToggleLang';
import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations('Navbar');

  return (
    <main className="flex w-full h-full flex-col  p-10 bg-white">
      <div className="bg-red-300 p-3 text-center text-xl">
        Test localization in Server
        <br />
        {t('home')}
        <br />
        {t('about')}
        <br />
        {t('skills')}
      </div>
      <Test />
      <ToggleLang />
    </main>
  );
}
