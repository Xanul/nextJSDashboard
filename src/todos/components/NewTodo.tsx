'use client';
import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { createTodo } from "../helpers/todos";
import { useRouter } from "next/navigation";
import * as todosApi from '@/todos/helpers/todos';
import { addTodo, deleteCompletedTodos } from "../actions/todo-actions";

// interface Props {
//   createTodo: (description:string) => Promise<Todo>
// }

export const NewTodo = () => { 

  const [description, setDescription] = useState('');
  const router = useRouter();

  const onSubmit = async (e:FormEvent) => {
    e.preventDefault();
    if(description.trim().length === 0) return;

    // todosApi.createTodo(description);
    const newTodo = await addTodo(description);

    setDescription("");
    // router.refresh();
  }

  const deleteCompleted = async () => {
    
    const deletedTodos = await deleteCompletedTodos();
    
  }

  return (
    <form  className='flex w-full'>
      <input 
        type="text"
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="Add a new todo" 
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button 
        type='submit' 
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
        onClick={onSubmit}
      >
        Create
      </button>
      
      <span className='flex flex-1'></span>

      <button 
        onClick={ deleteCompleted }
        type='button' className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
        <IoTrashOutline />
        Delete Completed
      </button>


    </form>
  )
}