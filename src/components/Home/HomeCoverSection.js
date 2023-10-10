import React from 'react'
import { sortBlogs } from '@/src/utils';
import Image from 'next/image';

const HomeCoverSection = ({blogs}) => {

    const sortedBlogs = sortBlogs(blogs);
    const blog = sortedBlogs[0];

    return (
        <div className='w-full inline-block'>
        <article className=' flex flex-col items-start justify-end mx-10 relative h-[85vh]'> 
            <Image src={blog.image.filePath.replace("../public", "")} 
            alt={blog.title} placeholder='blur' 
            blurDataURL={blog.image.blurhashDataUrl} fill
            className='w-full h-full object-center object-cover rounded-3xl'/>
        </article>
        </div>
    )
}

export default HomeCoverSection