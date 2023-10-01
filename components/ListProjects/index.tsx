import prisma from '@/lib/db'
import { PiPlus } from 'react-icons/pi'
import { BsFillTrash3Fill } from 'react-icons/bs'

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
      return (
        <button
          className="bg-color2 rounded-sm px-32 flex flex-col items-center justify-center"
          key={project.id}
        >
          <PiPlus size={40} className="mb-1" />
          CRIE UM NOVO PROJETO
          <BsFillTrash3Fill size={24} />
        </button>
      )
    } else {
      return (
        <button className="bg-color2 rounded-sm px-32" key={project.id}>
          <PiPlus size={40} className="mb-1" />
          {project.name}
          <BsFillTrash3Fill size={24} />
        </button>
      )
    }
  })

  return (
    <div className="flex place-content-around h-2/3 w-8/12">{listProjects}</div>
  )
}
