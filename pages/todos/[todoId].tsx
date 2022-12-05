import { InferGetStaticPropsType } from "next";
import Link from "next/link";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export async function getStaticProps(context: any) {
    const { params } = context;

    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`);

    const todo: Todo = await data.json();

    return {
        props: { todo }
    }
}

export async function getStaticPaths() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);

    const data: Todo[] = await response.json();

    const paths = data.map(todo => {
        return {
            params: {
                todoId: `${todo.id}`
            }
        }
    });

    return { paths, fallback: false };
}

export default function Todo({ todo }: InferGetStaticPropsType<typeof getStaticProps>) {

    return (
        <>
            <Link href="/todos">
                Voltar
            </Link>
            <h1>Exibindo o todo: {todo.id}</h1>
            <h1>Texto: {todo.title}</h1>
            <p>
                Comentário: Lorem ipsum 
                <Link href={`/todos/${todo.id}/comments/1`}> Detalhes</Link>
            </p>

            <p>
                Comentário: Lorem ipsum 2 
                <Link href={`/todos/${todo.id}/comments/2`}> Detalhes</Link>
            </p>

            <p>
                Comentário: Lorem ipsum 3
                <Link href={`/todos/${todo.id}/comments/3`}> Detalhes</Link>
            </p>
        </>
    )
}