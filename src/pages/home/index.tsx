import Logo from "../../assets/img/logo.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import SkillsSection from "./skill-section";

export default function Home() {
  return (
    <main className="w-full">
      <section className="w-[70%] mx-auto flex flex-row mt-48">
        <div className="w-1/2 p-4">
          <p className="text-gray-800 mb-5">Web Developer</p>
          <h2 className="text-amber-50 font-bold text-5xl">Olá, tudo bom?</h2>
          <h2 className="text-emerald-400 italic drop-shadow-lg font-bold text-6xl my-2">
            Sou o Iago Bruno
          </h2>
          <p className="text-amber-50 mt-10 text-[25px]">
            Desenvolvedor Full Stack especializado em JavaScript/TypeScript, com
            foco em soluções robustas usando Node, React, Next e MySql/MongoDb.
          </p>

          <div className="flex gap-10 mt-10">
            <a
              href="https://www.linkedin.com/in/iago-bruno-aa1630355/"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-offset-6 w-42 gap-1 outline-4 outline-emerald-400 bg-emerald-400 rounded-2xl flex items-center py-4 px-10 hover:bg-emerald-500 transition-colors duration-300"
            >
              <FaLinkedin className="text-3xl text-black" />
              Linkedin
            </a>

            <a
              href="https://github.com/iago193"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-offset-6 w-42 gap-1 outline-4 outline-emerald-400 bg-emerald-400 rounded-2xl flex items-center py-4 px-10 hover:bg-emerald-500 transition-colors duration-300"
            >
              <FaGithub className="text-3xl text-black" />
              Github
            </a>
          </div>
        </div>

        <div className="w-1/2 p-4 flex justify-center">
          <img
            className="rounded-[100%] size-[400px]"
            src={Logo}
            alt="Iago Bruno"
          />
        </div>
      </section>

      <section className="w-[70%] mx-auto flex flex-row mt-130 mb-80">
        {/* Lado esquerdo - Backend e Frontend */}
        <div className="w-1/2 p-4">
          {/* Backend */}
          <motion.div
            className="bg-blue-700/50 p-10 text-amber-50 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-emerald-400 text-3xl">Backend</h2>
            <p className="mt-10">
              Atuo na integração entre o client-side e o banco de dados por meio
              de APIs bem estruturadas e escaláveis. Dou ênfase à performance
              das aplicações, utilizando recursos como programação assíncrona,
              execução paralela e processamento sob demanda em Node.js. Adoto
              práticas de TDD para garantir confiabilidade e mantenho uma
              arquitetura limpa e organizada, sempre alinhada aos princípios de
              Clean Code.
            </p>
          </motion.div> 

          {/* Frontend */}
          <motion.div
            className="bg-blue-700/50 p-10 mt-5 text-amber-50 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-emerald-400 text-3xl">Frontend</h2>
            <p className="mt-10">
              Desenvolvo interfaces modernas, responsivas e de alta performance,
              com foco em interatividade e experiência do usuário. Utilizo
              componentes reutilizáveis e estilos consistentes, sempre seguindo
              boas práticas de UI/UX. Mantenho uma estrutura de projeto bem
              organizada, com pastas e componentes claramente definidos,
              garantindo fácil manutenção, escalabilidade e uma estética
              profissional em cada aplicação.
            </p>
          </motion.div>
        </div>

        {/* Lado direito - Meu trabalho */}
        <motion.div
          className="w-1/2 p-4 text-2xl"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-amber-50">Meu trabalho</h2>
          <p className="text-emerald-400">Iago Bruno | Desenvolvedor</p>
          <p className="text-amber-50 mt-10">
            Sou desenvolvedor Full Stack focado em criar aplicações web modernas
            e eficientes. Trabalho com JavaScript e TypeScript, utilizando
            Node.js no backend e React no frontend. Tenho experiência no
            desenvolvimento de APIs, integração de sistemas e uso do SQL Server
            como banco de dados principal. Atualmente, estou aprimorando minhas
            habilidades em Inteligência Artificial, Machine Learning, criação de
            dashboards interativos em React e otimização de performance no
            backend com Node.js.
          </p>
        </motion.div>
      </section>

    <SkillsSection />

    </main>
  );
}
