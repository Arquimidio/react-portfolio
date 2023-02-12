export default function ProjectThumb(props) {
    const styles = {
        backgroundImage: `url(${props.img})`
    }

    return (
        <div className="project" style={styles}>
            <div className="project-title">
                <p>{ props.children }</p>
            </div>
        </div>
    )
}