import { Button } from "@mui/material"
import Skill from "./Skill"
import HTMLIcon from "../assets/icons/html.png"
import CSSIcon from "../assets/icons/css.png"
import JSIcon from "../assets/icons/javascript.png"
import ReactIcon from "../assets/icons/react.png"
import NodeIcon from "../assets/icons/node.png"
import ExpressIcon from "../assets/icons/express.png"
import MongooseIcon from "../assets/icons/mongoose.png"
import SQLITEIcon from "../assets/icons/sqlite.svg"

export default function TechStack() {
    return (
        <article id="skills" className="container flex-adapt">
            <h2 className="section-heading">Tech Stack</h2>
            <ul className="tech-stack no-overflow">
                <li>
                    <Skill icon={HTMLIcon}>HTML</Skill>
                </li>
                <li>
                    <Skill icon={CSSIcon}>CSS</Skill>
                </li>
                <li>
                    <Skill icon={JSIcon}>Javascript</Skill>
                </li>
                <li>
                    <Skill icon={ReactIcon}>React</Skill>
                </li>
                <li>
                    <Skill icon={NodeIcon}>Node</Skill>
                </li>
                <li>
                    <Skill icon={ExpressIcon}>Express</Skill>
                </li>
                <li>
                    <Skill icon={MongooseIcon}>Mongoose</Skill>
                </li>
                <li>
                    <Skill icon={SQLITEIcon}>SQLite</Skill>
                </li>
            </ul>
        </article>

    )
}