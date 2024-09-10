import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      {description: 'Get the Mind Stone', complete: true},
      {description: 'Get the Reality Stone', complete: true},
      {description: 'Get the Power Stone'},
      {description: 'Get the Time Stone'},
      {description: 'Get the Soul Stone'},
      {description: 'Get the Space Stone'},
    ]
  })

  return NextResponse.json({
    message: 'Seed Executed'
  })

}