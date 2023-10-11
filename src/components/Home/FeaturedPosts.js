import { sortBlogs } from '@/src/utils';
import Image from 'next/image';
import React from 'react'

const FeaturedPosts = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs);
    return (
        <section className='w-full mt-32 px-32 flex flex-col items-center justify-center'>
            <h2 className='w-full inline-block font-bold text-4xl'>
                Featured Posts
            </h2>
            <div className='grid grid-cols-2 grid-rows-2 gap-6 mt-16'>
                <article className='flex flex-col items-start justify-start'>
                    <Image src={sortedBlogs[0].image.filePath.replace("../public", "")} 
                    alt={blogs.title}
                    placeholder={'blur'}
                    blurDataURL={sortedBlogs[0].image.blurhashDataUrl}
                    className='w-full h-full object-center object-cover rounded-3xl -z-10'
                    width={500}
                    height={500}
                    />
                    <h3 className='text-2xl font-bold'>
                        {sortedBlogs[1].title}
                    </h3>
                    <p className='text-xl mt-4'>
                        {sortedBlogs[1].description}
                    </p>
                </article>
                <article className='flex flex-col items-start justify-start'>
                    <h3 className='text-2xl font-bold'>
                        {sortedBlogs[2].title}
                    </h3>
                    <p className='text-xl mt-4'>
                        {sortedBlogs[2].description}
                    </p>
                </article>
            </div>
        </section>
    )
}

export default FeaturedPosts