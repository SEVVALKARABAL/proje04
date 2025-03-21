"use client";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    if (input.trim) {
      setItems([...items, input]);
      setInput("");
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, item) => item !== index));
  };

  return (
    <div className="min-h-screen bg-slate-300 flex flex-col items-center justify-center p-4">
      <h1 className="font-bold text-3xl text-black">
        Project 4 : Alışveriş Listesi
      </h1>
      <div>
        <h3 className="text-black text-xl mt-3">Alınacaklar listesi</h3>
      </div>

      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder=" Yeni bir madde ekleyin"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="text-black"
        />
        <button
          className="ml-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition"
          type="submit"
        >
          Add
        </button>
      </form>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            className="flex justify-between mt-5 items-center text-black bg-gray-100 p-2 rounded"
            key={index}
          >
            {" "}
            <span>{item}</span>
            <br />{" "}
            <button
              className=" ml-4 text-white bg-red-500 rounded py-2 px-2 hover:bg-red-700 transition"
              onClick={() => deleteItem(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
