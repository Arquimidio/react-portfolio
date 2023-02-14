import Contact from "./Contact"
import Logo from "./Logo"
import Socials from "./Socials"

export default function Footer() {
    return (
        <footer className="container">
            <div className="col-low-gap">
                <Logo />
                <Socials size="medium" />
                <p>©2023 Gabriel Stoppa. All rights reserved.</p>
            </div>
            <Contact />
        </footer>
    )
}