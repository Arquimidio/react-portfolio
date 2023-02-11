import Presentation from "../components/Presentation"
import About from "../components/About"
import TechStack from "../components/TechStack"
import Projects from "../components/Projects"

export default function Home() {
    return (
        <section>
            <Presentation />
            <About />
            <TechStack />
            <Projects />
        </section>
    )
}