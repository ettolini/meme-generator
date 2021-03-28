import Nav from "./Nav";
import Header from "./Header2";

const Layout = (props: any) => {
    return (
        <>
            <Nav />
            <Header />
            <div className="container mx-auto flex flex-col items-center">
                <main className="py-6 text-4xl">
                    {props.children}
                </main>     
            </div>
        </>
    )
}

export default Layout