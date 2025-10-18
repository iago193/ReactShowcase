import Logo from "../../assets/img/logo.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex flex-col w-[70%] md:mx-auto md:flex-row mt-48">
      <div className="w-1/2 p-4 min-w-[450px]">
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

      <div className="w-1/2 p-4 flex justify-center min-w-[450px]">
        <img
          className="rounded-[100%] size-[400px]"
          src={Logo}
          alt="Iago Bruno"
        />
      </div>
    </section>
  );
}
