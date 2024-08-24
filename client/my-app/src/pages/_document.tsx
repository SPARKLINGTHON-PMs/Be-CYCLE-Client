import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/android-icon-192x192.png"
        />
        <meta name="theme-color" content="#6200ee" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
