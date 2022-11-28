import Link from "../src/components/Link";

export default function HomePage() {
    return (
        <div>
            <p>Welcome to Next.js!</p>
            <p>Home</p>
            <Link href={"/sobre"}>
                Ir para Sobre
            </Link>
            <br />
            <img src="/images/avatar.jpeg"/>
        </div>
    )
}