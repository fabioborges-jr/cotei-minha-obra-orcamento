import prisma from '@/lib/db'

export async function PATCH(request: Request) {
  const createUser = prisma.project.update({
    data: {},
  })
}
