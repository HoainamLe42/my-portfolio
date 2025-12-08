import React from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center bg-primary"
        >
            <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-34">
                <div
                    data-aos="zoom-in-right"
                    className="relative z-10 md:mb-16 drop-shadow-md"
                >
                    <Image
                        src="/images/avatar.png"
                        alt="Avatar"
                        height={500}
                        width={400}
                        priority
                        className="object-cover h-[300px] md:h-[500px] w-auto md:w-auto fade-bottom"
                    />
                </div>
                <div data-aos="zoom-in-left" className="text-center mt-10">
                    <p className="font-bold text-white80 mb-3 md:mb-7">
                        Hello, I&apos;m
                    </p>
                    <h1 className="text-white text-4xl md:text-6xl font-semibold">
                        HoaiNam Le
                    </h1>
                    <p className="relative inline-block text-2xl md:text-3xl text-white/70 font-semibold tracking-widest mt-3 md:mt-6 pb-3">
                        Frontend Developer Intern
                    </p>
                </div>
            </div>
            <div className="absolute z-10 bottom-14">
                <a
                    href="#project"
                    className="flex items-center gap-3 font-semibold text-white"
                >
                    <span className="h-7 w-7 bg-secondary flex items-center justify-center">
                        <ArrowDown />
                    </span>
                    Recent Works
                </a>
            </div>
        </section>
    );
};

export default Hero;
