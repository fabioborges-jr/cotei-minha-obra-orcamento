import Login from '@/components/Login'
import AppIntro from '../components/AppIntro'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import prisma from '../lib/db'

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return (
      <main className="border-red-600 border-2 h-screen flex">
        <section className="flex justify-center items-center w-1/2 bg-color1">
          <AppIntro />
        </section>
        <section className="flex justify-center items-center w-1/2 bg-color2">
          <Login />
        </section>
      </main>
    )
  }

  if (session.user?.email != null) {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    })
    if (!user) {
      const createUser = await prisma.user.create({
        data: {
          email: session.user.email,
        },
      })
    }
  }

  return (
    <main className="bg-color1 h-screen flex place-content-around items-center"></main>
  )
}
