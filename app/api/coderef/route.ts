import prisma from '@/lib/db'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const getReference = await prisma.referenceCode.findMany({
    select: {
      id: true,
      font: true,
      codeReference: true,
      description: true,
      unit: true,
      price: true,
      dateReference: true,
    },
  })
  return Response.json(getReference)
}

export async function POST(req: NextRequest) {
  const data = await req.json()
  const updateReference = await prisma.referenceCode.createMany({
    data: {
      font: data.font,
      codeReference: data.codeReference,
      description: data.description,
      unit: data.unit,
      price: data.price,
      dateReference: data.date,
    },
  })
  return Response.json(req.body)
}
