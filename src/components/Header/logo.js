//import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profileImg from "@/public/profile-img.png"

const logo = () => {
    return (
        <Link href={"/"} className='flex items-center text-dark'>
            <div className="justify-center w-16 overflow-hidden border-solid border-dark mr-4">
                <Image src={profileImg} alt="Luna" className='w-full h-auto rounded-full' />
            </div>
            <span className='font-bold text-xl'>Luna Programming Language</span>
        </Link>
    )
}

export default logo