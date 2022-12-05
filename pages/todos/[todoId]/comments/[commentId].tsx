import Link from "next/link";
import { useRouter } from "next/router"

export default function Comment() {
    const router = useRouter();

    const { todoId, commentId } = router.query;
    
    return (
        <>
            <Link href={`/todos/${todoId}`}>Voltar</Link>
            <h1>Exibindo o comentário número: {commentId}</h1>
            <p>Do Todo: {todoId}</p>
        </>
    )
}