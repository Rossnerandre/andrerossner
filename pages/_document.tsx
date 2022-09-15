import React, { ReactElement } from "react";
// import Document, {Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext} from 'next/document';
import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document';
import Script from 'next/script'

export default class MyDocument extends Document {

  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render(): ReactElement {
    return (
      <Html lang="pt-BR">
        <Head>
          <Script id="gtag" strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TTM6JWC');`
          }}></Script>
        </Head>
        <body>
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TTM6JWC"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }}></noscript>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}