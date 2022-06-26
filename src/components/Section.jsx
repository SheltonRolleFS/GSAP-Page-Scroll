import { BackgroundImage } from "./BackgroundImage";

export default function Section({ id, image, title }) {
    return (
        <section className="relative w-screen h-screen text-white">
            <BackgroundImage image={image} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                <h1 className="font-poppins text-sm">Welcome to the</h1>
                <h2 className="font-roboto text-6xl">{title.toUpperCase()}</h2>
            </div>
        </section>
    );
}
