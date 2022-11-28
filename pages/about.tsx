import Link from "next/link";
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <>
        <h1>About of website!</h1>
        <br />
        <Link href="/" className={ styles.previous }>Home</Link>
        </>
    );
};