import Link from "next/link";

import { useRouter } from "next/router";

export default function Todo() {
    const router = useRouter();

    const { todoId } = router.query;

    return (
        <>
            <Link href="/">
                Voltar
            </Link>
            <h1>Exibindo o todo: {todoId}</h1>
            <p>
                Comentário: Lorem ipsum 
                <Link href={`/todos/${todoId}/comments/1`}> Detalhes</Link>
            </p>

            <p>
                Comentário: Lorem ipsum 2 
                <Link href={`/todos/${todoId}/comments/2`}> Detalhes</Link>
            </p>

            <p>
                Comentário: Lorem ipsum 3
                <Link href={`/todos/${todoId}/comments/3`}> Detalhes</Link>
            </p>
        </>
    )
}