import { Todo } from "@prisma/client";


export const updateTodo = async (id: string, complete:boolean):Promise<Todo> => {

  const body = { complete };

  const dbTodo = await fetch(`/api/todos/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(resp => resp.json())

  return dbTodo;

}

export const createTodo = async (description: string):Promise<Todo> => {

  const body = { description };

  const newTodo = await fetch(`/api/todos`,
    {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(resp => resp.json())

  console.log(newTodo);

  return newTodo;

}

export const deleteTodos = async () => {

  const deletedTodos = await fetch(`/api/todos`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(resp => resp.json())

  console.log(deletedTodos);

  return deletedTodos;

}