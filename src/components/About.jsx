import AboutGuy from "../assets/images/about-guy.png";
import { Button } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';

export default function About() {
    return (
        <div className="light-bg flex-side">
            <article className="responsive-grid container">
                <div className="image">
                    <img src={AboutGuy} alt="" />
                </div>
                <div className="flex-adapt">
                    <h2 className="section-heading">About me</h2>
                    <p>
                        Sou um desenvolvedor Full-Stack atualmente morando em Curitiba, formado em Direito e, no momento,
                        cursando Engenharia de Software na UNINTER.
                    </p>
                    <p>
                        Aprendi o básico de lógica e desenvolvimento web lááá em 2012, mas entrei realmente de cabeça
                        no mundo da programação no início de 2021, quando vi a necessidade de um programa para automatizar
                        os trabalhos de prática jurídica da faculdade! 
                    </p>
                    <p>
                        Desde então, venho aprimorando minhas habilidades nessa área que tanto amo, sempre aprendendo
                        novas tecnologias e testando meus conhecimentos!
                    </p>
                    <Button variant="contained" className="btn" startIcon={<TwitterIcon />}>
                        More
                    </Button>
                </div>
            </article>
        </div>
    )
}