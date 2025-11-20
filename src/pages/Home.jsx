import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleToPageClick = () => {
    navigate("/todo");
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-[100px]">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">React Redux App</span>
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Bu kichik loyihada siz Todo, Products va Counter funksiyalari orqali
          Redux bilan ishlashni amaliy ko‘rishingiz mumkin. Har bir sahifa
          alohida o‘z vazifasini bajaradi.
        </p>

        <button
          onClick={handleToPageClick}
          className="px-8 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          Boshlash
        </button>
      </div>
    </div>
  );
};

export default Home;
