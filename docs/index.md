---
layout: doc

hero:
  name: "職務経歴書"
  text: "A VitePress Site"
---
# 職務経歴書

## 基本情報

|key|value|
|---|---|
| 氏名 | 大出達也 |
| 生年月日 | 1991/07/14 |

## 各種アカウント
<div class="space-x-3">
  <a class="inline-block" href="https://github.com/machamp0714" target="_blank"><img alt="Github" src="https://img.shields.io/badge/machmap-%2312100E.svg?&style=flat-square&logo=Github&logoColor=white" /></a>
  <a class="inline-block" href="https://zenn.dev/machamp" target="_blank"><img alt="Zenn" src="https://img.shields.io/badge/machamp-3EA8FF.svg?&style=flat-square&logo=Zenn&logoColor=white" /></a>
</div>

## 技術スタック

<div class="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">

<div>

| 言語 | 経験年数 |
| --- | --- |
| <img alt="Ruby" src="https://img.shields.io/badge/-Ruby-CC342D?style=flat-square&logo=Ruby&logoColor=white" /> | 4年 |
| <img alt="Terraform" src="https://img.shields.io/badge/-Terraform-844fba?style=flat-square&logo=terraform&logoColor=white" /> | 2年 |
| <img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" /> | 1年 |

</div>

<div>

| フレームワーク | 経験年数 |
| --- | --- |
| <img alt="Ruby on Rails" src="https://img.shields.io/badge/-Rails-CC0000?style=flat-square&logo=Ruby-on-Rails&logoColor=white" /> | 4年 |
| <img alt="AWS" src="https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=Amazon-AWS&logoColor=white" /> | 3年 |
| <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=React&logoColor=white" /> | 1年 |

</div>

</div>

## この先やりたいこと

1. 領域問わず担当することが多かったですが、今後はバックエンドの専門性を高めていきたいと考えています
2. 社内システムの開発に関わることが多かったので、多くのユーザーに利用して頂けるサービスの開発に関わってみたいです
3. ただ言われた通りに開発するのではなく、どうすればユーザーのためになるのか一緒に考えていけるチームで仕事がしたいです
4. 新しい挑戦(技術・制度)に対して積極的な環境だと嬉しいです

## 職務経歴詳細

### ラフノート株式会社（2020/05〜現在）

:::details **研修予約システムの開発・運用**
- 期間: 2023/01~現在
- 役割: 開発リーダー
- メンバー: 3名
- 概要: 研修の予約システム
- 技術スタック:
  - バックエンド: Rails, Ruby, RSpec, Sidekiq, rswag
  - フロントエンド: React, Tanstack Query, React Hook Form, Storybook, TypeScript, Mock Service Worker, TailwindCSS
  - インフラ: ECS Fargate, ecspresso, terraform, Terraform Cloud
  - セキュリティ: WAF, Security Hub
  - その他: Docker, Open API, Stoplight, GitHub Actions
- 成果:
  - 要件定義から技術選定、全体設計、実装、インフラの構築まで一貫して担当
  - Okta OpenID Connect を利用してセキュアな認証基盤を実現
  - スキーマ駆動開発の導入により、フロントエンド/バックエンドの並行開発を実現し、開発効率を向上
  - OpenAPI定義からTypeScriptの型を自動生成し、型安全性を担保
  - bullet proof reactのアーキテクチャパターンを採用し、保守性と拡張性の高いフロントエンド設計を実現
  - IaC を実践し、ECS Fargateでコンテナ基盤を構築
  - GitHub Actions と ecspresso を活用し、デプロイを自動化
:::

:::details **助成金支援サービスの開発・運用**

- 期間: 2021/04~2022/12
- 役割: コーディング、レビュー、インフラ
- メンバー: 3名
- 概要: 助成金申請のための経営支援システム
- 技術スタック:
  - バックエンド: Rails, Ruby, Sidekiq, RSpec
  - フロントエンド: jQuery, TypeScript, pug, Storybook
  - インフラ: ECS Fargate, Workspaces, terraform, Terraform Cloud
  - セキュリティ: WAF
  - その他: Docker, Fluent Bit, GitHub Actions, Cloudinary
- 成果
  - 開発メンバーとして、会員向け機能の実装を担当
  - IaC の導入により、GitHub Flowに基づくインフラ変更の自動化を実現
  - Fluent Bitを活用しログ管理基盤を構築
  - セキュリティチェックシートに準拠したインフラ構築により、高いセキュリティ水準を確保
  - AWS Workspacesを活用した安全な管理画面アクセス基盤を構築
:::

:::details **社内ポータルサイトのリニューアル・運用**

- 期間: 2020/06~現在
- 役割: 要件定義、コーディング、レビュー、インフラ
- メンバー： 2名
- 概要: phpで実装された社内向けシステムのRailsへのリプレイス
- 技術スタック:
  -  バックエンド: Rails, Ruby, Sidekiq, RSpec
  -  フロントエンド: JavaScript, jQuery
  -  インフラ: EC2, nginx
  -  その他: Docker, CircleCI, capistrano
- 成果:
  - レガシーシステムのリプレイスをリードし、Rails で新システムを実現
  - データベース設計の刷新とデータ移行を完遂
  - 旧サーバ上の静的ファイルを全てBoxへ移行
  - TinyMCEを活用し、WYSIWYGエディタの導入
  - CircleCIとcapistranoを利用しデプロイを自動化
  - EC2上にRailsの環境を構築
:::

:::details **業務の自動化を支援するツールの開発・運用**

- 期間: 2020/05〜2021/09
- メンバー: 1名
- 概要: スクレイピング・APIを利用し顧客の業務を自動化するツールの開発
- 技術スタック:
  - バックエンド: Rails, Ruby, Sidekiq, RSpec
  - インフラ:
    - EC2
  - その他: GAS
- 成果
  - 数百サイトに対応したスクレイピング機能の実装し、手作業での収集工数を削減
  - Slackを活用したバッチの再試行機能の実装
:::
