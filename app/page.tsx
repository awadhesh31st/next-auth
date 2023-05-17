'use client'

import React from 'react'
import { authProvidersData } from '@/mock/auth-providers'
import { signOut, useSession } from 'next-auth/react'

import InformationTitle from '@/components/information-title'
import Description from '@/components/description'
import ActivePill from '@/components/active-pill'
import Note from '@/components/note'
import { FaUser } from 'react-icons/fa'

const LandingPage = () => {
    const { data } = useSession()
    const { name, email, image } = data?.user || {}
    return (
        <div className="container flex items-center justify-center h-screen mx-auto">
            <div className="flex flex-col w-[28rem] gap-3 mx-4 p-7 sm:p-10 rounded-xl bg-charcoal sm:mx-0">
                <InformationTitle content={image || ''} />
                <Description content={email || ''} />
                {!data && (
                    <div className="flex flex-col gap-2 mt-3">
                        {authProvidersData.map((provider, key) => {
                            return <ActivePill {...provider} key={key} />
                        })}
                    </div>
                )}
                {data && (
                    <div className="flex items-center justify-between px-5 py-4 rounded-lg bg-coal/60 hover:bg-coal">
                        <div className="flex items-center gap-4">
                            <span>
                                <FaUser />
                            </span>
                            <span className="font-bold">{name}</span>
                        </div>
                        <span
                            className="flex items-center px-4 py-[2px] text-sm rounded-md cursor-pointer font-regular bg-yellow text-coal"
                            onClick={() => signOut()}
                        >
                            Logout
                        </span>
                    </div>
                )}
                <Note />
            </div>
        </div>
    )
}

export default LandingPage
