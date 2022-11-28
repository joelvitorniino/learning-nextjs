import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainContainer({ children }: React.PropsWithChildren) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </>
    )
}