import prisma from '@/lib/prisma';
import { Todo } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup';

interface Segments {
  params: {id: string}
}

const getTodo = async (id: string):Promise<Todo | null> => {

  const foundTodo = await prisma.todo.findFirst({where: {id}});

  return foundTodo;

}

export async function GET(request: Request, {params}:Segments) { 

  const { id } = params;
  const foundTodo = await getTodo(id)

  if (!foundTodo) return NextResponse.json({message: `The TODO with ID ${id} was not found in DB`}, {status: 404})

  return NextResponse.json(foundTodo)
}

const putSchema = yup.object({
  complete: yup.boolean().optional(),
  description: yup.string().optional()
})

export async function PUT(request: Request, {params}:Segments) { 

  const {id} = params;

  const foundTodo = await getTodo(id)

  if (!foundTodo) return NextResponse.json({message: `The TODO with ID ${id} was not found in DB`}, {status: 404});

  try {
    const { complete, description } = await putSchema.validate(await request.json());
  
    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { complete, description }
    })

    return NextResponse.json(updatedTodo)

  } catch (error) {
    return NextResponse.json(error, {status: 400})
  }
}