import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import prisma from '@/lib/db'
import { redirect } from 'next/navigation'

export default async function Project({ params }: { params: { id: number } }) {
  const session = await getServerSession(authOptions)
  console.log(session)
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
  return <h1>Hello World {params.id}</h1>
}
