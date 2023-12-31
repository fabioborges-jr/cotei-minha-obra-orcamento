import Login from '@/components/Login'
import AppIntro from '../components/AppIntro'
import ListProjects from '../components/ListProjects'
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
    const userEmail = session.user.email
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    })

    // Create a user
    if (!user) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const createUser = await prisma.user.create({
        data: {
          email: userEmail,
        },
      })
      const user = await prisma.user.findUnique({
        where: { email: userEmail },
      })
      if (user != null) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const createProjects = await prisma.project.createMany({
          data: [
            {
              name: '',
              userId: user.id,
            },
            {
              name: '',
              userId: user.id,
            },
            {
              name: '',
              userId: user.id,
            },
          ],
        })
      }
    }

    if (user != null)
      return (
        <main className="bg-color1 h-screen flex justify-center items-center">
          <ListProjects user={user} />
        </main>
      )
  }
}
