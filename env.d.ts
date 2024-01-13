interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_BASE_ROUTE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
