import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../contants"
import { fadeIn, textVariant } from '../utils/motion'
import {SectionWrapper} from '../hoc/'
const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] min-h-[280px] flex flex-col justify-evenly items-center">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-[20px] text-white font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>

  )

}
const About = () => {
  return (
    <>
      <motion.div id="about" variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I am a skilled Software developer with experience in JavaScript and specialized in frameworks like Vue.js, React.js and Node.js.
        I am a hard worker, always thriving to reach the top level. I do not like to make myself comfortable with what I have, because
        I truly believe, that is where our growth stops.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) =>
          <ServiceCard key={service.title} index={index} {...service} />
        )}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')