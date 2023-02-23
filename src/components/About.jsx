import AboutGuy from "../assets/images/about-guy.png";
import { Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import Links from "../objects/Links"
import { motion } from "framer-motion"

export default function About() {
    return (
        <div id="about" className="light-bg flex-side">
            <article className="responsive-grid container">
                <div className="image">
                    <motion.img 
                        src={AboutGuy} 
                        alt="" 
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    />
                </div>
                <motion.div 
                    className="col-low-gap"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <h2 className="section-heading">About me</h2>
                    <p>
                        I'm a Full-stack developer currently living at Curitiba (Brasil's Smart City :P), having a Bachelor of Laws degree and studying for a Software Engineer Degree ar UNINTER.
                    </p>
                    <p>
                        I know the basics of logic and web development since 2012, but i've really started to dig deep into the development world january 2021, when i saw the need for a software to automate my work at the college's law practice classes! 
                    </p>
                    <p>
                        Since then, i've been improving my software development skills, always learning new technologies and testing my knowledge!
                    </p>
                    <div className="flex-side">
                        <Button 
                            variant="contained" 
                            className="btn" 
                            startIcon={<GitHubIcon />}
                            href={Links.github}
                            target="_blank"
                        >
                            More
                        </Button>
                    </div>
                </motion.div>
            </article>
        </div>
    )
}