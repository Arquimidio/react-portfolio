import Presentation from "../components/Presentation"
import About from "../components/About"
import TechStack from "../components/TechStack"
import Projects from "../components/Projects"
import Education from "../components/Education"

export default function Home() {
    return (
        <section>
            <Presentation />
            <About />
            <Education />
            <TechStack />
            <div className="light-bg">
                <Projects />
            </div>
        </section>
    )
}