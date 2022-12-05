import Link from "next/link";

import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <ul className={ styles.navbar }>
        <li>
            <Link href="/">
                Home
            </Link>
        </li>

        <li>
            <Link href="/todos">
                Todos
            </Link>
        </li>
        
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
        
        <li>
            <Link href="/shop">
                Shop
            </Link>
        </li>
      </ul>
    )
}