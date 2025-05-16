import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html lang="ja" data-theme="light">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="harutaka portfolio" />
        <meta property="og:url" content="https://harutaka-portfolio.vercel.app" />
        <meta property="og:description" content="はるたかのポートフォリオサイトです。JavaScript系のWebアプリ制作はお任せください。" />
        <meta property="og:image" content="https://harutaka-portfolio.vercel.app/img/works/portfolio_overview.jpg" />
        <meta name="description" content="はるたかのポートフォリオサイトです。JavaScript系のWebアプリ制作はお任せください。" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>harutaka portfolio</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="canonical" href="https://harutaka-portfolio.vercel.app" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
