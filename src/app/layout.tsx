const React = require('react');
const ReactDOM = require('react-dom');
import Script from 'next/script';
import './styles/globals.scss';

if (
  typeof window !== 'undefined' &&
  process.env.NODE_ENV !== 'production'
) {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script
        id="cookieyes-consent-banner"
        strategy="afterInteractive"       
        src={`https://cdn-cookieyes.com/client_data/${process.env.COOKIEYES_WEBSITE_KEY}/script.js`}>
      </Script>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GA_MEASUREMENT_ID}}');
        `}
      </Script>
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${process.env.MS_CLARITY_PROJECT_ID}");
        `}
      </Script>
    </html>
  )
}
