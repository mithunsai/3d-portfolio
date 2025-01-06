import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { experiences } from "../contants";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center w-full h-full items-center">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
      date={experience.date}
    >
      <div>
        <h3 className="font-bold text-white text-[24px]">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        <ul className="mt-5 ml-5 list-disc space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I have done so far</p>
      <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline layout="1-column-left">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.company_name}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Experience, "work");
