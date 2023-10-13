import prisma from '@/lib/db'

export async function GET({ params }: { params: { id: number } }) {
  console.log(typeof params.id)
  console.log('disparado')
  const getProject = await prisma.project.findMany({
    where: {
      userId: params.id,
    },
  })
  return Response.json(getProject)
}
