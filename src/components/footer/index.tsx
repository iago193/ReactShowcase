import { Link } from "react-scroll";
import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const circleRound = 'bg-amber-50/10 p-2 rounded-[100%]'
  return (
    <footer
      id="footer"
      className="w-full text-emerald-500 mt-100 bg-blue-700/50"
    >
      <div className="text-[20px] md:text-2xl w-[70%] mx-auto flex flex-col md:flex-row md:justify-center md:items-center">
        <div className="w-1/2 mt-4">
          <h4 className="text-amber-50/40 text-[20px]">Web Developer</h4>
          <h2>Iago Bruno | Developer</h2>
          <ul className="flex gap-4 mt-5 mb-10">
            <li className={circleRound}>
              <a
                href="https://wa.me/5584991454957"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={40} />
              </a>
            </li>
            <li className={circleRound}>
              <a
                href="https://github.com/iago193"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={40} />
              </a>
            </li>
            <li className={circleRound}>
              <a
                href="https://www.linkedin.com/in/iago-bruno-aa1630355/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={40} />
              </a>
            </li>
            <li className={circleRound}>
              <a href="mailto:iago.silva6969@gmail.com">
                <FaEnvelope size={40} />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/2 md:mt-[-100px] flex md:justify-end">
          <nav className="flex gap-4">
            <ul className={`flex gap-4 text-amber-50/40`}>
              <li>
                <Link
                  to="hero-section"
                  smooth={true}
                  duration={500}
                  offset={-180} // ajusta a altura por causa do header fixo
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="my-work" smooth={true} duration={500} offset={-300}>
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="projetos" smooth={true} duration={500} offset={-100}>
                  Projetos
                </Link>
              </li>
              <li>
                <Link to="contato" smooth={true} duration={500} offset={-100}>
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
