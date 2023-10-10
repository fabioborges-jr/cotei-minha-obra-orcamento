'use client'
import { PiPlus } from 'react-icons/pi'
import { useState } from 'react'
import Modal from 'react-modal'
import { redirect } from 'next/navigation'

type NewProjectProps = {
  project: {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    userId: number
  }
}

export default function NewProjectButton(props: NewProjectProps) {
  // modal settings
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

  // insert new project at DB
  const [nameProject, setNameProject] = useState('')
  const existingProject = props.project
  const data = {
    nameProject,
    existingProject,
  }
  function handleProjectName(e: React.ChangeEvent<HTMLInputElement>) {
    setNameProject(e.target.value)
  }
  async function handleCreateProject() {
    const response = await fetch('api/project', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    closeModal()
    redirect('/')
  }

  return (
    <>
      <Modal
        style={{
          overlay: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
        className="bg-color2 h-1/5 w-1/5 place-content-center rounded-sm flex flex-col items-center p-10"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Create projects"
      >
        <p className="">Qual será o nome do seu novo projeto?</p>
        <div>
          <input
            className="mt-3"
            type="text"
            onChange={(e) => handleProjectName(e)}
          />
          <button
            onClick={handleCreateProject}
            className="bg-color5 text-color1 px-3.5 ml-3"
          >
            Ok
          </button>
        </div>
      </Modal>
      <button
        onClick={openModal}
        className="bg-color2 rounded-sm w-1/5 flex flex-col items-center justify-center"
      >
        <PiPlus size={40} className="mb-1" />
        CRIE UM NOVO PROJETO
      </button>
    </>
  )
}
