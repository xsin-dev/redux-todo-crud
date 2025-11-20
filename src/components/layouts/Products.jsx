import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
  editProduct,
} from "../../store/slices/productSlice";

const Products = () => {
  const { product } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);

  const imgRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const textRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !imgRef.current.value.trim() ||
      !titleRef.current.value.trim() ||
      !priceRef.current.value.trim() ||
      !textRef.current.value.trim()
    ) {
      alert("Bo'sh joy bo'lmasligi kerak!");
      return;
    }

    if (editId) {
      dispatch(
        editProduct({
          id: editId,
          image: imgRef.current.value,
          title: titleRef.current.value,
          price: priceRef.current.value,
          text: textRef.current.value,
        })
      );

      setEditId(null);
      e.target.reset();
      return;
    }

    const newProduct = {
      id: Date.now(),
      image: imgRef.current.value,
      title: titleRef.current.value,
      price: priceRef.current.value,
      text: textRef.current.value,
    };

    dispatch(addProduct(newProduct));
    e.target.reset();
  };

  const handleEditProduct = (p) => {
    setEditId(p.id);
    imgRef.current.value = p.image;
    titleRef.current.value = p.title;
    priceRef.current.value = p.price;
    textRef.current.value = p.text;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="px-[100px] mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Products CRUD
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-6 mb-8"
        >
          <div className="grid gap-4">
            <input
              ref={imgRef}
              type="url"
              placeholder="Mahsulot URL kiriting!"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              ref={titleRef}
              type="text"
              placeholder="Mahsulot nomi kiriting!"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              ref={priceRef}
              type="number"
              placeholder="Mahsulot narxini kiriting!"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              ref={textRef}
              placeholder="Mahsulot haqida ma'lumot kiriting"
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className={`mt-4 w-full py-2 rounded-lg text-white font-semibold transition ${
              editId
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {editId ? "Saqlash" : "Qo'shish"}
          </button>
        </form>

        <div className="grid grid-cols-3 gap-6">
          {product.length === 0 && (
            <div className="col-span-3 flex flex-col items-center justify-center py-20 bg-white rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-700">
                Mahsulot hali mavjud emas
              </h2>
              <p className="text-gray-500 mt-2">
                Yangi mahsulot qo‘shish orqali ro‘yxatni to‘ldiring.
              </p>
            </div>
          )}

          {product.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              <h3 className="text-xl font-bold text-gray-800">{p.title}</h3>
              <p className="text-green-600 font-semibold mt-1">${p.price}</p>
              <p className="text-gray-600 mt-2">{p.text}</p>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleEditProduct(p)}
                  className="flex-1 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => dispatch(deleteProduct(p.id))}
                  className="flex-1 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
