export default function Skill(props) {
    return (
        <div className="skill">
            <div className="image">
                <img src={props.icon}/>
            </div>
            <p>{props.children}</p>
            <div className="image bg-img">
                <img src={props.icon}/>
            </div>
        </div>
    )
}