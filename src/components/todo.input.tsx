import { useState } from "react";

interface ITodo {
  id: number;
  title: string;
  isComplete: boolean;
}

interface IProps {
  name?: string;
  addNewToDo: (value: ITodo) => void;
}

const TodoInput = (props: IProps) => {
  const { addNewToDo } = props;
  const [todo, setTodo] = useState<string>("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleOnClick = () => {
    if(!todo) {
        alert("Please enter your todo");
        return;
    }
    addNewToDo({
      id: randomInteger(1, 1000000),
      title: todo,
      isComplete: false,
    });
    setTodo("");
  };
  return (
    <div style={{ display: "flex", gap: 15, marginBottom: 20 }}>
      <input type="text" value={todo} onChange={handleOnChange} />
      <button onClick={handleOnClick}>Add todo</button>
    </div>
  );
};

export default TodoInput;
