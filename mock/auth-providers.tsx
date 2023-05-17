import React from 'react'

import { ProviderProps } from '@/types/auth-providers'
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa'

export const authProvidersData: ProviderProps[] = [
    {
        title: 'GitHub',
        icon: <FaGithub />,
        provider: 'github',
        devMode: 'prod',
    },
    {
        title: 'Google',
        icon: <FaGoogle />,
        provider: 'google',
        devMode: 'prod',
    },
    {
        title: 'Twitter',
        icon: <FaTwitter />,
        provider: 'twitter',
        devMode: 'prod',
    },
]
