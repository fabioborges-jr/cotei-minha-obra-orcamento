import prisma from '@/lib/db'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const getCode = await prisma.code.findMany({
    select: {
      projectId: true,
      code: true,
      id: true,
    },
  })
  return Response.json(getCode)
}

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
