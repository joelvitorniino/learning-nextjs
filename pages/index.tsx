import Head from "next/head";
import { Rubik } from '@next/font/google';
import LoginForm from "../components/LoginForm";
import styles from '../styles/LoginForm.module.css'

const rubik = Rubik({ weight: '400'})

export default function Index() {
    return (
        <>
        <Head>
            <main className={ rubik.className }></main>
        </Head>
        <div className={ styles.body }>
            <LoginForm />
        </div>
        </>
    );
};