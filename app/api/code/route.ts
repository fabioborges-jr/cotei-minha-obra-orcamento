import prisma from '@/lib/db'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const data = await req.json()
  const insertCodeProject = await prisma.code.create({
    data: {
      code: data.codeReference,
      projectId: Number(data.projectId),
    },
  })
  return Response.json(req.body)
}
