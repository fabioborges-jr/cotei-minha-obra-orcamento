'use client'
import { PiPlus } from 'react-icons/pi'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { useState } from 'react'
import Modal from 'react-modal'

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
  const [modalIsOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  function afterOpenModal() {
    // references
  }

  return (
    <>
      <Modal
        className="bg-color2 h-2/3 w-3/4 place-content-center"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Create projects"
        style={{
          overlay: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      ></Modal>
      <button
        onClick={openModal}
        className="bg-color2 rounded-sm px-32 flex flex-col items-center justify-center"
      >
        <PiPlus size={40} className="mb-1" />
        CRIE UM NOVO PROJETO
      </button>
    </>
  )
}
