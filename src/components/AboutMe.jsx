import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutMe=()=> {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true });
  return (
    <section ref={ref} id="about" className="bg-gray-900 text-white py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-purple-400 mb-6"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          Hi, I'm Zubair Al Mamun, a passionate web developer primarily use MERN stack technologi for building websites. I love crafting user-friendly, responsive, and high-performance web applications. I am also a fast learner and passionate about implementing and launching new projects and ideas.
          <br /><br />
          I started programming since 2022 but not proparly. In last year I joined with programming hero as a student and learning a lot of things
          <br /><br />
          I enjoy designing seamless user interfaces, optimizing web performance, and bringing creative ideas to life through clean and efficient code. 
          <br /><br />
          Outside of coding, I love gameing, enjoy photography, and love hiking in nature. These activities keep me inspired and bring balance to my creative work.
          <br /><br />
          I’m always looking for new opportunities to learn and collaborate on exciting projects. Let’s create something amazing together!
        </motion.p>
      </div>
    </section>
  );
}

export default AboutMe