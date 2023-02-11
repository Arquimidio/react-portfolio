export default function Divider(props) {
    return (
        <div className={
            `divider ${props.hideMobile? 'hide-on-mobile' : 'hide-on-desktop'}`
        }></div>
    )
}