'use client'
import Modal from 'react-modal'
import { useState } from 'react'

export default function AddCodeModal() {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [selectCode, setSelectCode] = useState(true)
  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false)
  }
  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === 'code') setSelectCode(true)
    if (e.target.value === 'sub') setSelectCode(false)
  }
  if (selectCode) {
    return (
      <>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={{
            overlay: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
          className="bg-color2 h-1/5 w-1/5 place-content-center rounded-sm flex flex-col items-center p-10"
        >
          <select onChange={handleSelect}>
            <option value="code">NOVO CÓDIGO</option>
            <option value="sub">NOVO SUBGRUPO</option>
          </select>
          <h1>CONSULTE UMA COMPOSIÇÃO </h1>
        </Modal>
        <button className="bg-color2 w-5/6" onClick={openModal}>
          NOVO CÓDIGO OU SUBGRUPO
        </button>
      </>
    )
  } else {
    return (
      <>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={{
            overlay: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
          className="bg-color2 h-1/5 w-1/5 place-content-center rounded-sm flex flex-col items-center p-10"
        >
          <select onChange={handleSelect}>
            <option value="code">NOVO CÓDIGO</option>
            <option value="sub">NOVO SUBGRUPO</option>
          </select>
          <h1>CONSULTE UMA COMPOSIÇÃO </h1>
        </Modal>
        <button className="bg-color2 w-5/6" onClick={openModal}>
          NOVO CÓDIGO OU SUBGRUPO
        </button>
      </>
    )
  }
}
