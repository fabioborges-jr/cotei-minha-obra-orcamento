import Login from '@/components/Login'
import AppIntro from '../components/AppIntro'
import ListProjects from '../components/ListProjects'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import prisma from '../lib/db'

export default async function Home() {
  const session = await getServerSession(authOptions)
  // Checking session
  if (session?.user?.email) {
    const { email } = session.user
    const user = await prisma.user.findUnique({
      where: { email },
    })

    // Checking if the user session are registered at db
    if (!user) {
      // Create a new user
      const createUser = await prisma.user.create({
        data: {
          email,
        },
      })
      // Creating the instances for user's projects
      const createProjects = await prisma.project.createMany({
        data: [
          {
            name: '',
            userId: createUser.id,
          },
          {
            name: '',
            userId: createUser.id,
          },
          {
            name: '',
            userId: createUser.id,
          },
        ],
      })
    }

    return (
      <main className="bg-color1 h-screen flex justify-center items-center">
        <ListProjects user={user} />
      </main>
    )
  } else {
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
}
