import TimeCounter from "./TimeCounter"
import HeroGuy from "../assets/images/hero-guy.png"
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

export default function Presentation() {
    const ROLES = [
        'Web Developer.',
        'Software Engineer.',
        'Front end.',
        'Back end.'
    ]
    const [curRole, setCurRole] = useState(0);
    const [curRoleText, setCurRoleText] = useState('');
    const [curIndex, setCurIndex] = useState(0);

    function changeRole() {
        setCurRole(prevCurRole => curRole + 1);
    }

    function addOneCharacter(text) {
        setCurRoleText(prevRoleText => prevRoleText + text[curIndex]);
        setCurIndex(prevCurIndex => prevCurIndex + 1);
    }

    function removeOneCharacter() {
        setCurRoleText(prevRoleText => prevRoleText.slice(0, -1));
    }

    function toNextRole() {
        changeRole();
        setCurRoleText('');
        setCurIndex(0);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            const text = ROLES[curRole % ROLES.length];
            if(!text[curIndex]) {
                if(curRoleText) {
                    removeOneCharacter();
                } else {
                    toNextRole();
                }
            } else {
                addOneCharacter(text);
            }
        }, !ROLES[curRole % ROLES.length] && curRoleText? 60 : 250)

        return () => {
            clearTimeout(timer);
        }
    })

    return (
        <div className="hero container">
            <article className="flex-adapt">
                <h2 className="presentation-name">
                    Hello, i am Gabriel Stoppa
                    <span className="wave">👋</span>
                </h2>
                <h1 className="role">{ curRoleText }</h1>
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
                        My Curriculum
                    </Button>
                </div>
                <div className="timer-container flex-adapt light-bg hide-on-mobile">
                    <p>I've been coding for about</p>
                    <TimeCounter/>
                </div>
            </article>
            <div className="moving-hero hide-on-mobile image">
                <img src={HeroGuy} alt="" />
            </div>
        </div>
    )
}