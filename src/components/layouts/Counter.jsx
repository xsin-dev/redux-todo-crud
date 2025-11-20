import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../store/slices/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState("0");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Counter</h1>

        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xl hover:bg-blue-700 transition"
          >
            +
          </button>

          <h3 className="text-2xl font-semibold text-gray-700">{count}</h3>

          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-red-600 text-white rounded-lg text-xl hover:bg-red-700 transition"
          >
            -
          </button>
        </div>

        <div className="mt-6">
          <input
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Amount kiriting..."
          />

          <button
            onClick={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Add Amount
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
