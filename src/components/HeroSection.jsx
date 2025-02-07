import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const HeroSection=()=> {
const ref = useRef(null);
const isInView = useInView(ref, { triggerOnce: true });

const handleDownload = () => {
    // Replace with the actual path to your resume file
    const fileId = "1-GxOMw3uRQPORIQV3ie2yLoJv49-SVs8";
    const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Create a hidden anchor element for downloading
    const link = document.createElement("a");
    link.href = directDownloadUrl;
    link.setAttribute("download", "Your_Resume.pdf"); // File name after download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" ref={ref} className="bg-[#0f0f1a] min-h-[80vh] flex flex-col md:flex-row justify-center items-center text-left p-10 text-white relative">
      <div className="md:w-1/2 flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Hey, I am <span className="text-purple-400">ZUBAIR AL MAMUN</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-lg text-gray-400 mb-6 max-w-xl"
        >
           A passionate web developer primarily use MERN stack technologi for building websites. 
        </motion.p>
        <motion.a
        
          
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-purple-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-purple-700 transition-all w-fit"
        >
          <button onClick={handleDownload}>Download CV</button>
        </motion.a>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-lg text-gray-400 mb-6 max-w-xl">
        <div className="flex justify-left space-x-4 py-4">
      <a
        href="https://github.com/ZubairAlMamun2"
        target="_blank"
        className="text-white bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition duration-300"
      >
        <FaGithub className="text-2xl" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/"
        target="_blank"
        className="text-white bg-blue-600 p-3 rounded-full hover:bg-blue-500 transition duration-300"
      >
        <FaLinkedin className="text-2xl" />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/zubair.almamun.92"
        target="_blank"
        className="text-white bg-blue-700 p-3 rounded-full hover:bg-blue-600 transition duration-300"
      >
        <FaFacebook className="text-2xl" />
      </a>
    </div>
        </motion.div>
      </div>
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          src="https://lh3.googleusercontent.com/a/ACg8ocKJ5nGhvKSVvqIImBJhItMNNvygKrTDXcUeMJhR-5KK8RxQDVEJ=s288-c-no"
          alt="Gerold"
          className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-purple-500 shadow-lg"
        />
      </div>
    </section>
  );
}

export default HeroSection
