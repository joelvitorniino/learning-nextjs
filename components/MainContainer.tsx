import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

import styles from '../styles/MainContainer.module.css'

export default function MainContainer({ children }: React.PropsWithChildren) {
    return (
        <>
            <Navbar />
            <div className={ styles.container }>{children}</div>
            <Footer />
        </>
    )
}