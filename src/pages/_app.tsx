import { AppProps } from 'next/dist/shared/lib/router/router';
import { GlobalStore } from '~/store/Global';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStore.Provider>
      <DefaultSeo
        defaultTitle="栗崎園"
        canonical="https://kurisaki-en.com/"
        description="お茶農家 栗崎園のホームページ"
        openGraph={{
          type: 'website',
          title: '栗崎園',
          description: 'お茶農家 栗崎園のホームページ',
          site_name: '栗崎園',
          url: 'https://kurisaki-en.com',
          images: [
            {
              url: '/image/main/home.JPG',
              width: 800,
              height: 600,
              alt: '栗崎園',
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </GlobalStore.Provider>
  );
}

export default MyApp;
