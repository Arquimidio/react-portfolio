import { Button } from "@mui/material"

export default function TechStack() {
    return (
        <article className="container">
            <h2>Habilidades</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>Mongoose</li>
                <li>SQLite</li>
            </ul>
            <Button 
                className="btn"
                variant="contained"
            >
                Let's Work Together
            </Button>
        </article>

    )
}