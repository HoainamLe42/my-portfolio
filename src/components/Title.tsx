import React from 'react';

type TitleProps = {
    desc: string;
    title: string;
};

const Title = ({ desc, title }: TitleProps) => {
    return (
        <div
            data-aos="zoom-in"
            className="flex flex-col justify-center mt-[76px] text-center"
        >
            <p className="text-gray-400 text-sm">{desc}</p>
            <h2 className="capitalize text-3xl font-bold text-center mt-3 tracking-wide">
                {title}
            </h2>
        </div>
    );
};

export default Title;
