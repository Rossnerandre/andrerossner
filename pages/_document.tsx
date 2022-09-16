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

        </Head>
        <body>

        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}