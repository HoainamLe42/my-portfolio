import React from 'react';
import Container from './Container';
import Image from 'next/image';
import { skillsData } from '@/data/skillsData';
import Title from './Title';

const About = () => {
    return (
        <section id="about" className="min-h-screen py-7 pb-18 bg-primary">
            <Title desc="Get To Know More" title="About me" />

            <Container>
                <div
                    data-aos="zoom-in"
                    className="grid grid-cols-1 md:grid-cols-2 items-center px-12"
                >
                    <div className="relative z-10 md:mb-16 drop-shadow-md mx-auto">
                        <Image
                            src="/images/avatar.png"
                            alt="Avatar"
                            height={500}
                            width={400}
                            priority
                            className="object-cover h-[300px] w-auto  md:h-[500px] md:w-auto fade-bottom "
                        />
                    </div>

                    <div className="mt-12 md:mt-20 text-center md:text-left">
                        <h4 className="relative font-bold tracking-wide text-white80 text-center md:inline-block pb-1 text-lg">
                            About Me
                            <span className="absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 bottom-0 w-[40px] md:w-[30%] h-[2px] bg-white80"></span>
                        </h4>
                        <p className="mt-6 md:mt-8 text-white/70 leading-relaxed w-full text-center md:text-left">
                            {/* I&apos;m a beginner Frontend Developer with a strong
                            passion for building user-friendly and visually
                            appealing web applications. My goal is to become a
                            professional developer and contribute to real-world
                            projects. */}
                            Enthusiastic and fast-learning Frontend Developer
                            Intern with a strong foundational understanding of
                            HTML, CSS/SCSS, JavaScript, React.js, TypeScript,
                            and Tailwind CSS. Passionate about building clean,
                            responsive user interfaces and continuously
                            improving coding skills through personal projects
                            and self-learning. I am highly motivated, adaptable,
                            and eager to contribute to team tasks while growing
                            into a professional frontend developer.
                        </p>
                        <div className="mt-10">
                            <a
                                href="/files/CV.pdf"
                                download="HoaiNamLe-cv.pdf"
                                aria-label="Tải xuống CV của HoaiNamLe"
                                className="mt-5 md:mt-7 p-3 md:p-4 px-5 md:px-7 text-white text-nowrap bg-secondary font-semibold tracking-wider cursor-pointer rounded-sm"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in-up" className="px-10">
                    <h4 className="relative font-bold tracking-wide text-white80 inline-block pb-1 text-lg mt-10">
                        Skills
                        <span className="absolute left-0 bottom-0 w-[25%] h-[2px] bg-white80"></span>
                    </h4>

                    <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10 w-full md:max-w-[60%]">
                        {skillsData.map((item) => (
                            <li
                                key={item.id}
                                className="flex flex-col items-center justify-end hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={30}
                                    height={50}
                                />
                                <p className="mt-3 text-center text-white/60">
                                    {item.name}
                                </p>
                            </li>
                        ))}
                        <li className="flex flex-col items-center justify-end hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                            <Image
                                src="/images/skills/next.svg"
                                alt="Next JS"
                                width={50}
                                height={100}
                                style={{ height: 'auto' }}
                            />
                            <p className="mt-3 text-center text-white/60">
                                Next JS
                            </p>
                        </li>
                    </ul>
                </div>

                {/* Languages */}
                <div data-aos="zoom-in-up" className="px-10">
                    <h4 className="relative font-bold tracking-wide text-white80 inline-block pb-1 text-lg mt-10">
                        Languages
                        <span className="absolute left-0 bottom-0 w-[25%] h-[2px] bg-white80"></span>
                    </h4>
                    <h3></h3>
                    <ul className="flex mt-4 flex-col">
                        <li className="px-1.5 lg:px-8 mb-2">
                            <span className="inline-block border p-1 rounded-md">
                                Vietnamese
                            </span>{' '}
                            – Native
                        </li>
                        <li className="px-1.5 lg:px-8 mb-2">
                            <span className="inline-block border p-1 rounded-md">
                                English
                            </span>{' '}
                            – Intermediate (Technical)
                        </li>
                        <li className="px-1.5 lg:px-8 mb-2">
                            <span className="inline-block border p-1 rounded-md">
                                日本語
                            </span>{' '}
                            – N4 level (JLPT prep)
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default About;
