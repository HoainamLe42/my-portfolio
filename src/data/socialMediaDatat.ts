import { Facebook, Instagram, Linkedin } from 'lucide-react';

type SocialMedia = {
    name: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    path: string;
};

export const socialMediaData: SocialMedia[] = [
    {
        name: 'Facebook',
        icon: Facebook,
        path: 'https://www.facebook.com/lehoai.nam.3367',
    },
    {
        name: 'Instagram',
        icon: Instagram,
        path: 'https://www.instagram.com',
    },
    {
        name: 'Linkedin',
        icon: Linkedin,
        path: '#!',
    },
];
