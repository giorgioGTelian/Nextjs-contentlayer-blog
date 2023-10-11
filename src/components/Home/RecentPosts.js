import { sortBlogs } from '@/src/utils';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

const RecentPosts = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs);
    return (
        <section className='w-full mt-32 px-32 flex flex-col items-center justify-center'>
            <h2 className='w-full inline-block font-bold text-4xl'>
                Recent Posts
            </h2>
            
        </section>
    )
}

export default RecentPosts