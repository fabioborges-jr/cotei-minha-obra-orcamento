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

export default function ProjectButton(props: ButtonProps) {
  return (
    <button className="bg-color2 rounded-sm px-32 flex flex-col items-center justify-center">
      {props.project.name}
      <BsFillTrash3Fill size={24} />
    </button>
  )
}
