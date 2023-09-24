'use client'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { GiEntryDoor } from 'react-icons/gi'

export default function LoginButton() {
  return (
    <section className="flex flex-col">
      <form action="submit" className="flex flex-col">
        <label className="flex flex-col">
          Usuário <input type="text" />
        </label>
        <label className="flex flex-col m-4">
          Senha <input type="password" />
        </label>
        <button type="submit">Entre</button>
      </form>

      <button className="flex">
        <GiEntryDoor />
        Criar Conta
      </button>

      <button className="flex" onClick={() => signIn()}>
        <FcGoogle />
        <p>Entre com o google</p>
      </button>
    </section>
  )
}
