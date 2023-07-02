# suitter-mvp

sui move で作る Twitter アプリを構成する最小限のソースコードをまとめてリポジトリです。

## 動かし方

- インストール

  ```bash
  npm install
  ```

- コントラクトのビルド

  ```bash
  npm run contract:build
  ```

- コントラクトのデプロイ(testnet)

  ```bash
  npm run contract:deploy
  ```

  実際にデプロイしたコントラクトの情報(ブロックエクスプローラー上)  
  [0x05721f5a435a62b101bd86a3f45883baecf4b3709b0ed1bea380bbc1ef1d6fca](https://suiscan.com/object/0x05721f5a435a62b101bd86a3f45883baecf4b3709b0ed1bea380bbc1ef1d6fca?network=testnet)

  オブジェクト情報は下記の通り
  [0x5db97518a2e99df8abf0aca0ef0173907732efed02bfb9356a7baa4198d9df60](https://suiexplorer.com/object/0x5db97518a2e99df8abf0aca0ef0173907732efed02bfb9356a7baa4198d9df60?network=testnet)

- フロントエンド起動の準備

  `pkgs/frontend`配下に`.env.local`ファイルを作成し、下記内容を記載する。

  もしコントラクトをデプロイしていなければ、`NEXT_PUBLIC_DAPP_PACKAGE`の値は、`0x05721f5a435a62b101bd86a3f45883baecf4b3709b0ed1bea380bbc1ef1d6fca`とすること。

  ```txt
  NEXT_PUBLIC_DAPP_PACKAGE=<前のコマンドでデプロイしたコントラクトのアドレスをここに入力する。>
  NEXT_PUBLIC_DAPP_MODULE=suitter
  NEXT_PUBLIC_SUI_NETWORK=testnet
  ```

- フロントエンドのビルドコマンド

  ```bash
  npm run frontend:build
  ```

- フロントエンドの起動コマンド

  ```bash
  npm run frontend:dev
  ```
