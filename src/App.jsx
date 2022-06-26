import Section from "./components/Section";
import "./styles/global.css";

// Image Imports
import mountainBG from "./assets/mountain.jpg";
import beachBG from "./assets/beach.jpg";
import spaceBG from "./assets/space.jpg";
import Navigation from "./components/Navigation";

function App() {
    return (
        <div className="relative">
            <Navigation />
            <Section
                id="mountain-section"
                image={mountainBG}
                title="mountain section"
            />
            <Section id="beach-section" image={beachBG} title="beach section" />
            <Section id="space-section" image={spaceBG} title="space section" />
        </div>
    );
}

export default App;
