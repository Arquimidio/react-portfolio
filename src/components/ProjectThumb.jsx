import { motion } from "framer-motion"

export default function ProjectThumb(props) {
    const styles = {
        backgroundImage: `url(${props.img})`
    }

    return (
        <motion.div 
            className="project" 
            style={styles}
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
        >
            <div className="project-title">
                <p>{ props.children }</p>
            </div>
        </motion.div>
    )
}