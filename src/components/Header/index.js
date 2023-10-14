import {LinkedinIcon, GithubIcon, SunIcon} from '../Icons';
import Logo from './logo';
import Link  from 'next/link';

const Header = () => {
    return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
        <Logo />
        <div>
            <a href='http://' className='inline-block w-6 h-6 mr-4'>
                <LinkedinIcon className=" hover:scale-125  transi ease duration-200"/></a>
            <a href='http://' className='inline-block w-6 h-6 mr-4'>
                <GithubIcon className=" hover:scale-125 transi ease duration-200"/></a>
        </div>
        <nav className='w-max py-3 px-8 border border-solid 
        border-dark rounded-full font-medium capitalize flex 
        items-center bg-light/80 backdrop-blur-sm z-50'>
            <Link href="/" className='mr-2'>Home</Link>
            <Link href="/about" className='mr-2'>About</Link>
            <Link href="/contact" className='mr-2'>Contact</Link>
            <button>
                <SunIcon className="w-6 h-6" />
            </button>
        </nav>
    </header>
    );
};

export default Header;