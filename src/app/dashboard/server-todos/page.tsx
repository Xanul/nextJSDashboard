export const revalidate = 0;
import { HeaderBar } from "@/components/header/HeaderBar";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export const metadata = {
  title: "List of To-dos",
  description: "List of To-dos",
};

export default async function ServerTodosPage() {

  const allTodos = await prisma.todo.findMany({
    orderBy: { description: "asc" },
  });

  return (
    <div>
      <HeaderBar
        title="Server To-Do's"
        subTitle="Server Actions and Use Optimistic"
        description="Welcome to the Server To-Do's section! This part of the dashboard leverages Next.js Server Actions to handle to-do list operations directly on the server, ensuring robust and secure data handling. Utilizing the useOptimistic hook from React, this section provides an optimistic UI update feature, allowing for a seamless and responsive user experience. As tasks are added or completed, the interface updates instantly to reflect changes, even before server confirmation, ensuring a fast and intuitive interaction. This setup demonstrates an advanced integration of server-side logic with client-side state management, showcasing how to build responsive and efficient web applications."
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
