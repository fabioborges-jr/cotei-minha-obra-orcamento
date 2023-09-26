const listProjects = projects.map((project) =>
  typeof project.name !== 'undefined' ? (
    <button
      className="bg-color2 h-3/5 w-1/6 rounded-sm flex justify-center items-center"
      key={project.id}
    >
      {project.name}
    </button>
  ) : (
    <button key={project.id}>Crie um novo projeto</button>
  ),
)
