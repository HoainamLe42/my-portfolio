import Hero from '@/components/Hero';
import MyInfo from '@/components/About';
import Contact from '@/components/Contact';
import Project from '@/components/Project';

export default function Home() {
    return (
        <div className="bg-blue-900">
            <Hero />
            <Project />
            <MyInfo />
            <Contact />
        </div>
    );
}
