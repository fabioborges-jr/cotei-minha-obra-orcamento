'use client'
import { BsFillTrash3Fill } from 'react-icons/bs'
import Link from 'next/link'

type ButtonProps = {
  project: {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    userId: number | null
  }
  getProjects(): Promise<void>
}

export default function ProjectButton(props: ButtonProps) {
  async function handleDeleteProject() {
    const data = {
      existingProject: {
        id: props.project.id,
      },
      nameProject: '',
    }
    const response = await fetch(
      'http://localhost:3000/api/project',
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    )
    props.getProjects()
  }
  return (
    <div className="relative bg-color2 rounded-sm w-1/5 flex flex-col items-center justify-center">
      <Link href={`/project/${props.project.id}`}>
        <button className="hover:underline">{props.project.name}</button>
      </Link>
      <button
        className="absolute right-0 bottom-0 m-2"
        onClick={handleDeleteProject}
      >
        <BsFillTrash3Fill size={24} />
      </button>
    </div>
  )
}
