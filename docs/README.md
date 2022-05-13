# 職務経歴書

## 基本情報

|key|value|
|---|---|
| 氏名 | 大出達也 |
| 生年月日 | 1991/07/14 |

---

## 各種アカウント
<p>
<a href="https://github.com/machamp0714" target="_blank"><img alt="Github" src="https://img.shields.io/badge/machmap-%2312100E.svg?&style=flat-square&logo=Github&logoColor=white" /></a>
<a href="https://twitter.com/machamp0714" target="_blank"><img alt="Twitter" src="https://img.shields.io/badge/@machmap-%231DA1F2.svg?&style=flat-square&logo=twitter&logoColor=white" /></a>
<a href="https://zenn.dev/machamp" target="_blank"><img alt="Zenn" src="https://img.shields.io/badge/machamp-3EA8FF.svg?&style=flat-square&logo=Zenn&logoColor=white" /></a>
</p>

---

## 職務要約

現職のラフノート株式会社には Web エンジニアとして参画。Ruby on Rails を利用した Web アプリケーションの開発、
AWS・Terraform を利用したインフラの構築及び運用、要件定義を主に担当している。

## 保有スキル

現職ではアプリケーション開発を中心にセキュリティを考慮した AWS の設計構築や、CICD の導入に寄与しました。
フロントエンドにも関心を持ち、自身でキャッチアップをしています。

---

## 技術スタック

### 言語

<p>
  <img alt="Ruby" src="https://img.shields.io/badge/-Ruby-CC342D?style=flat-square&logo=Ruby&logoColor=white" />
  <img alt="Terraform" src="https://img.shields.io/badge/-Terraform-844fba?style=flat-square&logo=terraform&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white" />
  <img alt="Go" src="https://img.shields.io/badge/-Go-00ADD8?style=flat-square&logo=Go&logoColor=white" />
</p>

### フレームワーク・その他

<p>
  <img alt="Ruby-on-Rails" src="https://img.shields.io/badge/-Rails-CC0000?style=flat-square&logo=Ruby-on-Rails&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=React&logoColor=white" />
  <img alt="AWS" src="https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=Amazon-AWS&logoColor=white" />
  <img alt="Docker" src="https://img.shields.io/badge/-Docker-46a2f1?style=flat-square&logo=docker&logoColor=white" />
</p>

---

## 職務経歴詳細

### ラフノート株式会社（2020/05〜現在）

**補助金・助成金支援サービスの新規開発・運用（2021/04〜現在）**

Ruby on Rails による Web アプリケーションの開発、Terraform によるインフラの構築を担当しました。

**プロジェクト規模**
  - メンバー: 3 名

**開発内容**
- Rails を利用した会員画面の実装
- Fluent Bit を利用してログの配信先を分離する仕組みの構築
- Workspaces からのみ管理画面にアクセス出来る仕組みの構築
- Terraform の導入
- github actions を利用したインフラの CI/CD パイプラインの構築
- AWS を利用したインフラの構築
  - VPC / EC2 / EIP / ALB / ECS / ECR / RDS / KMS / ElastiCache / Route53 / Workspaces
    VPN / CloudWatch / EventBridge / SNS / Lambda / WAF / S3 / SecretsManager / FireLens

**技術的に工夫したこと**

Terraform を導入する以前は、インフラの構築をマネジメントコンソールから手動で行っていたので、
例え似た構成であっても毎回手動で構築する必要がありました。そこに課題を感じ、構築を自動化するために
Terraform の導入を決断しました。またアプリケーションの開発同様 Github Flow に基づいて、インフラの開発を
進められる環境を整えました。

**成果**

開発上の要件以外にも管理画面に対して IP 制限を掛ける、ログを 7 年間保存する等、セキュリティチェックシートへの
対応もありましたが、問題なく診断を通すことが出来ました。また、他のプロジェクトでも Terraform を使い回すことで
構築に掛かる時間を削減することが出来ました。

**社内ポータルサイトのリニューアル・運用（2020/06〜現在）**

Ruby on Rails による社内ポータルサイトのリニューアル、インフラの構築を担当しました。

**プロジェクト規模**
  - メンバー： 1 名

**開発内容**
- TinyMCE を使ったエディタの実装
- TinyMCE のプラグインの実装
- Okta を利用した認証機能
- Box へのファイルアップロード機能
- HTML を Slack Markdown に変換する機能の実装
- 旧データベースの移管作業
- AWS を利用したインフラの構築
  - VPC / EC2 / ALB / RDS / ElastiCache / Route53 / ACM / EIP

**技術的に工夫したこと**

開発を安全に継続し、手動での動作検証のコストを削減するために CI/CD パイプラインを
CIrcleCI を利用して構築し、自動テスト環境を整えました。また ViewModel パターンを使用して
View からもロジックを排除する等、責務を適切に分割することを心掛けて開発を進めました。


**成果**

エンジニアとして初めて参画したプロジェクトですが、要件定義から開発及びインフラの構築まで自分で主導し、
リリースまでやり切ることが出来ました。また、定期的に新規の案件をご依頼頂ける関係も構築することが出来ました。

**業務の自動化を支援するツールの開発・運用（2020/05〜2021/06）**

**プロジェクト規模**
  - メンバー： 1 名

**開発内容**
- Ruby on Rails によるバッチの開発
- スクレイピングの実装
- GAS, ChatworkAPI, SlackAPI など様々な API を利用した業務の自動化
- AWS を利用したインフラの構築
  - VPC / EC2 / RDS / ElastiCache / EIP

**技術的に工夫したこと**

スクレイピングや外部のサービスに依存しており、バッチがネットワークエラー等により、
定期的に失敗してしまうという課題があったので、Slack API を利用して Slack 上でバッチを
再実行出来る仕組みを構築しました。

**成果**

顧客が 100 以上の Web サイトにログインし、 CSV をダウンロードし、スプレッドシートへ
移管するという業務を全て自動化することが出来ました。また例えバッチが失敗したとしても、
早急に復旧出来る体制を整えることが出来ました。

---

## 業務外活動

### 個人開発

| プロジェクト名 | 概要 | URL |
| --- | --- | --- |
| Terraform TimeCrowd Provider | 自作 Provider に興味があり開発しました | https://github.com/machamp0714/terraform-provider-timecrowd |
| LoveKitchen | 業務未経験の時に作ったポートフォリオ | https://github.com/machamp0714/love_kitchen |

### 技術記事

- **Zenn**
  - 2022/01 現在 10 記事 121 いいね
  - https://zenn.dev/machamp

---

### この先やりたいこと

現職では開発業務だけでなく顧客との MTG から始まり、要件定義からリリース及び運用まで一貫した開発経験を
積むことが出来ました。また Terraform を社内に導入する経験まで得られたことには大変感謝しているのですが、
今後は、プロダクトの成長に伴い課題が変わっていく環境で開発経験を積みたい身としては、急成長しているフェーズの
企業にてこれまで培った開発経験を活かして、職能で役割を縛られることがなく仕事が出来る環境を求めて転職活動に取り組んでいます。

### 希望条件

- 現在地方在住のためリモートワークを希望しています
