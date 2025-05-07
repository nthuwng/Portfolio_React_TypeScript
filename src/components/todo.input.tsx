import { useState } from "react";

interface IProps {
  name?: string;
}

const TodoInput = (props: IProps) => {
  const [todo, setTodo] = useState<string>("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleOnClick = () => {
    console.log(todo);
  };
  return (
    <div style={{ display: "flex", gap: 15, marginBottom: 20 }}>
      <input type="text" onChange={handleOnChange} />
      <button onClick={handleOnClick}>Add todo</button>
    </div>
  );
};

export default TodoInput;
