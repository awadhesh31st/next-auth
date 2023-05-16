import React from 'react'
import { authProvidersData } from '@/mock/auth-providers'

import InformationTitle from '@/components/information-title'
import Description from '@/components/description'
import ActivePill from '@/components/active-pill'
import Note from '@/components/note'

const LandingPage = () => {
    return (
        <div className="container flex items-center justify-center h-screen mx-auto">
            <div className="flex flex-col max-w-md gap-3 mx-4 p-7 sm:p-10 rounded-xl bg-charcoal sm:mx-0">
                <InformationTitle />
                <Description />
                <div className="flex flex-col gap-2 mt-3">
                    {authProvidersData.map((provider, key) => {
                        return <ActivePill {...provider} key={key} />
                    })}
                </div>
                <Note />
            </div>
        </div>
    )
}

export default LandingPage
