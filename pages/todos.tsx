import { GetStaticProps, InferGetStaticPropsType } from 'next';
import styles from '../styles/Todo.module.css'

interface Todos {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');

    const todos: Todos[] = await data.json();

    return {
        props: { todos }
    }
}

export default function Todos({ todos }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <h1>Tarefas para fazer:</h1>
            <ul className={ styles.todolist }>
                { todos.map((todo => {
                    return (
                        <li key={todo.id}>{todo.title}</li>
                    )
                }))}
            </ul>
        </>
    )
}