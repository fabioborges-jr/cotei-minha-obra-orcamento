'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'
import { GiEntryDoor } from 'react-icons/gi'

export default function LoginButton() {
  const router = useRouter()
  return (
    <section className="flex flex-col">
      <form
        action="submit"
        className="flex flex-col"
        onSubmit={(e) => {
          e.preventDefault()
          signIn('credentials', {
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
          }).then(() => router.refresh())
        }}
      >
        <label htmlFor="email" className="flex flex-col">
          Email
        </label>
        <input className="p-2" type="email" id="email" name="email" />
        <label className="flex flex-col mt-4">Senha</label>
        <input className="p-2" type="password" id="password" name="password" />
        <button className="bg-color5 text-color1 p-2 mt-4" type="submit">
          Entre
        </button>
      </form>

      <button className="mt-4">Esqueci minha senha</button>

      <Link href="/register" className="flex mt-4 self-center align-middle">
        <GiEntryDoor className="mr-4" size={25} />
        Criar Conta
      </Link>

      <button
        className="flex self-center mt-4 border-solid border-color5 border-2 rounded-sm p-2.5 items-center"
        onClick={() => signIn('google')}
      >
        <FcGoogle size={25} />
        <p className="ml-4">Entre com o google</p>
      </button>
    </section>
  )
}
