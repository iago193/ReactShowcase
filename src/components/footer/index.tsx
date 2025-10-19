import { Link } from "react-router-dom";
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bottom-0 text-emerald-500 mt-100 bg-blue-700/50">
      <div className="w-[70%] flex flex-col md:flex-row md:justify-center md:items-center mx-auto">
        <div className="w-1/2 mt-4">
          <h4 className="text-neutral-400">Web Developer</h4>
          <h2>Iago Bruno | Developer</h2>
            <i className="flex gap-4 mt-5 mb-10">
                <FaWhatsapp size={30} />
                <FaGithub size={30} />
                <FaLinkedin size={30} />
            </i>
        </div>
        <div className="w-1/2 flex md:justify-end">
          <nav className="flex gap-4">
            <Link to="/"> Home </Link>
            <Link to="/"> Sobre </Link>
            <Link to="/"> Projetos </Link>
            <Link to="/"> Contato </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
