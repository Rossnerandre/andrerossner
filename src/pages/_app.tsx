// scroll bar
import 'simplebar/src/simplebar.css';

import type {AppProps} from 'next/app'
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider, EmotionCache} from '@emotion/react';
import index from '../theme';
import Head from 'next/head';
import {NextPage} from "next";
import React, {ReactNode, ReactElement} from "react";
import createEmotionCache from '../theme/createEmotionCache';
import Script from "next/script";

const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}


function MyApp(props: MyAppProps) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  const analytics = (
    <Script id="gtag" strategy="afterInteractive" dangerouslySetInnerHTML={{
      __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-KLNSZS4');`
    }}></Script>
  )

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>André Rossner</title>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
      </Head>
      {analytics}
      <noscript dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KLNSZS4"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`
      }}></noscript>
      <ThemeProvider theme={index}>
        <CssBaseline/>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
