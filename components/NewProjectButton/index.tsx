'use client'
import { PiPlus } from 'react-icons/pi'
import { BsFillTrash3Fill } from 'react-icons/bs'

type ButtonProps = {
  project: {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    userId: number | null
  }
}

export default function NewProjectButton(props: ButtonProps) {
  return (
    <button
      onClick={handleCreateProject}
      className="bg-color2 rounded-sm px-32 flex flex-col items-center justify-center"
    >
      <PiPlus size={40} className="mb-1" />
      CRIE UM NOVO PROJETO
    </button>
  )
}
