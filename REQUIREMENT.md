# Harutaka Portfolio Blume移行 要件定義

## 1. 背景

既存のNext.js製ポートフォリオサイトを、更新・管理を簡易化するためBlume製のドキュメントサイトへ移行する。

移行前のNext.jsソースは、移行対象の内容・画像・既存ページ構成を確認するための参照資料として扱う。

## 2. 目的

- ポートフォリオの文章・構成・作品情報をMDXで管理できるようにする
- Reactコンポーネントの保守対象を減らす
- Blumeの組み込みコンポーネントを活用し、視認性と更新性を両立する
- GitHub Pagesで静的サイトとして公開する

## 3. 技術要件

- ドキュメントのルートは`docs/`
- コンテンツはMDX形式で作成する
- Blumeのバージョンは`1.4.2`を基準とする
- 静的ビルドは`blume build`で実行する
- パッケージ管理とスクリプト実行にはBunを使用する
- 既存の`public/`配下の画像を継続利用する

## 4. トップページ

トップページは`docs/index.mdx`とする。

Profile、Skill、Contactは別ページに分割せず、`index.mdx`内の見出しとして配置する。

### 4.1 Profile

- `## Profile`見出しを使用する
- Profileの経歴はBlume組み込みの`Steps`を使用する
- 経歴は以下の内容を移行する
  - 2009: 研究開発
  - 2011: Androidアプリのシステムテスト
  - 2013: Webアプリ開発
  - 2016: 組み込みWebアプリ開発
  - 2022: IoT向けAPI標準化と開発プロセス革新
- Profile画像には`public/img/harutaka_icon_360.png`を使用する
- Profile画像はデスクトップ表示で160px程度とする
- デスクトップでは、Profile見出し・経歴と同じ左端からProfileブロックを開始する
- 画像の右側に紹介文を配置する
- 紹介文は本文の残り幅を使用し、上部説明文や経歴の文章と右端を揃える
- モバイルでは画像と紹介文を縦積みにする

### 4.2 Skill

- `## Skill`見出しを使用する
- 4カテゴリをBlume組み込みの`Card`で表示する
  - Frontend
  - Backend
  - DevOps
  - etc
- カテゴリ見出しはBlume組み込みの`Icon`とタイトルを同一行に表示する
- アイコンとタイトルの間に意図しない改行を入れない
- カテゴリごとの説明文を表示する
- 各技術名と経験年数を表示する
- 星による数値評価は表示しない
- 経験年数は必要に応じてBlume組み込みの`Badge`で表示する
- デスクトップでは2列、モバイルでは1列に再配置する
- 現在の試作で使用しているカテゴリ用アイコンは以下を基準とする
  - Frontend: `pencil`
  - Backend: `server`
  - DevOps: `settings`
  - etc: `bar-chart-3`

### 4.3 Contact

- `## Contact`見出しを使用する
- 問い合わせ方法はX/TwitterのDMとする
- アカウントは`@harutaka_ini`
- Profileと同じ`public/img/harutaka_icon_360.png`を使用する
- 外部リンクは新しいタブで開く

## 5. Works

Worksは`docs/works/`に配置する。ディレクトリ名・URLは小文字の`works`を使用する。

### 5.1 ページ構成

```text
docs/
  works/
    detective.mdx
    htmlrag.mdx
    portfolio.mdx
    grpchealth.mdx
    meta.ts
```

### 5.2 公開ページ

以下の3ページを公開する。

- `detective.mdx`
- `htmlrag.mdx`
- `portfolio.mdx`

### 5.3 非公開ページ

- `grpchealth.mdx`は移行対象に含める
- frontmatterに`draft: true`を設定する
- 本番ビルドから除外する
- サイドバーのWorks配下からはリンクしない
- 開発環境では内容確認できる状態にする

### 5.4 Worksページの共通構成

各Workページは基本的に以下の構成とする。

1. 作品画像
2. URL
3. 説明
4. 使用した技術

作品画像は既存画像を継続利用する。

| Work | 画像 |
| --- | --- |
| detective | `public/img/works/detective_overview.jpg` |
| htmlrag | `public/img/works/html_rag_optimizer.png` |
| portfolio | `public/img/works/portfolio_overview.jpg` |
| grpchealth | `public/img/works/gprc_health_check.jpg` |

## 6. ナビゲーション

