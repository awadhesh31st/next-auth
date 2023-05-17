import { useSession } from 'next-auth/react'
import React from 'react'

export type DescriptionProps = {
    content?: string
}

const Description: React.FC<DescriptionProps> = ({ content }) => {
    return (
        <p className="text-base font-light text-center text-biege">
            {content
                ? content
                : 'The easiest way to get started is authentication by the Next-Auth. By Connecting with more than one different provider.'}
        </p>
    )
}

export default Description
