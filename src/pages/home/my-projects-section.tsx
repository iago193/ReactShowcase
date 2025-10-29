import { useEffect, useState } from "react";
import Loading from "../../components/loading";
import { FaCode, FaArrowRight } from "react-icons/fa";
interface ProjectProtocol {
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

export default function MyProject() {
  const [projects, setProjects] = useState<ProjectProtocol[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(projects);

  useEffect(() => {
    async function loadProject() {
      try {
        const response = await fetch(
          "https://api.github.com/users/iago193/repos?sort=updated&per_page=10"
        );
        const data = await response.json();

        const formatted = data.map((repo: ProjectProtocol) => ({
          name: repo.name,
          html_url: repo.html_url,
          description: repo.description,
          language: repo.language,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
        }));

        setProjects(formatted);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadProject();
  }, []);

  if (isLoading) return <Loading isLoading={isLoading} />;

  return (
    <section id="projects" className="mx-auto md:mt-72 mt-32 p-4">
      <h2 className="text-amber-50 text-2xl">Meus Projetos</h2>
      <p className="text-emerald-400 text-2xl mb-3">
        Iago Bruno | Desenvolvedor
      </p>

      <div className="flex gap-5 overflow-x-auto overflow-y-hidden py-2 px-1">
        {projects.map((project: ProjectProtocol, index: number) => (
          <div
            key={index}
            className="bg-blue-700/50 p-4 rounded-md w-80 h-80 flex-shrink-0 border border-blue-500/20 hover:scale-[1.02] transition-transform duration-200 relative overflow-hidden"
          >
            {/* TÍTULO — truncar em 1 linha */}
            <h2 className="text-xl font-bold mb-2 flex justify-center text-center truncate">
              {project.name}
            </h2>

            {/* DESCRIÇÃO — limitar em até 5 linhas */}
            <p className="text-gray-400 text-sm mb-4 line-clamp-5">
              {project.description}
            </p>

            {/* LINK */}
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline flex items-center justify-center gap-2"
            >
              Ver no GitHub <FaArrowRight />
            </a>

            {/* ÍCONE DE FUNDO */}
            <div className="absolute top-14 left-10 pointer-events-none">
              <FaCode size={230} className="text-gray-300 opacity-20" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
