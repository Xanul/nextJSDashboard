export const revalidate = 0;
import { HeaderBar } from "@/components/header/HeaderBar";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export const metadata = {
  title: "List of To-dos",
  description: "List of To-dos",
};

export default async function TodosPage() {
  const allTodos = await prisma.todo.findMany({
    orderBy: { description: "asc" },
  });

  return (
    <div>
      <HeaderBar
        title="To-Do's"
        subTitle="REST Todos"
        description="Using REST API to Update Todos"
      />
      <div className="px-5 py-3 mt-2">
        <div className="w-full px-5 mx-5 mb-8">
          <NewTodo />
        </div>
        <TodosGrid todos={allTodos} />
      </div>
    </div>
  );
}
