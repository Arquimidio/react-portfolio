import TimeCounter from "./TimeCounter"
import HeroGuy from "../assets/images/hero-guy.png"
import { Button } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import RoleWriter from "./RoleWriter";
import Divider from "./Divider";

export default function Presentation() {
    const ROLES = [
        'Web Developer!',
        'Software Engineer!',
        'Front-end!',
        'Back-end!'
    ]

    return (
        <div className="presentation">
            <div className="hero responsive-grid container">
                <article className="flex-adapt">
                    <h2 className="presentation-name">
                        Hello, i'm Gabriel Stoppa
                        <span className="wave">👋</span>
                    </h2>
                    <RoleWriter roles={ROLES}/>
                    <p className="text-secondary">
                        Welcome to my portfolio site! Here you can find all the info you
                        need about my professional developer life, projects, hobbies, technical
                        readings and a lot of what makes me who i am!
                    </p>
                    <div className="flex-side">
                        <Button 
                            className="btn"
                            variant="contained" 
                            startIcon={<EmailIcon />}
                        >
                            Contact Me
                        </Button>
                        <Button 
                            variant="outlined" 
                            className="btn"
                            startIcon={<DescriptionOutlinedIcon />}
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