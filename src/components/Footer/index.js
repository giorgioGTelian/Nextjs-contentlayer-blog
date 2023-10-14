"use client"
import React from 'react'
import { ArrowUp } from '../Icons';
import { useForm } from 'react-hook-form';

const Footer = ({scrollToTop}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    
    return (
        <footer className='w-full rounded-2xl mt-16 px-16 flex flex-col items-center justify-center bg-dark text-light'>
            <div className='flex w-full justify-between'>
                <h3 className='inline-block font-bold text-4xl mt-8'>
                Interesting Stories | Updates | Guides
                </h3>
                

                <button className='inline-block font-medium text-accent text-lg' onClick={scrollToTop}>
                    <ArrowUp />
                </button>
            </div>
                <p className='text-xl mt-4 px-4'>
                Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.<br />
                © 2023 CodeBucks. All rights reserved.<br />
                Made with ❤ by GTElian<br />
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-6 min-w-[384px] flex items-stretch bg-light p-2 rounded mx04'>
                    <input type="text" placeholder="Name" {...register("Name", {required: true})} />
                    <input type="email" placeholder="Email " {...register("Email ", {required: true})} />

                    <input type="submit" placeholder='Send'/>
                    </form>

            </footer>
    )
}

export default Footer