import styles from '../styles/LoginForm.module.css';

export default function LoginForm() {
    return (
        <div className={ styles.loginForm }>
            <form method="POST">
                <h1>Login</h1>
                <div className={ styles.content }>
                    <div className={ styles.inputField }>
                        <input type="email" placeholder="Email" name="email" autoComplete="nope" />
                        <input type="password" placeholder="Password" name="password" autoComplete="new-password" />
                    </div>

                    <a href="/forgot" className={ styles.link }>Forgot Your Password?</a>
                </div>
                <div className={ styles.action }>
                    <a href="/register">Register</a>
                    <button>Sign in</button>
                </div>
            </form>
        </div>
    );
};