import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';


const SectionWrapperComp = (Component, idName) =>
    function HOC() {
        return (
            <motion.section>
                <Component />
            </motion.section>
        )
    }


export default SectionWrapperComp