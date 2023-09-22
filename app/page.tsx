import LoginButton from '@/components/LoginButton/intex'
import AppIntro from '../components/AppIntro'
import { authOptions } from './api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'

export default async function Home() {
  return (
    <main>
      <AppIntro />
      <LoginButton />
    </main>
  )
}
