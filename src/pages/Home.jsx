import Presentation from "../components/Presentation"
import About from "../components/About"
import TechStack from "../components/TechStack"
import Projects from "../components/Projects"
import TimeCounter from "../components/TimeCounter"

export default function Home() {
    return (
        <section>
            <Presentation />
            <About />
            <TechStack />
            <Projects />
            <TimeCounter/>
        </section>
    )
}