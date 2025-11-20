import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slices/todoSlice";
import { useRef } from "react";

const AddTodo = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputRef.current.value.trim() === "") {
      alert("Iltimos todo kiriting!");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: inputRef.current.value,
      checked: false,
    };

    e.target.reset();
    dispatch(addTodo(newTodo));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 items-center bg-white shadow-md p-4 rounded-xl mb-6"
    >
      <input
        maxLength={70}
        ref={inputRef}
        type="text"
        placeholder="Todo kiriting"
        className="flex-1 border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
