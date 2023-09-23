'use client'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { GiEntryDoor } from 'react-icons/gi'

export default function LoginButton() {
  return (
    <section>
      <form action="submit">
        <label>Usuário</label>
        <input type="text" />
        <label>Senha</label>
        <input type="password" />
        <button type="submit">Entre</button>
      </form>

      <button>
        <GiEntryDoor />
        Criar Conta
      </button>

      <button onClick={() => signIn()}>
        <FcGoogle />
        <p>Entre com o google</p>
      </button>
    </section>
  )
}
