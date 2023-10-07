import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import prisma from '@/lib/db'
import { redirect } from 'next/navigation'
import Image from 'next/image'

export default async function Project({ params }: { params: { id: number } }) {
  const session = await getServerSession(authOptions)
  const project = await prisma.project.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  if (session?.user?.email != null) {
    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    })
    if (project?.userId !== user?.id) {
      redirect('/')
    }
  }
  return (
    <main className="bg-color1 h-screen">
      <nav>
        <Image src="/cotei-logo.svg" width={100} height={100} alt="logo" />
        <h1>{project?.name}</h1>
      </nav>
    </main>
  )
}
