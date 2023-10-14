import { sortBlogs } from '@/src/utils';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

const RecentPosts = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs);
    return (
        <section className='w-full mt-32 px-32 flex flex-col items-center justify-center'>
            <div className='flex w-full justify-between'>
                <h2 className='inline-block font-bold text-4xl'>
                    Recent Posts
                </h2>
                <button className='inline-block font-medium text-accent text-lg'>view all
                    <Link href="/categories/all"/>
                </button>
            </div>

            <div className='grid grid-cols-3 grid-rows-3 gap-16 mt-16 group'>
                {
                    sortedBlogs.slice(2, 11).map((blog, index) => {
                        return <article key={`${index}`} className='col-span-1 row-span-1 relative'>
                    {/* fill each blog layout with a different blog following sortedBlogs.slice(5, 11).map((blog, index)  */}
                            <Image src={blog.image.filePath.replace("../public", "")} 
                            alt={blog.title}
                            placeholder={'blur'}
                            blurDataURL={blog.image.blurhashDataUrl}
                            className='object-center object-cover rounded-xl -z-10 '
                            width={700}
                            height={700}
                            />
                            <Link href={`/blog/${blog.url}`}>
                            <h3 className='text-2xl font-bold'>
                                <span className='bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                                    {blog.title}
                                </span>
                            </h3>
                            </Link>
                            <p className='text-xl mt-4'>
                                {blog.description}
                            </p>

                    </article>
                    })
                }
            </div>
        </section>
    );
};

export default RecentPosts

/*
<article className='group flex flex-col items-start justify-start'>
                            <Image src={blog.image.filePath.replace("../public", "")} 
                            alt={blog.title}
                            placeholder={'blur'}
                            blurDataURL={blog.image.blurhashDataUrl}
                            className='w-full h-full object-center object-cover rounded-3xl -z-10'
                            width={500}
                            height={500}
                            />
                            <Link href={`/blog/${blog.url}`}>
                            <h3 className='text-2xl font-bold'>
                                <span className='bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                                    {blog.title}
                                </span>
                            </h3>
                            </Link>
                            <p className='text-xl mt-4 invisible group-hover:visible'>
                                {blog.description}
                            </p>
                        </article>
*/