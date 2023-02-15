import ProjectThumb from "./ProjectThumb"
import PremiumImage from "../assets/images/premium.jpg"
import LaundreeImage from "../assets/images/laundree.jpg"
import MarkdownImage from "../assets/images/markdown.jpg"
import ShortlyImage from "../assets/images/shortly.png"
import WorldImage from "../assets/images/world.png"
import PortfolioImage from "../assets/images/portfolio.png"

export default function Projects() {
    return (
        <article id="projects" className="container flex-adapt">
            <h2 className="section-heading">
                Projects
            </h2>
            <ul className="project-list">
                <li>
                    <ProjectThumb img={LaundreeImage}>
                        Laundree
                    </ProjectThumb>
                </li>
                <li>
                    <ProjectThumb img={PortfolioImage}>
                        Portfolio
                    </ProjectThumb>
                </li>
                <li>
                    <ProjectThumb img={PremiumImage}>
                        Premium a sec
                    </ProjectThumb>
                </li>
                <li>
                    <ProjectThumb img={MarkdownImage}>
                        Veja Markdown
                    </ProjectThumb>
                </li>
                <li>
                    <ProjectThumb img={ShortlyImage}>
                        Shortly
                    </ProjectThumb>
                </li>
                <li>
                    <ProjectThumb img={WorldImage}>
                        Where in the world
                    </ProjectThumb>
                </li>
            </ul>
        </article>
    )
}