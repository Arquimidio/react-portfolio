export default function ProjectThumb(props) {
    return (
        <article>
            <div>
                <img src={props.img} alt="Project thumbnail" />
            </div>
            <div>
                <p>{ props.title }</p>
            </div>
        </article>
    )
}