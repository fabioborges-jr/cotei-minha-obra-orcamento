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
}

export default function ProjectButton(props: ButtonProps) {
  async function handleDeleteProject() {
    const data = {
      existingProject: {
        id: props.project.id,
      },
      nameProject: '',
    }
    const response = await fetch('api/project', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }
  return (
    <Link
      href="/project"
      className="relative bg-color2 rounded-sm w-1/5 flex flex-col items-center justify-center"
    >
      <button className="">
        {props.project.name}
        <BsFillTrash3Fill
          onClick={handleDeleteProject}
          className="absolute right-0 bottom-0 mb-3 mr-3"
          size={24}
        />
      </button>
    </Link>
  )
}
