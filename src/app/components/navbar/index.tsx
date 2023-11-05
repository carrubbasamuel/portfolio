"use client"



import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { AiFillHome } from 'react-icons/ai';
import { BiMailSend, BiSolidUser } from 'react-icons/bi';
import { MdWork } from 'react-icons/md';
import './style.css';


export default function NavBar() {
    const pathname = usePathname()
    return (
        <div className='flex flex-col w-52 h-screen bg-black'>
            <div className='relative'>
                <Image src={"/assets/cv_foto.jpg"} alt='img-portfolio' width={9999} height={999} />
                <div className='py-2 absolute bottom-0 z-10 w-full text-center name'>
                    <p>Samuel Carrubba</p>
                </div>

            </div>
            <ul className='list-link'>
                <Link href="/">
                    <li className={pathname === '/' ? 'active' : ''}>
                        <AiFillHome />
                        Home
                    </li>
                </Link>

                <Link href="/pages/portfolio">
                    <li className={pathname === '/pages/portfolio' ? 'active' : ''}>
                        <MdWork />
                        Portfolio
                    </li>
                </Link>
                <Link href="/pages/about">
                <li className={pathname === '/pages/about' ? 'active' : ''}>
                    <BiSolidUser />
                    About
                </li>

                </Link>
                <Link href="/pages/contact">
                <li className={pathname === '/pages/contact' ? 'active' : ''}>
                    <BiMailSend />
                    Contact
                </li>
                </Link>
                
            </ul>


        </div>
    );
}
