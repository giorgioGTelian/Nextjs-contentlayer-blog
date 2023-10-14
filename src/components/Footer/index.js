import React from 'react'
import Link from 'next/link';
import { ArrowUp } from '../Icons';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Add smooth scrolling behavior
            });
        };
    return (
        <footer className='w-full mt-32 px-32 flex flex-col items-center justify-center'>
            <div className='flex w-full justify-between'>
                <h3 className='inline-block font-bold text-4xl'>
                Interesting Stories | Updates | Guides
                </h3>
                

                <button className='inline-block font-medium text-accent text-lg'>
                    <Link href={"#top"} />
                    <ArrowUp />
                </button>
            </div>
                <p className='text-xl mt-4'>
                Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.
                © 2023 CodeBucks. All rights reserved.
                Made with ❤ by GTElian
                </p>
            </footer>
    )
}

export default Footer