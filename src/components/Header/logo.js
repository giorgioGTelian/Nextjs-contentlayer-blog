//import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profileImg from "@/public/profile-img.png"

const logo = () => {
    return (
        <Link href={"/"}>
            <div className="flex items-center justify-center">
                <Image src={profileImg} alt="Giorgio" className='w-full h-auto rounded-full' />
            </div>
        </Link>
    )
}

export default logo