"use client";
import { Todo } from "@prisma/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoCartOutline, IoCheckmarkCircleOutline } from "react-icons/io5";

export const TodosWidget = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const allTodos = await fetch("/api/todos/").then((data) => data.json());
        setTodos(allTodos.todos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodos();
  }, []);

  const pendingTodos = todos.filter((todo) => !todo.complete);

  return (
    <div className="bg-white shadow-xl p-3 min-w-full lg:min-w-[49%] max-w-[49%] rounded-2xl border border-gray-200">
      <div className="flex flex-col">
        <div>
          <h2 className="font-bold text-gray-600 text-center">
            Pending To Do-s
          </h2>
        </div>
        {pendingTodos.length == 0 && (
          <div className="flex flex-col items-center justify-center my-3">
            <FaRegCalendarCheck size={50} className="text-blue-500 p-1" />
            <h4 className="text-center text-xs text-gray-500">
              No Pending Todos
            </h4>
          </div>
        )}
        {pendingTodos.length > 0 && (
          <div className="flex flex-col items-center mt-4">
            <h4 className="text-4xl font-semibold">{pendingTodos.length}</h4>
            <div className="flex flex-col items-start mt-4 space-y-2 w-full">
              {pendingTodos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center p-1 bg-gray-50 rounded-lg shadow-sm w-full"
                >
                  <IoCheckmarkCircleOutline
                    size={20}
                    className="text-blue-500 mr-2 flex-shrink-0"
                  />
                  <div className="w-[90%]">
                    <p className="text-gray-800 font-medium truncate">
                      {todo.description.length > 40
                        ? `${todo.description.slice(0, 40)}...`
                        : todo.description}
                    </p>
                    <p className="text-xs text-gray-500">
                      Created on:{" "}
                      {new Date(todo.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              className="text-indigo-600 text-xs font-medium mt-3"
              href={"/dashboard/server-todos"}
            >
              Go to To-Do-s
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
