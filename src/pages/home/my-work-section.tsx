import { motion } from "framer-motion";
import { FaHtml5,FaCog } from "react-icons/fa";

export default function MyWork() {
  return (
    <section id="my-work" className="w-full flex flex-col xl:flex-row mt-150 mb-80 items-center">
      {/* Lado esquerdo - Backend e Frontend */}
      <div className="xl:w-1/2 md:p-4 w-[100%]">
        {/* Backend */}
        <motion.div
          className="bg-blue-700/50 p-10 text-amber-50 rounded-2xl shadow-lg relative min-w-[400px] lg:min-w-[700px]"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-emerald-400 absolute top-6 right-8">
            <FaCog size={60} />
          </div>
          <h2 className="text-emerald-400 text-2xl">Backend</h2>
          <p className="mt-10">
            Atuo na integração entre o client-side e o banco de dados por meio
            de APIs bem estruturadas e escaláveis. Dou ênfase à performance das
            aplicações, utilizando recursos como programação assíncrona,
            execução paralela e processamento sob demanda em Node.js. Adoto
            práticas de TDD para garantir confiabilidade e mantenho uma
            arquitetura limpa e organizada, sempre alinhada aos princípios de
            Clean Code.
          </p>
        </motion.div>

        {/* Frontend */}
        <motion.div
          className="bg-blue-700/50 p-10 mt-5 text-amber-50 rounded-2xl shadow-lg relative min-w-[400px] lg:min-w-[700px]"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-emerald-400 absolute top-6 right-8">
            <FaHtml5 size={60} />
          </div>
          <h2 className="text-emerald-400 text-2xl">Frontend</h2>
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
        className="xl:w-1/2 w-[100%] p-4 text-2xl min-w-[400px] lg:min-w-[700px]"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-amber-50">Meu trabalho</h2>
        <p className="text-emerald-400">Iago Bruno | Desenvolvedor</p>
        <p className="text-amber-50 mt-10">
          Sou desenvolvedor Full Stack focado em criar aplicações web modernas e
          eficientes. Trabalho com JavaScript e TypeScript, utilizando Node.js
          no backend e React no frontend. Tenho experiência no desenvolvimento
          de APIs, integração de sistemas e uso do SQL Server como banco de
          dados principal. Atualmente, estou aprimorando minhas habilidades em
          Inteligência Artificial, Machine Learning, criação de dashboards
          interativos em React e otimização de performance no backend com
          Node.js.
        </p>
      </motion.div>
    </section>
  );
}
