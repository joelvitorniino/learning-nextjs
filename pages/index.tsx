import Link from 'next/link';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Hello, World!</h1>
    </div>
  );
};
