export default function Navigation() {
    return (
        <header className="fixed w-screen z-50">
            <nav className="flex py-10 max-w-[1100px] mx-auto justify-end">
                <a
                    href="#mountain-section"
                    className="ml-8 font-poppins text-2xl text-white"
                >
                    Mountains
                </a>
                <a
                    href="#beach-section"
                    className="ml-8 font-poppins text-2xl text-white"
                >
                    Beaches
                </a>
                <a
                    href="#space-section"
                    className="ml-8 font-poppins text-2xl text-white"
                >
                    Space
                </a>
            </nav>
        </header>
    );
}
