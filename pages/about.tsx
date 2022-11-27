import Link from "next/link";
import Navbar from "../components/Navbar";

export default function About() {
    return (
        <>
        <Navbar />
        <h1>About of website!</h1>
        <Link href="/">Home</Link>
        </>
    );
};