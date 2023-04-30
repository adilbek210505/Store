import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

interface ILayout {
    children: any
}

const Layout = ({children}: ILayout) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;