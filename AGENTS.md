# ポートフォリオサイトのBlume化

Next.jsで作成していたポートフォリオサイトを、更新・管理を簡易化するためBlumeを使ったドキュメントサイトへ移行した。

## 使用モジュール

* Blume: 1.4.2
* Bun: 1.3.14

## リポジトリ構成

* `docs/`: ドキュメントサイトのコンテンツ
* `public/`: Profile・Worksなどで使用する画像と静的ファイル
* `blume.config.ts`: Blume設定
* `.github/workflows/deploy.yml`: GitHub Pagesへのデプロイ設定

## 要件
REQUIREMENT.md を参照。
