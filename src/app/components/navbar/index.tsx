"use client"



import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AiFillCloseCircle, AiFillGithub, AiFillHome, AiFillLinkedin } from 'react-icons/ai';
import { BiMailSend, BiSolidUser } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { MdWork } from 'react-icons/md';
import './style.css';


export default function NavBar() {
    const pathname = usePathname()
    const [isMobile, setIsMobile] = useState(false)
    const [isOpen, setIsOpen] = useState(false)


    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
      
        const handleClickOutside = (event) => {
          const navElement = document.getElementById('nav');
      
          if (navElement && !navElement.contains(event.target)) {
            setIsOpen(false);
          }
        };
      
        window.addEventListener('resize', handleResize);
        document.addEventListener('click', handleClickOutside);
      
        handleResize();
      
        return () => {
          window.removeEventListener('resize', handleResize);
          document.removeEventListener('click', handleClickOutside);
        };
      }, [isOpen]);
    
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            {isMobile && 
            <div className='container-nav-top w-full h-10 flex items-center p-2'>
                <div className='flex items-start justify-center gap-2 text-white w-full'>
                    <p className='text-white name-nav'>SAMUEL CARRUBBA</p>
                </div>
            </div>}

            <div id='nav' className={` ${isMobile ? 'mobile' : ''} ${isOpen ? 'open' : ''}`}>
                <div className='flex flex-col justify-between w-52 h-screen bg-black'>
                    <div>
                        <div className='relative'>
                            {isMobile && <AiFillCloseCircle size={26} className="close-btn" onClick={handleClick}/>}
                            <Image src={"/assets/cv_foto.jpg"} alt='img-portfolio' width={9999} height={999} />
                            <div className='py-2 absolute bottom-0 z-10 w-full text-center name'>
                                <p>Samuel Carrubba</p>
                            </div>

                        </div>
                        <ul className='list-link'>
                            <Link href="/">
                                <li onClick={handleClick} className={pathname === '/' ? 'active' : ''}>
                                    <AiFillHome />
                                    Home
                                </li>
                            </Link>

                            <Link href="/pages/portfolio">
                                <li onClick={handleClick} className={pathname === '/pages/portfolio' ? 'active' : ''}>
                                    <MdWork />
                                    Portfolio
                                </li>
                            </Link>
                            <Link href="/pages/about">
                                <li onClick={handleClick} className={pathname === '/pages/about' ? 'active' : ''}>
                                    <BiSolidUser />
                                    About
                                </li>

                            </Link>
                            <Link href="/pages/contact">
                                <li onClick={handleClick} className={pathname === '/pages/contact' ? 'active' : ''}>
                                    <BiMailSend />
                                    Contact
                                </li>
                            </Link>

                        </ul>
                    </div>
                    <div className='container-footer'>
                        <div className='flex items-center gap-1 icon-social justify-center'>
                            <a href="https://www.linkedin.com/in/samuel-carrubba-562456228/" target='_blanck'>
                                <AiFillLinkedin size={18} />
                            </a>
                            <a href="https://github.com/carrubbasamuel" target='_blanck'>
                                <AiFillGithub size={18} />
                            </a>
                        </div>
                        <p>2023 © Carrubba.</p>
                        <p>All Right Reserved.</p>
                    </div>

                </div>
            </div>
            {<div className='menu-btn'>
                <FiMenu size={28} onClick={handleClick}/>
            </div>}


        </>

    );
}
