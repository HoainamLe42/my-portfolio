import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

import { navData } from '@/data/navData';

const sections = ['home', 'project', 'about', 'contact'];

type MobileMenuProps = {
    isOpenMenu: boolean;
    onCloseMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu = ({ isOpenMenu, onCloseMenu }: MobileMenuProps) => {
    const [isActiveScroll, setIsActiveScroll] = useState<boolean>();
    const [activeSection, setActiveSection] = useState<string>('home');

    const handleScroll = () => {
        const scrollY = window.scrollY;
        console.log(isActiveScroll);
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
        <div
            className={`fixed z-50 top-0 left-0 right-0 ${
                isOpenMenu ? 'h-[48vh]' : 'h-0'
            } transition-all duration-300 bg-third opacity-80`}
        >
            {isOpenMenu && (
                <div className="p-5">
                    <h2 className="text-2xl text-secondary text-center font-semibold drop-shadow-amber-100 mt-3">
                        Hi, I&apos;m HoaiNam Le
                    </h2>
                    <ul className="flex flex-col items-center justify-center gap-2 mt-5">
                        {navData.map((nav) => (
                            <li
                                key={nav.id}
                                className={`capitalize py-2
                                ${
                                    activeSection === nav.path.replace('#', '')
                                        ? 'text-blue-400 opacity-100 border-b-[2px] font-semibold'
                                        : 'text-white hover:text-blue-500/95 opacity-70'
                                }
                                            `}
                            >
                                <a href={nav.path}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Icon close */}
                    <div className="flex items-center justify-center mt-7">
                        <X onClick={() => onCloseMenu(false)} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
