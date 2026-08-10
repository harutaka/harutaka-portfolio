# harutaka-portfolio

Blumeで構築したポートフォリオサイトです。

## 開発環境

依存関係をインストールします。

```bash
bun install
```

開発サーバーを起動します。

```bash
bun run dev
```

本番用の静的ファイルを生成します。

```bash
bun run build
```

生成物は`dist/`に出力されます。

## コンテンツ

- `docs/index.mdx`: Profile、Skill、Contactを含むトップページ
- `docs/works/`: Worksページ
- `public/`: コンテンツで使用する画像などの静的ファイル

Worksページを追加・変更する場合は、必要に応じて`docs/works/meta.ts`の表示順やLucideアイコンも更新します。

## デプロイ

`main`ブランチへのpush時にGitHub Actionsが実行され、GitHub Pagesへデプロイされます。

- Site: [https://harutaka.github.io/harutaka-portfolio](https://harutaka.github.io/harutaka-portfolio)
- Build output: `dist/`
