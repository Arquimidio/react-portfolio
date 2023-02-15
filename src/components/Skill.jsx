import { motion } from "framer-motion"

export default function Skill(props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
        >
            <div className="skill">
                <div className="image">
                    <img src={props.icon}/>
                </div>
                <p>{props.children}</p>
                <div className="image bg-img">
                    <img src={props.icon}/>
                </div>
            </div>
        </motion.div>
    )
}
