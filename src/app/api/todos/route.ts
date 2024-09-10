import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup';

export async function GET(request: Request) { 

  const { searchParams } = new URL(request.url);
  const take = searchParams.get('take') ?? '10';
  const skip = searchParams.get('skip') ?? '0';
  if (isNaN(+take)) {
    return NextResponse.json({
      message: 'Take must be a valid number',
    }, {status: 400})
  }
  if (isNaN(+skip)) {
    return NextResponse.json({
      message: 'Skip must be a valid number',
    }, {status: 400})
  }
  
  const todos = await prisma.todo.findMany({
    take: Number(take),
    skip: Number(skip)
  });

  return NextResponse.json({
    todos
  })
}

const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.bool().optional().default(false)
})

export async function POST(request: Request) { 

  try {
    const { complete, description } = await postSchema.validate(await request.json())  
    const newTodo = await prisma.todo.create({data: {complete, description}});
    return NextResponse.json(newTodo);
  } catch (error) {

    return NextResponse.json(error, {status: 400})
  }

}

export async function DELETE(request: Request) { 

  try {
    const deletedTodos = await prisma.todo.deleteMany({where: {complete: true}})
    return NextResponse.json(deletedTodos)
  } catch (error) {
    return NextResponse.json(error, {status:400})
  }

  

}
