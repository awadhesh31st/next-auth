'use client'

import React from 'react'
import { useSession } from 'next-auth/react'

const InformationTitle = () => {
    const { data } = useSession()

    const userWelcomeMessage = `Hi, ${data?.user?.name}`
    const cardMessage = 'Next Auth Providers'

    return (
        <h5 className="flex items-center gap-3 text-3xl font-bold text-yellow">
            <span>{data ? userWelcomeMessage : cardMessage}</span>
            <span>{data ? '🎉' : '🚀'}</span>
        </h5>
    )
}

export default InformationTitle
