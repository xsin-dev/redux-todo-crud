import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Todo List</h1>

      {todos.length === 0 && (
        <div className="bg-white py-16 rounded-xl shadow-sm flex flex-col items-center text-center">
          <p className="text-gray-600 text-lg">
            Todo mavjud emas — Iltimos yangi Todo yarating
          </p>
        </div>
      )}

      <div className="flex flex-col gap-4 mt-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
