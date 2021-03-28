import Link from "next/link";

const Nav = () => {
    return (
        <nav className="flex bg-green-500">
            <ul className="flex justify-center">
                <li className="py-4 px-8 hover:bg-green-200 hover:text-green-800">
                    <Link href="/">HOME</Link>
                </li>
                <li className="py-4 px-8 hover:bg-green-200 hover:text-green-800">
                    <Link href="/about">ABOUT</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav