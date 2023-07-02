export const SUI_PACKAGE = process.env.NEXT_PUBLIC_DAPP_PACKAGE!; // changed here.
export const SUI_MODULE = process.env.NEXT_PUBLIC_DAPP_MODULE!; // changed here.
export const NETWORK = process.env.NEXT_PUBLIC_SUI_NETWORK!;
export const MODULE_URL = `https://explorer.sui.io/object/${SUI_PACKAGE}?network=${NETWORK}`

// Suitter用のロジックを実装したパッケージIDを指定する。
export const SUITTER_PACKAGE_ID = '0x05721f5a435a62b101bd86a3f45883baecf4b3709b0ed1bea380bbc1ef1d6fca'
// Suitter Posts用のオブジェクトIDを指定する。
export const SUITTER_RECENT_POSTS_OBJECT_ID = '0x5db97518a2e99df8abf0aca0ef0173907732efed02bfb9356a7baa4198d9df60'
