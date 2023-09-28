'use client'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { GiEntryDoor } from 'react-icons/gi'

export default function LoginButton() {
  return (
    <section className="flex flex-col">
      <form action="submit" className="flex flex-col">
        <label className="flex flex-col">
          Usuário <input className="p-2" type="text" />
        </label>
        <label className="flex flex-col mt-4">
          Senha <input className="p-2" type="password" />
        </label>
        <button className="bg-color5 text-color1 p-2 mt-4" type="submit">
          Entre
        </button>
      </form>

      <button className="mt-4">Esqueci minha senha</button>

      <button className="flex mt-4 self-center align-middle">
        <GiEntryDoor className="mr-4" size={25} />
        Criar Conta
      </button>

      <button
        className="flex self-center mt-4 border-solid border-color5 border-2 rounded-sm p-2.5 items-center"
        onClick={() => signIn()}
      >
        <FcGoogle size={25} />
        <p className="ml-4">Entre com o google</p>
      </button>
    </section>
  )
}
