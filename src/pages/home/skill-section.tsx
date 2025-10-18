import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import imagesSkills from "../../utils/image-skill";

const imageVariants: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
  hover: {
    y: -10,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

// Variants para o container da seção
const containerVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function SkillsSection() {
  const languages: (keyof typeof imagesSkills)[] = [
    "css",
    "html",
    "js",
    "mysql",
    "mongo",
    "git",
    "github",
  ];

  const frameworks: (keyof typeof imagesSkills)[] = [
    "react",
    "next",
    "node",
    "tailwind",
  ];

  const renderImages = (items: (keyof typeof imagesSkills)[]) =>
    items.map((skill, index) => (
      <motion.img
        key={skill}
        src={imagesSkills[skill]}
        alt={skill}
        className="img-effect w-[100px] h-[100px]"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        transition={{ delay: index * 0.05 }}
      />
    ));

  return (
    <motion.section
      className="w-[100%] ml-5 md:mx-auto md:w-[70%] mt-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // anima uma vez ao aparecer 30% na tela
    >
      <div>
        <h2 className="text-emerald-50 px-2 text-3xl">Minhas Skills & Habilidades</h2>
        <p className="text-emerald-400 px-2 mb-2 text-2xl">Iago Bruno | Desenvolvedor</p>

        {/* Linguagens */}
        <h3 className="text-gray-500 mb-2 text-xl px-2">Languages</h3>
        <div className="flex flex-wrap gap-8 mb-10 justify-center border-4 border-blue-700/50 rounded-2xl p-10">
          {renderImages(languages)}
        </div>

        {/* Frameworks / Bibliotecas */}
        <h3 className="text-gray-500 mb-2 text-xl px-2">Frameworks & Libraries</h3>
        <div className="flex flex-wrap gap-8 justify-center border-4 border-blue-700/50 rounded-2xl p-10">
          {renderImages(frameworks)}
        </div>
      </div>
    </motion.section>
  );
}
