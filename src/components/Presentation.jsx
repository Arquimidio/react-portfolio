import TimeCounter from "./TimeCounter"
import HeroGuy from "../assets/images/hero-guy.png"
import { Button } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import RoleWriter from "./RoleWriter";
import Divider from "./Divider";
import CurriculumPDF from "../assets/documents/curriculum.pdf"

export default function Presentation() {
    const ROLES = [
        'Web Developer!',
        'Software Engineer!',
        'Front-end dev!',
        'Back-end dev!'
    ]

    return (
        <div className="presentation">
            <div className="hero bg-squares responsive-grid container">
                <article className="col-low-gap">
                    <h2 className="presentation-name">
                        Hello, i'm Gabriel Stoppa
                    </h2>
                    <RoleWriter roles={ROLES}/>
                    <p className="text-secondary">
                        Welcome to my portfolio site! Here you can find all the info you
                        need about my professional developer life, projects, hobbies and a lot of what makes me who i am!
                    </p>
                    <div className="flex-side">
                        <Button 
                            className="btn"
                            variant="contained" 
                            startIcon={<EmailIcon />}
                            href="mailto:gabrielstoppadossantos@gmail.com"
                        >
                            Contact Me
                        </Button>
                        <Button 
                            variant="outlined" 
                            className="btn"
                            startIcon={<DescriptionOutlinedIcon />}
                            href={CurriculumPDF}
                            target="_blank"
                        >
                            Curriculum
                        </Button>
                    </div>
                    <Divider hideMobile={true}/>
                        <div className="timer-container col-low-gap hide-on-mobile">
                            <p>I've been coding for about</p>
                            <TimeCounter/>
                        </div>
                </article>
                <div className="moving-hero image">
                    <img src={HeroGuy} alt="" />
                </div>
            </div>
        </div>
    )
}