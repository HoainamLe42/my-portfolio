'use client';

import Hero from '@/components/Hero';
import MyInfo from '@/components/About';
import Contact from '@/components/Contact';
import Project from '@/components/Project';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        return () => AOS.refresh();
    }, []);
    return (
        <div className="bg-blue-900">
            <Hero />
            <Project />
            <MyInfo />
            <Contact />
        </div>
    );
}
