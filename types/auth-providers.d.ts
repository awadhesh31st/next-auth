export type AuthProvidersProps = {
    data: Providers[]
}

export type ProviderProps = {
    title?: string
    icon?: React.ReactNode
    provider?: string
    devMode?: 'dev' | 'prod'
}
