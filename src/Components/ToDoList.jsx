import { useState, useRef } from "react";

let i = 0;

const handleClear = (e) => {
  e.target.parentElement.style.textDecoration = "line-through";
  i++;
  if (i % 2 === 0) {
    e.target.parentElement.style.textDecoration = "none";
  }
};

const handleEdit = (e) => {
  e.target.parentElement.text();
};

const handleDel = (e) => {
  e.target.parentElement.remove();
};

export default function Todolist() {
  const [todos, setTodos] = useState([]);
  const inputTodo = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajouter la nouvelle todo à la liste
    setTodos([...todos, inputTodo.current.value]);
    console.log(todos);
  };

  return (
    <main className="bg-light">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          inputTodo.current.value = "";
          inputTodo.current.focus();
        }}
      >
        <input type="text" ref={inputTodo} />
        <button className="btn btn-secondary" type="submit">
          Ajouter
        </button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li>
              {todo}
              <button
                className="btn btn-info"
                type="submit"
                onClick={(e) => handleClear(e)}
              >
                Fait
              </button>
              <button
                className="btn btn-success"
                type="submit"
                onClick={(e) => handleEdit(e)}
              >
                Modifier
              </button>
              <button
                className="btn btn-dark"
                type="submit"
                onClick={(e) => handleDel(e)}
              >
                Supprimer
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
