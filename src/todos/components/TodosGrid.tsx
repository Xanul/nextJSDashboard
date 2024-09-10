"use client";
import { Todo } from "@prisma/client";
import React from "react";
import { TodoItem } from "./TodoItem";
import { NewTodo } from "./NewTodo";
import { updateTodo } from "../actions/todo-actions";

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} />;
      })}
    </div>
  );
};
