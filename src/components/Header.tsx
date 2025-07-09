'use client';

import React, { useEffect, useState } from 'react';
import Container from './Container';
import { navData } from '@/data/navData';
import { AlignLeft } from 'lucide-react';
import MobileMenu from './MobileMenu';

const sections = ['home', 'project', 'about', 'contact'];

const Header = () => {
    const [isActiveScroll, setIsActiveScroll] = useState<boolean>();
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('home');

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsActiveScroll(window.scrollY > 50);

        for (const id of sections) {
            const section = document.getElementById(id);
            if (section) {
                const offsetTop = section.offsetTop - 150;
                const offsetBottom = offsetTop + section.offsetHeight;
                if (scrollY >= offsetTop && scrollY < offsetBottom) {
                    setActiveSection(id);
                    break;
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full z-[100] ${
                isActiveScroll ? 'bg-black shadow-lg py-5' : 'md:py-6 py-3'
            } transition-all duration-[400ms] bg-primary`}
        >
            <Container>
                <div
                    data-aos="fade-down"
                    className="flex justify-between items-center px-4"
                >
                    <h3 className="font-semibold">
                        <a href={'#home'}>HoaiNam Le</a>
                    </h3>

                    <nav className="hidden md:block">
                        <ul className="flex gap-8">
                            {navData.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`relative capitalize py-1.5 tracking-wider font-semibold transition-colors group ${
                                        activeSection ===
                                        nav.path.replace('#', '')
                                            ? 'text-blue-400 opacity-100'
                                            : 'text-white hover:text-blue-500/95 opacity-70'
                                    }`}
                                >
                                    <a href={nav.path}>{nav.title}</a>
                                    <span
                                        className={`absolute bottom-0 left-0 w-0 h-[2px] rounded-full bg-secondary cursor-pointer transition-all ${
                                            activeSection ===
                                            nav.path.replace('#', '')
                                                ? 'w-[45%]'
                                                : 'w-0 group-hover:w-[45%]'
                                        }`}
                                    ></span>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Menu Icon Mobile */}
                    <span className="md:hidden">
                        <AlignLeft onClick={() => setIsOpenMenu(true)} />
                    </span>
                    <MobileMenu
                        isOpenMenu={isOpenMenu}
                        onCloseMenu={setIsOpenMenu}
                    />
                </div>
            </Container>
        </header>
    );
};

export default Header;
