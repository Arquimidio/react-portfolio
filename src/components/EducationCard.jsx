export default function EducationCard(props) {
    return (
        <div className="edu-container light-bg">
            <div className="edu-logo image">
                <img src={props.logo} alt="" />
            </div>
            <div className="edu-text">
                <p>{ props.interval }</p>
                <h3>{ props.place }</h3>
                <p>{ props.role }</p>
                <p>{ props.children }</p>
            </div>
        </div>
    )
}