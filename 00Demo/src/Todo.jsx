import { useState } from "react";

export const Todo = () => {
  const [item, setItem] = useState("");
  const [todos, updatetodos] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    updatetodos(currentValue => {
      return [
        ...currentValue,
        { id: crypto.randomUUID(), title: item, isComplate: false },
      ];
    });
  };
  return (
    <>
      <div>
        <form className="card" onSubmit={submitForm}>
          <label htmlFor="txt">Add new Todo</label>
          <input
            className="form-control"
            type="text"
            id="txt"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button className="btn">Add</button>
        </form>
      </div>
      <div>
        <h3>Todos</h3>
        <ul>
          {todos.map(tod => {
            return (
              <li key={tod.id}>
                <label>
                  <input type="checkbox" checked={tod.isComplate}/>
                  {tod.title}
                </label>
                <button>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
