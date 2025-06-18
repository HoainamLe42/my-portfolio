'use client';

import { socialMediaData } from '@/data/socialMediaDatat';
import { sendEmail } from '@/lib/email/sendEmail';
import Link from 'next/link';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Container from './Container';
import Title from './Title';

type Contact = {
    name: string;
    email: string;
    message: string;
};

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [contactForm, setContactForm] = useState<Contact>({
        name: '',
        email: '',
        message: '',
    });

    const handleChangeInput = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setContactForm({ ...contactForm, [name]: value });
    };

    const isValid = () => {
        return contactForm.name && contactForm.email && contactForm.message;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isValid()) {
            toast.error('Please fill in all fields.');
            return;
        }

        setIsSubmitting(true);

        try {
            await sendEmail(contactForm);
            toast.success('Gửi thành công!');
            console.log('Form submitted:', contactForm);

            // Reset form
            setContactForm({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            toast.error('Failed to send message. Try again later.');
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="min-h-screen pt-7 text-center flex flex-col justify-between"
        >
            <Container>
                <div>
                    <Title desc="Get In Touch" title="Contact me" />

                    <form
                        onSubmit={handleSubmit}
                        className="inline-flex mt-10 w-full flex-col gap-4 md:gap-5 max-w-[600px]"
                    >
                        <div className="flex flex-col md:flex-row gap-4 md:gap-5">
                            <input
                                type="text"
                                name="name"
                                value={contactForm.name}
                                onChange={handleChangeInput}
                                placeholder="Name"
                                className="h-13 px-4 bg-third md:flex-1 placeholder:text-white/70 font-semibold outline-none inset-shadow-zinc-800"
                            />
                            <input
                                type="email"
                                name="email"
                                value={contactForm.email}
                                onChange={handleChangeInput}
                                placeholder="Email"
                                className="h-13 px-4 bg-third md:flex-1 placeholder:text-white/70 font-semibold outline-none inset-shadow-zinc-800"
                            />
                        </div>
                        <textarea
                            placeholder="Message"
                            name="message"
                            value={contactForm.message}
                            onChange={handleChangeInput}
                            className="min-h-[160px] p-4 bg-third flex-1 placeholder:text-white/70 font-semibold outline-none inset-shadow-zinc-800"
                        ></textarea>

                        <button
                            type="submit"
                            disabled={!isValid()}
                            className={`w-[60%] md:w-[45%] mx-auto mt-4 md:mt-7 p-4 px-7 bg-secondary text-nowrap font-semibold tracking-wider cursor-pointer disabled:opacity-90`}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>

                    {/* Social */}
                    <ul className="flex items-center justify-center gap-6 md:gap-12 mt-12">
                        {socialMediaData.map((item) => (
                            <li
                                key={item.name}
                                className="flex items-center gap-1.5 text-sm font-bold text-white80"
                            >
                                <Link
                                    href={item.path}
                                    className="flex items-center gap-1.5 text-sm font-bold text-white80"
                                >
                                    <item.icon className="mb-0.5" />
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Toaster />
                </div>
            </Container>

            <footer className="bg-third mt-5">
                <Container>
                    <div className="flex items-center justify-center md:justify-between py-3 md:py-5">
                        <div className="text-center text-sm text-white80 pt-4">
                            &copy; {new Date().getFullYear()} HNam.Le. All
                            rights reserved.
                        </div>
                        <nav className="hidden md:block">
                            <ul className="flex gap-8">
                                <li className="capitalize py-1.5 tracking-wider font-semibold transition-colors group">
                                    <a href="#home">Home</a>
                                </li>
                                <li className="capitalize py-1.5 tracking-wider font-semibold transition-colors group">
                                    <a href="#project">Project</a>
                                </li>
                                <li className="capitalize py-1.5 tracking-wider font-semibold transition-colors group">
                                    <a href="#about">About</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Container>
            </footer>
        </section>
    );
};

export default Contact;
