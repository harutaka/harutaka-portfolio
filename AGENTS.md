# Portfolio Site Guidance

Blume 1.4.2で構築した静的ポートフォリオサイトです。パッケージ管理とスクリプト実行にはBun 1.3.14を使用します。

## Source of Truth

- `docs/index.mdx`: トップページ。Profile、Skill、Contactを含む
- `docs/works/*.mdx`: 公開Worksページとdraftページ
- `docs/works/meta.ts`: Worksのサイドバー表示名、順序、アイコン
- `public/`: Profile・Contact・Worksで使用する画像などの静的ファイル
- `blume.config.ts`: サイト情報、GitHubリポジトリ、GitHub Pagesのデプロイ設定
- `theme.css`: Blumeテーマの追加スタイル
- `.github/workflows/deploy.yml`: GitHub Pagesへのデプロイ

`.blume/`と`dist/`はBlumeが生成するディレクトリです。手動で編集しません。

## Content Rules

- コンテンツは`docs/`配下のMDXで管理する
- Profileの経歴は`Steps`、Skillのカテゴリは`Card`と`Columns`を使用する
- Blume組み込みの`Icon`、`Badge`、その他のコンポーネントを優先する
- Worksのパスは小文字の`works`を使用する
- `grpchealth.mdx`は`draft: true`とし、本番のナビゲーション・検索結果に含めない
- `public/`の画像を変更・移動しない
- GitHub Pagesのベースパスを考慮し、MDX内の画像URLは`import.meta.env.BASE_URL`に対応させる
- 外部リンクを新しいタブで開く場合は`target="_blank"`と`rel="noreferrer"`を設定する

## Commands

```bash
bun install
bun run dev
bun run build
bun run preview
```

BlumeがNode.js 22.12以上を要求するため、CIではNode.js 22.12とBun 1.3.14をセットアップします。

## Deployment

`main`ブランチへのpushでGitHub Actionsを実行し、`dist/`をGitHub Pagesへデプロイします。

- Repository: `harutaka/harutaka-portfolio`
- Site: `https://harutaka.github.io/harutaka-portfolio`
- Base path: `/harutaka-portfolio`
