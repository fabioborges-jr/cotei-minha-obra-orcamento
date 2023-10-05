import prisma from '@/lib/db'
import ProjectButton from '../ProjectButton'
import NewProjectButton from '../NewProjectButton'

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
    if (project.name.length === 0) {
      return <NewProjectButton project={project} key={project.id} />
    } else {
      return <ProjectButton project={project} key={project.id} />
    }
  })

  return (
    <div className="flex place-content-around h-2/3 w-8/12">{listProjects}</div>
  )
}
