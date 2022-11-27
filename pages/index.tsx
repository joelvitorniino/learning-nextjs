import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
        <Link href="/products">
          Produtos
          </Link>
        </li>

        <li>
        <Link href="/about">
          Sobre
          </Link>
        </li>
      </ul>
      
      <h1>Hello, World!</h1>
    </div>
  );
};
