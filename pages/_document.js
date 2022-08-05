import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
   return (
      <Html>
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
               href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap"
               rel="stylesheet"
            />
         </Head>
         <span id="top"></span>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
