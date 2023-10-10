import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import prisma from '@/lib/db'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import AddCodeModal from '@/components/AddCodeModal'

export default async function Project({ params }: { params: { id: number } }) {
  let listCodes
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
    <main className="bg-color1 h-screen flex justify-center items-center">
      <section className="flex flex-col items-center w-11/12 h-5/6">
        <nav>
          <Image src="/cotei-logo.svg" width={100} height={100} alt="logo" />
          <h1>{project?.name}</h1>
        </nav>
        <div className="flex bg-color3 text-color1 w-full mt-3.5 text-center h-10 items-center">
          <h1></h1>
          <h1 className="w-1/12">FONTE</h1>
          <h1 className="w-1/12">CÓDIGO</h1>
          <h1 className="grow">DESCRIÇÃO</h1>
          <h1 className="w-1/12">UNIDADE</h1>
          <h1 className="w-1/12">PREÇO UNITÁRIO</h1>
          <h1 className="w-1/12">DATA</h1>
        </div>
        <AddCodeModal projectId={params.id} />
      </section>
    </main>
  )
}
