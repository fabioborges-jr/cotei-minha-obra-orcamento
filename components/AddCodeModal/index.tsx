'use client'
import Modal from 'react-modal'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

type ProjectIdProps = {
  projectId: number
}

type CodeProps = {
  id: number
  description: string
  font: string
  codeReference: string
  unit: string
  price: number
  dateReference: string
}

export default function AddCodeModal(props: ProjectIdProps) {
  const projectId = props.projectId
  const [modalIsOpen, setIsOpen] = useState(false)
  const [searchCode, setSearchCode] = useState('')
  const [description, setDescription] = useState('')
  const [listCodeReferences, setCodeReferences] = useState([])
  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false)
  }

  async function handleSearch() {
    const response = await fetch('http://localhost:3000/api/coderef', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    const codeReferences = data.map((code: CodeProps) => {
      const dateParts = code.dateReference.split('-')
      const year = dateParts[0]
      const month = dateParts[1]

      return code.codeReference === searchCode ? (
        <button
          key={code.id}
          className="flex text-color5 w-full mt-2.5"
          onClick={() => handleSelectCode(code.codeReference)}
        >
          <h1 className="bg-color1 w-1/12 h-auto m-1 items-center p-2">
            {code.font}
          </h1>
          <h1 className="bg-color1 w-1/12 h-auto m-1 items-center p-2">
            {code.codeReference}
          </h1>
          <h1 className="bg-color1 grow h-auto text-start m-1 p-2">
            {code.description}
          </h1>
          <h1 className="bg-color1 w-1/12 h-auto m-1 p-2">{code.unit}</h1>
          <h1 className="bg-color1 w-1/12 h-auto m-1 p-2">{code.price}</h1>
          <h1 className="bg-color1 w-1/12 h-auto m-1 p-2">
            {month}/{year}
          </h1>
        </button>
      ) : null
    })
    setCodeReferences(codeReferences)
  }

  async function handleSelectCode(codeReference: string) {
    const data = {
      codeReference,
      projectId,
    }
    console.log(data)
    const response = await fetch('http://localhost:3000/api/code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    closeModal()
  }

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
        className="bg-color2 h-4/5 w-5/6 rounded-sm flex flex-col items-center p-10"
      >
        <h1>CONSULTE UMA COMPOSIÇÃO </h1>
        <div className="flex mt-3.5">
          <label className="flex flex-col">
            CÓDIGO
            <input
              type="text"
              onChange={(e) => setSearchCode(e.target.value)}
            ></input>
          </label>
          <button
            onClick={handleSearch}
            className="ml-3.5 bg-color1 h-10 px-2 mt-2"
          >
            <BsSearch size={24} />
          </button>
          <label className="flex flex-col ml-3.5">
            DESCRIÇÃO
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </label>
          <button
            onClick={handleSearch}
            className="ml-3.5 bg-color1 h-10 px-2 mt-2"
          >
            <BsSearch size={24} />
          </button>
        </div>
        <h1 className="self-start mt-5">Resultados:</h1>
        <div className="flex bg-color5 text-color1 w-full mt-3.5 h-10 text-center items-center m-1">
          <h1 className="w-1/12 justify-center m-1">FONTE</h1>
          <h1 className="w-1/12 justify-center m-1">CÓDIGO</h1>
          <h1 className="grow m-1">DESCRIÇÃO</h1>
          <h1 className="w-1/12 m-1">UNIDADE</h1>
          <h1 className="w-1/12 m-1">PREÇO</h1>
          <h1 className="w-1/12 m-1">DATA</h1>
        </div>
        {listCodeReferences}
      </Modal>
      <button className="bg-color2 w-full text-left" onClick={openModal}>
        ADICIONE UM NOVO CÓDIGO
      </button>
    </>
  )
}
