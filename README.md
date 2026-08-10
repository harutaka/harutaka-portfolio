# harutaka-portfolio

Blumeで構築したポートフォリオサイトです。

## 開発

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

生成物は`dist/`に出力されます。`main`ブランチへのpush時はGitHub ActionsからGitHub Pagesへデプロイされます。
