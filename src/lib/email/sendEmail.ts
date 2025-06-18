import emailjs from 'emailjs-com';

export const sendEmail = (formData: {
    name: string;
    email: string;
    message: string;
}) => {
    const serviceID = 'service_0ya53r5';
    const templateID = 'template_0xakky9';
    const publicKey = 'cfXtzNlXB6vjSHN_T';

    return emailjs.send(serviceID, templateID, formData, publicKey);
};
