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
        path: '#!',
    },
    {
        name: 'Instagram',
        icon: Instagram,
        path: '#!',
    },
    {
        name: 'Linkedin',
        icon: Linkedin,
        path: '#!',
    },
];
