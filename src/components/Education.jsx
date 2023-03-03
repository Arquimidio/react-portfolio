import logoPositivo from '../assets/images/positivo.png';
import logoUninter from '../assets/images/uninter.png';
import logoFrontendMasters from '../assets/images/masters.png';

export default function Education() {
    return (
    <div className='very-light-bg'>
        <article className="container flex-adapt">
            <h2 className="section-heading">
                Education
            </h2>
            <div className="education-content flex-adapt">
                <div className="edu-container light-bg">
                    <div className="edu-logo image">
                        <img src={logoUninter} alt="" />
                    </div>
                    <div className="edu-text">
                        <p>2023 - now</p>
                        <h3>Uninter</h3>
                        <p>Software Engineer</p>
                    </div>
                </div>
                <div className="edu-container light-bg">
                    <div className="edu-logo image">
                        <img src={logoFrontendMasters} alt="" />
                    </div>
                    <div className="edu-text">
                        <p>2022 - now</p>
                        <h3>Frontend Masters</h3>
                        <p>Web Developer</p>
                    </div>
                </div>
                <div className="edu-container light-bg">
                    <div className="edu-logo image">
                        <img src={logoPositivo} alt="" />
                    </div>
                    <div className="edu-text">
                        <div>2017 - 2022</div>
                        <h3>Universidade Positivo</h3>
                        <p>Bachelor of Laws</p>
                    </div>
                </div>
            </div>
        </article>
    </div>
    )
}