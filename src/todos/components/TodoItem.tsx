"use client";

import { startTransition, useOptimistic } from "react";
import { Todo } from "@prisma/client";
import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface Props {
  todo: Todo;
  updateTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, updateTodo }: Props) => {
  const [todoOptimistic, updateTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({
      ...state,
      complete: newCompleteValue,
    })
  );

  const truncateString = (str: String, maxLength: number) => {
    const words = str.split(" ");
    const truncated = words.map((word) => {
      if (word.length > maxLength) {
        return word.slice(0, maxLength) + "...";
      }
      return word;
    });
    return truncated.join(" ");
  };

  const truncatedDescription = truncateString(todoOptimistic.description, 13);
  console.log(truncatedDescription);

  const onToggleTodo = async () => {
    try {
      startTransition(() => updateTodoOptimistic(!todoOptimistic.complete));

      await updateTodo(todoOptimistic.id, !todoOptimistic.complete);
    } catch (error) {
      startTransition(() => updateTodoOptimistic(!todoOptimistic.complete));
    }
  };

  return (
    <div
      className={todoOptimistic.complete ? styles.todoDone : styles.todoPending}
    >
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${
            todoOptimistic.complete ? "bg-blue-100" : "bg-red-100"
          }`}
          // onClick={() => updateTodo(todoOptimistic.id, !todoOptimistic.complete)}
          onClick={onToggleTodo}
        >
          {todoOptimistic.complete ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>
        <div className="text-center sm:text-left">{truncatedDescription}</div>
      </div>
    </div>
  );
};
