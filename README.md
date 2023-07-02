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
  [0xe9692d27be3b2b88c4879314aed47be84268f8f1c41d5a863b8ea846280c989c](https://suiscan.com/object/0xe9692d27be3b2b88c4879314aed47be84268f8f1c41d5a863b8ea846280c989c?network=testnet)
