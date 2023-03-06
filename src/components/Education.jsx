import logoPositivo from '../assets/images/positivo.png';
import logoUninter from '../assets/images/uninter.png';
import logoFrontendMasters from '../assets/images/masters.png';
import EducationCard from './EducationCard';

export default function Education() {
    return (
    <div id='education' className='very-light-bg'>
        <article className="container flex-adapt">
            <h2 className="section-heading">
                Education
            </h2>
            <div className="education-content flex-adapt">
                <EducationCard 
                    logo={logoUninter}
                    interval="2023 - 2027"
                    place="Uninter"
                    role="Software Engineer"
                />
                <EducationCard 
                    logo={logoFrontendMasters}
                    interval="2022 - now"
                    place="Frontend Masters"
                    role="Front-End Developer"
                />
                <EducationCard 
                    logo={logoPositivo}
                    interval="2017 - 2022"
                    place="Universidade Positivo"
                    role="Bachelor of Laws"
                />
            </div>
        </article>
    </div>
    )
}