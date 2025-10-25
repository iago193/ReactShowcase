import { useEffect, useState } from "react";
import Loading from "../../components/loading";
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
    <section className="mx-auto mt-96">
      <h2 className="text-amber-50 pb-5">Hello, world</h2>
      <div className="flex gap-5 overflow-x-auto overflow-y-hidden py-2 px-1">
        {projects.map((project: ProjectProtocol, index: number) => (
          <div
            key={index}
            className="bg-blue-700/50 p-4 rounded-md w-80 h-80 flex-shrink-0 border border-blue-500/20 hover:scale-[1.02] transition-transform duration-200"
          >
            <h2 className="text-xl font-bold mb-2">{project.name}</h2>
            <p className="text-gray-400 text-sm mb-4 line-clamp-5">
              {project.description}
            </p>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline"
            >
              Ver no GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
