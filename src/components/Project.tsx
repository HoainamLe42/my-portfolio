import { projectsData } from '@/data/projectsData';
import React from 'react';
import Container from './Container';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Title from './Title';

const Project = () => {
    return (
        <section id="project" className="min-h-screen py-7 pb-12 md:pb-18">
            <Title desc="Browse My Recent" title="Project" />

            <Container>
                <div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7 lg:gap-10 mt-13">
                        {projectsData.map((item) => (
                            <li
                                key={item.id}
                                className="relative bg-primary p-6 md:p-10 flex flex-col cursor-pointer hover:-translate-y-2 transition-all duration-300 group"
                            >
                                <h3 className="text-2xl md:text-3xl mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-white80 mb-4">{item.desc}</p>
                                <ArrowRight
                                    className="absolute top-10 right-5 text-secondary"
                                    size={32}
                                />
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    height={280}
                                    width={700}
                                    className="object-cover h-[180px] md:h-[200px] lg:h-[280px] w-full"
                                />
                                <span className="absolute left-0 -bottom-1 w-full h-0 bg-secondary group-hover:h-1 transition-all duration-300"></span>

                                <div className="hidden opacity-0 absolute inset-0 group-hover:opacity-100 group-hover:flex transition-all duration-300">
                                    <div className="relative w-full inset-0 flex items-end justify-center gap-5 mb-20">
                                        <button className="w-[160px] py-3 px-8 rounded-[99px] border border-gray-400 cursor-pointer hover:bg-gray-400 hover:text-black shadow-2xl">
                                            Github
                                        </button>
                                        <button className="w-[160px] py-3 px-8 rounded-[99px] border border-gray-400 cursor-pointer hover:bg-gray-400 hover:text-black">
                                            Live Demo
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default Project;
