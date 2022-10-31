import React, { ReactElement } from "react";
import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document';

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
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="theme-color" content="#000000"/>
          <meta name="description" content="André Rossner"/>
          <title>André Rossner</title>
        </Head>
        <body>

        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}