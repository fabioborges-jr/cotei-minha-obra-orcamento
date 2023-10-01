import prisma from '@/lib/db'
import { PiPlus } from 'react-icons/pi'
import { BsFillTrash3Fill } from 'react-icons/bs'
import ProjectButton from '../ProjectButton'

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
      return <ProjectButton />
    } else {
      return <ProjectButton />
    }
  })

  return (
    <div className="flex place-content-around h-2/3 w-8/12">{listProjects}</div>
  )
}
