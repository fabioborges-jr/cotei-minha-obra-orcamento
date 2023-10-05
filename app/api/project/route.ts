import prisma from '@/lib/db'
import { NextRequest } from 'next/server'

export async function PATCH(req: NextRequest) {
  const data = await req.json()
  const updateProject = await prisma.project.update({
    where: {
      id: data.existingProject.id,
    },
    data: {
      name: data.nameProject,
    },
  })
  return Response.json(req.body)
}
