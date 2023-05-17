import React from 'react'
import Image from 'next/image'

import authImage from '../public/image/logo-sm.png'

export type InformationTitleProps = {
    content?: string
}

const InformationTitle: React.FC<InformationTitleProps> = ({ content }) => {
    const cardLogo = content ? content : authImage

    return (
        <h5 className="flex items-center justify-center gap-3 text-3xl font-bold text-yellow">
            <Image
                src={cardLogo || ''}
                alt="next-auth"
                width={100}
                height={100}
                className="mb-4 rounded-full"
            />
        </h5>
    )
}

export default InformationTitle
