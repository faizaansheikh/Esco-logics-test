

import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <div>
            <Navbar />

            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default layout