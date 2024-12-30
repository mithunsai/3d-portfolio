import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute top-[120px] max-w-7xl
       mx-auto flex flex-row gap-5`}
      >
        <div className="flex flex-col items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 h-40 sm:h-80 violet-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m&nbsp;
            <span className="text-[#915eff]">Mithun</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I am full stack web developer specialized in{" "}
            <br className="sm:block hidden" />
            Vue.js, React.js, Node.js and Express.js
          </p>
        </div>
      </div>

      <ComputersCanvas/>



    </section>
  );
};

export default Hero;
