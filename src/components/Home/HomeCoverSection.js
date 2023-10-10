import React from 'react'
import { sortBlogs } from '@/src/utils';
import Image from 'next/image';
import Link from 'next/link';
import Tag from '../Elements/Tag';

const HomeCoverSection = ({blogs}) => {

    const sortedBlogs = sortBlogs(blogs);
    const blog = sortedBlogs[0];

    return (
        <div className='w-full inline-block'>
        <article className=' flex flex-col items-start justify-end mx-10 relative h-[85vh]'> 
            <div className='absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark rounded-3xl z-0'/>
                <Image src={blog.image.filePath.replace("../public", "")} 
                alt={blog.title} placeholder='blur' 
                blurDataURL={blog.image.blurhashDataUrl} fill
                className='w-full h-full object-center object-cover rounded-3xl -z-10'/>

                <div className='w-3/4 p-16 flex flex-col items-start justify-center z-0 text-light'>
                    {/* <Link href={`/categories/${blog.tags[0]}`}>
                        <p className='text-xl text-white'>{blog.tags[0]}</p>
                    </Link> */}
                    <Tag link={`/categories/${blog.tags[0]}`} name={blog.tags[0]} className='mb-4'/>
                    <Link href={`/blog/${blog.url}`}>
                        <h1 className='text-5xl font-bold text-white'>{blog.title}</h1>
                    </Link>
                        <p className='text-2xl text-white'>{blog.description}</p>
                </div>
        </article>
        </div>
    )
}

export default HomeCoverSection