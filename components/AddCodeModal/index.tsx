'use client'
import Modal from 'react-modal'
import { useState } from 'react'

export default function AddCodeModal() {
  const [modalIsOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      ></Modal>
      <button className="bg-color2 w-5/6" onClick={openModal}>
        NOVO CÓDIGO OU SUBGRUPO
      </button>
    </>
  )
}
