import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Transition, Variants } from "framer-motion";
import imagesSkills from "../../utils/image-skill";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SkillKey = keyof typeof imagesSkills;

export default function SkillsSection() {
  const languages: SkillKey[] = [
    "css",
    "html",
    "js",
    "mysql",
    "mongo",
    "git",
    "github",
  ];

  const frameworks: SkillKey[] = ["react", "next", "node", "tailwind"];

  const [indexLang, setIndexLang] = useState<number>(0);
  const [indexFrame, setIndexFrame] = useState<number>(0);

  const visibleCount = 3;

  // Função para avançar/voltar
  const paginate = (
    setIndex: React.Dispatch<React.SetStateAction<number>>,
    items: SkillKey[],
    direction: number
  ) => {
    setIndex((prev) => (prev + direction + items.length) % items.length);
  };

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(setIndexLang, languages, 1);
      paginate(setIndexFrame, frameworks, 1);
    }, 3000); // troca a cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  // Cálculo dos itens visíveis
  const getVisibleItems = (arr: SkillKey[], start: number): SkillKey[] => {
    const result: SkillKey[] = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(arr[(start + i) % arr.length]);
    }
    return result;
  };

  // Transition tipado corretamente
  const transition: Transition = { duration: 0.6, ease: [0.42, 0, 0.58, 1] }; // cubic-bezier para easeInOut

  // Variants tipados
  const variants: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  };

  // Função de renderização do carrossel
  const renderCarousel = (
    title: string,
    items: SkillKey[],
    index: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const visibleItems = getVisibleItems(items, index);

    return (
      <div className="relative border-4 border-blue-700/50 rounded-2xl p-10 mb-10 overflow-hidden">
        <h3 className="text-gray-500 mb-4 text-xl px-2">{title}</h3>

        <div className="relative flex justify-center items-center">
          {/* Botão esquerdo */}
          <button
            onClick={() => paginate(setIndex, items, -1)}
            className="absolute left-2 bg-blue-700/30 hover:bg-blue-700/50 text-white p-2 rounded-full z-10"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Container das imagens */}
          <div className="flex gap-8 overflow-hidden">
            <AnimatePresence>
              {visibleItems.map((skill) => (
                <motion.img
                  key={skill}
                  src={imagesSkills[skill]}
                  alt={skill}
                  className="w-[100px] h-[100px]"
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={transition}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Botão direito */}
          <button
            onClick={() => paginate(setIndex, items, 1)}
            className="absolute right-2 bg-blue-700/30 hover:bg-blue-700/50 text-white p-2 rounded-full z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full mt-32">
      <h2 className="text-emerald-50 px-2 text-2xl">
        Minhas Skills & Habilidades
      </h2>
      <p className="text-emerald-400 px-2 mb-6 text-2xl">
        Iago Bruno | Desenvolvedor
      </p>

      {renderCarousel("Languages", languages, indexLang, setIndexLang)}
      {renderCarousel(
        "Frameworks & Libraries",
        frameworks,
        indexFrame,
        setIndexFrame
      )}
    </section>
  );
}
