import { type PageProps } from "$fresh/server.ts"
export default function App({ Component }: PageProps) {
  return (
    <html lang="ja" data-theme="light">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>harutaka portfolio</title>
        <link rel="stylesheet" href="/styles.css" />
        <meta
          name="description"
          content="はるたかのポートフォリオサイトです。JavaScript系のWebアプリ制作はお任せください。"
        />

        <meta property="og:title" content="harutaka portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harutaka-portfolio.deno.dev" />
        <meta property="og:image" content="https://harutaka-portfolio.deno.dev/img/works/portfolio_overview.jpg" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  )
}
