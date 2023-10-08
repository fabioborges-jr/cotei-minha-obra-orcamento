import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import prisma from '@/lib/db'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import AddCodeModal from '@/components/AddCodeModal'

export default async function Project({ params }: { params: { id: number } }) {
  const session = await getServerSession(authOptions)
  const project = await prisma.project.findUnique({
    where: {
      id: Number(params.id),
    },
  })
  if (project) {
    const subgroups = await prisma.subgroup.findMany({
      where: {
        projectId: project.id,
      },
    })
    console.log(subgroups)
  }
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
      <section className="flex flex-col items-center justify-center w-11/12 h-5/6">
        <nav>
          <Image src="/cotei-logo.svg" width={100} height={100} alt="logo" />
          <h1>{project?.name}</h1>
        </nav>
        <table className="h-3/4 w-5/6 mt-3.5">
          <thead className="bg-color3">
            <tr className="h-14">
              <th>buttonEdit</th>
              <th>FONTE</th>
              <th>CÓDIGO</th>
              <th>DESCRIÇÃO</th>
              <th>UNIDADE</th>
              <th>PREÇO UNITÁRIO</th>
              <th>DATA</th>
            </tr>
          </thead>
          <tbody className="bg-color2">
            <tr>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
            </tr>
            <tr>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
            </tr>
          </tbody>
        </table>
        <AddCodeModal />
      </section>
    </main>
  )
}