- Blumeの自動生成サイドバーを基本とする
- Worksフォルダは`meta.ts`で表示名、順序、アイコンを設定する
- ページごとに`sidebar.icon`を設定する
- サイドバーのアイコンはBlumeのLucide由来組み込みアイコンを使用する
- Profile、Skill、Contactはトップページ内の見出しであるため、左サイドバーの個別ページリンクにはしない
- Profile、Skill、Contactへの移動はページ内目次を利用する

## 7. Blume組み込みコンポーネント

用途に応じて、以下の組み込みコンポーネントを積極的に利用する。

- `Steps`: Profileの経歴
- `Card`: Skillのカテゴリ、Contactなどの情報ブロック
- `Icon`: Skill見出し、サイドバー、リンクの補助アイコン
- `Badge`: 経験年数や補足情報
- `Columns`: Skillカードなどのレスポンシブな複数列表示
- `Tabs`、`Accordion`などは、視認性や情報量の改善に有効な場合のみ採用する

## 8. 画像要件

- ProfileとContactでは`harutaka_icon_360.png`を共用する
- Worksでは既存の作品画像を共用する
- 既存画像の内容を変更しない
- `import.meta.env.BASE_URL`を考慮し、GitHub Pagesのベースパス配下でも画像が正しく読み込めるようにする
- 画像の代替テキストを設定する

## 9. GitHub Pagesデプロイ

現在のVercelデプロイからGitHub Pagesへ移行する。

対象リポジトリは`harutaka/harutaka-portfolio`とする。

### 9.1 公開URL

GitHub Pagesのプロジェクトサイトとして、以下を想定する。

- サイトURL: `https://harutaka.github.io/harutaka-portfolio`
- ベースパス: `/harutaka-portfolio`

### 9.2 Blume設定

`deployment.site`にはホストのオリジンを設定し、プロジェクトサイトのパスは`deployment.base`で設定する。
`blume.config.ts`には以下の設定を追加する。

```ts
deployment: {
  site: "https://harutaka.github.io",
  base: "/harutaka-portfolio",
},
github: {
  owner: "harutaka",
  repo: "harutaka-portfolio",
  branch: "main",
},
```

### 9.3 GitHub Actions

- `main`ブランチへのpushを契機にデプロイする
- Bunをセットアップして使用する
- 依存関係は既存の`bun.lock`を基準に`bun install --frozen-lockfile`で再現可能な形でインストールする
- `blume build`を実行する
- ビルド成果物の`dist/`をGitHub Pagesへデプロイする
- GitHubリポジトリのPages設定はGitHub Actionsを使用する

## 10. 移行時の制約

- 移行完了までは`src/`、Next.js設定、既存画像を削除しない
- 移行元のNext.jsページを参照し、文章・リンク・画像の抜け漏れを防ぐ
- 既存の作品URLと新しいWorksページのURLを対応付ける
- `grpchealth`が本番の一覧や検索結果に表示されないことを確認する
- 不要なReactコンポーネントやNext.js依存関係の削除は、全ページ移行後に行う

## 11. 受け入れ条件

### コンテンツ

- `docs/index.mdx`にProfile、Skill、Contactが存在する
- Profileの経歴がStepsで表示される
- ProfileとContactに同じイメージ画像が表示される
- Worksの3公開ページが表示される
- `grpchealth`が本番ビルドから除外される

### UI

- Profile画像がデスクトップで過度に大きくない
- Profile画像と紹介文のブロックが左寄せされている
- 紹介文の右端が上部説明文・経歴の本文幅と揃っている
- Skillカードのアイコンとタイトルが同一行に表示される
- Skillカードがデスクトップ2列、モバイル1列で表示される
- モバイル表示で横方向のスクロールが発生しない
- サイドバーのページリンクにLucideアイコンが表示される

### ビルド・デプロイ

- `bun run build`または同等のBlumeビルドが成功する
- GitHub Pages上でトップページ、Worksページ、画像が表示される
- ベースパス付きの内部リンクが正しく動作する
- sitemap、robots、検索インデックスが本番URLに対応する

## 12. 現在の実装状況

- `docs/index.mdx`のProfile・Skill試作: 完了
- Profile画像サイズ・左寄せ・本文幅調整: 完了
- SkillカードUIの試作: 完了
- Profile経歴のSteps化: 完了
- WorksページのMDX移行: 完了
- Contactの正式移行: 完了
- サイドバー設定: 完了
- GitHub Pages用GitHub Actions: 完了
- GitHub Pagesベースパス対応: 完了
- Next.js関連コードの整理・削除: 完了
