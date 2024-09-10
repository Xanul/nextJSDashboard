'use server';
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const sleep = async (seconds: number = 0) => {

  return new Promise( resolve => {

    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);

  })

}

export const updateTodo = async (id: string, complete: boolean):Promise<Todo> => {

  // await sleep(3);

  const todo = prisma.todo.findFirst({where: {id}});
  if (!todo) throw `Todo with id ${id} was not found`;

  const updatedTodo = prisma.todo.update({where: {id}, data: {complete}});

  revalidatePath('/dashboard/server-todos');
  return updatedTodo;

}

export const addTodo = async (description: string) => {

  try {

    const newTodo = await prisma.todo.create({data: {description}})
    revalidatePath('/dashboard/server-todos');
    return newTodo

  } catch (error) {
    return {message: 'Error creating the TODO'}
  }

}

export const deleteCompletedTodos = async () => {

  try {
    
    const deletedTodos = await prisma.todo.deleteMany({where: {complete: true}});
    revalidatePath('/dashboard/server-todos');
    return deletedTodos;
  } catch (error) {
    return {message: 'Error deleting todos '}
  }

}
