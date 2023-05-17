'use client'

import React, { useEffect, useState } from 'react'
import { cm } from '@/lib/utils'
import { ProviderProps } from '@/types/auth-providers'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FaSpinner } from 'react-icons/fa'

const ActivePill: React.FC<ProviderProps> = ({
    title,
    icon,
    provider,
    devMode,
}) => {
    const { data } = useSession()
    const { email } = data?.user || {}
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        if (!isLoading) {
            setLoading(false)
        }
    }, [email, isLoading])

    const handleClick = () => {
        setLoading(!isLoading)
        if (!data) {
            signIn(provider)
        } else {
            signOut()
        }
    }

    return (
        <div className="flex items-center justify-between px-5 py-4 rounded-lg bg-coal/60 hover:bg-coal">
            <div className="flex items-center gap-2 text-grayLight">
                <span>{icon}</span>
                <span className="text-base font-semiBold">{title}</span>
            </div>
            {isLoading ? (
                <span className="px-4 py-1 text-xs font-light rounded-md cursor-wait bg-orange pill">
                    <FaSpinner className="w-4 h-4 mr-2 animate-spin" />
                </span>
            ) : (
                <>
                    {devMode === 'prod' ? (
                        <span
                            className={cm(
                                'px-4 py-1 text-xs font-light rounded-md cursor-pointer flex',
                                data ? 'bg-green' : 'bg-grayDark'
                            )}
                            onClick={() => handleClick()}
                        >
                            {data ? 'Logout' : 'Login'}
                        </span>
                    ) : (
                        <span className="px-4 py-1 text-xs font-light rounded-md cursor-wait bg-purple">
                            Dev Mode
                        </span>
                    )}
                </>
            )}
        </div>
    )
}

export default ActivePill
