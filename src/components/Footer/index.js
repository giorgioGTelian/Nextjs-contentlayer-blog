"use client"
import React from 'react'
import { ArrowUp } from '../Icons';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { CodePenSvg, CoffeeSvg, WebsiteSVG } from '../Icons';

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
                <br />
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-6 min-w-[384px] flex items-stretch p-2 rounded mx04'>
                    <input type="text" placeholder="Name" {...register("Name", {required: true})} className='w-full bg-transparent text-light focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1'/>
                    <input type="email" placeholder="Email " {...register("Email ", {required: true})} className='w-full bg-transparent text-light focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1'/>

                    <input type="submit" placeholder='Send' className='bg-dark text-light cursor-pointer font-medium rounded px-5 py-1'/>
                </form>
                <div className='flex justify-center items-center mt-4'>
                    <a href='https://www.buymeacoffee.com/giorgiopros' target='_blank' rel="noreferrer" className='mx-2'>
                        <CoffeeSvg className=" hover:scale-125  transi ease duration-200"/>
                    </a>
                    <a href='https://codepen.io/giorgioGTelian' target='_blank' rel="noreferrer" className='mx-2'>
                        <CodePenSvg className=" hover:scale-125  transi ease duration-200"/>
                    </a>
                    <a href='http://programmer.altervista.org/' target='_blank' rel="noreferrer" className='mx-2'>
                        <WebsiteSVG className=" hover:scale-125  transi ease duration-200"/>
                    </a>
                </div>
                <div className='mt-4 text-sm w-full realtive border-t border-solid border-light py-6 px-8 flex flex-row items-center justify-between'>
                    <span> Made with ❤ by <Link href={"https://github.com/giorgioGTelian"}>GTElian </Link></span>
                </div>

            </footer>
    )
}

export default Footer