import { sortBlogs } from '@/src/utils';
import Link from 'next/link';
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
                <article className='group flex flex-col items-start justify-start'>
                    <Image src={sortedBlogs[1].image.filePath.replace("../public", "")} 
                    alt={blogs.title}
                    placeholder={'blur'}
                    blurDataURL={sortedBlogs[1].image.blurhashDataUrl}
                    className='w-full h-full object-center object-cover rounded-3xl -z-10'
                    width={500}
                    height={500}
                    />
                    <Link href={`/blog/${sortedBlogs[1].url}`}>
                    <h3 className='text-2xl font-bold'>
                        <span className='bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                            {sortedBlogs[1].title}
                        </span>
                    </h3>
                    </Link>
                    <p className='text-xl mt-4 invisible group-hover:visible'>
                        {sortedBlogs[1].description}
                    </p>
                </article>
                <article className='group flex flex-col items-start justify-start'>
                    <Image src={sortedBlogs[2].image.filePath.replace("../public", "")}
                    alt={blogs.title}
                    placeholder={'blur'}
                    blurDataURL={sortedBlogs[2].image.blurhashDataUrl}
                    className='w-full h-full object-center object-cover rounded-3xl -z-10'
                    width={500}
                    height={500}
                    />
                    <Link href={`/blog/${sortedBlogs[2].url}`}>
                    <h3 className='text-2xl font-bold'>
                        <span className='bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                            {sortedBlogs[2].title}
                        </span>
                    </h3>
                    </Link>
                    <p className='text-xl mt-4 invisible group-hover:visible'>
                        {sortedBlogs[2].description}
                    </p>
                </article>
                {/*add a third post that takes the combined wicth of the posts above  */}
                <article className='group flex flex-col items-start justify-start col-span-2'>
                    <Image src={sortedBlogs[3].image.filePath.replace("../public", "")}
                    alt={blogs.title}
                    placeholder={'blur'}
                    blurDataURL={sortedBlogs[3].image.blurhashDataUrl}
                    className='w-full h-full object-center object-cover rounded-3xl -z-10'
                    width={1000}
                    height={500}
                    />
                    <Link href={`/blog/${sortedBlogs[3].url}`}>
                        <h3 className='text-2xl font-bold'>
                            <span className='bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                                {sortedBlogs[3].title}
                            </span>
                        </h3>
                    </Link>
                    <p className='text-xl mt-4 invisible group-hover:visible'>
                        {sortedBlogs[3].description}
                    </p>
                </article>
            </div>
        </section>
    )
}

export default FeaturedPosts