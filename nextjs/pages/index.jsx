import Link from "../src/components/Link";

export default function HomePage() {
    return (
        <div>
            Welcome to Next.js!
            Home
            <Link href={"/faq"}>
                Ir para Home
            </Link>
        </div>
    )
}