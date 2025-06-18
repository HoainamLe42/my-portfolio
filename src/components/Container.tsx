import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-[1210px] mx-auto px-3 md:px-5">{children}</div>
    );
};

export default Container;
