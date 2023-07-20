/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly  RENDERER_VITE_NODE_ENV: string
  readonly  RENDERER_VITE_SERVER_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}