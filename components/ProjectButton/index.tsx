'use client'
import { PiPlus } from 'react-icons/pi'
import { BsFillTrash3Fill } from 'react-icons/bs'

export default function ProjectButton(buttonProps) {
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
}
