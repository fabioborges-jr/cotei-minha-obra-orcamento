import prisma from '@/lib/db'

type UserProps = {
  user: {
    id: number
    email: string
    password: string | null
  }
}

export default async function ListProjects(props: UserProps) {
  const projects = await prisma.project.findMany({
    where: { userId: props.user.id },
  })
  const listProjects = projects.map((project) => {
    if (project.name === '') {
      return <button key={project.id}>Crie um novo projeto</button>
    } else {
      return <button key={project.id}>{project.name}</button>
    }
  })

  return <>{listProjects}</>
}
