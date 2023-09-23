import Login from '@/components/Login'
import AppIntro from '../components/AppIntro'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return (
      <main>
        <section>
          <AppIntro />
        </section>
        <section>
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
