import prisma from '@/lib/db'
import { NextRequest } from 'next/server'

export async function PATCH(req: NextRequest) {
  const dataJson = await req.json()
  const createProject = prisma.project.update({
    data: dataJson,
  })
  return Response.json(req.body)
}
