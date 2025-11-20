import { Route, Routes } from "react-router-dom";
import Counter from "./components/layouts/Counter";
import Products from "./components/layouts/Products";
import Todo from "./components/layouts/Todo";
import Layout from "./components/layouts/Layout";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/products" element={<Products />} />
        <Route path="/counter" element={<Counter />} />
      </Route>
      {/* 
      <Counter />

      <Todo />

      <Products /> */}
    </Routes>
  );
};

export default App;
