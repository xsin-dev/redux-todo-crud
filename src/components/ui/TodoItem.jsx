import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../../store/slices/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [value, setValue] = useState(todo.title);

  const handleSave = () => {
    dispatch(
      editTodo({
        id: editId,
        title: value,
      })
    );
    setEditId(null);
  };

  return (
    <div className="flex items-center justify-between gap-4 bg-white shadow p-6 rounded-xl">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={() => dispatch(toggleTodo(todo.id))}
          className="w-5 h-5"
        />

        {!editId ? (
          <p
            className={`text-lg ${
              todo.checked ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {todo.title}
          </p>
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="border px-3 py-1 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none w-[500px]"
          />
        )}
      </div>

      <div className="flex gap-3">
        {!editId ? (
          <button
            onClick={() => setEditId(todo.id)}
            className="px-4 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="px-4 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Save
          </button>
        )}

        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="px-4 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
