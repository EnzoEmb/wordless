// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

          <title>Wordless - Wordle en español infinito</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
