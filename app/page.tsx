import Login from '@/components/Login'
import AppIntro from '../components/AppIntro'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return (
      <main className="border-black border-2 flex h-screen justify-center">
        <section className="border-black border-2 self-center">
          <AppIntro />
        </section>
        <section className="border-black border-2 self-center">
          <Login />
        </section>
      </main>
    )
  }
  if (session) {
    return (
      <main>
        <p>Com sessão</p>
      </main>
    )
  }
}
