import { useState } from "react";
import TodoData from "./todo.data";
import TodoInput from "./todo.input";

interface ITodo {
  id: number;
  title: string;
  isComplete: boolean;
}

const TodoList = () => {
  // const todos = [
  //   {
  //     id: 1,
  //     title: "Learn React TypeScript",
  //     isComplete: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Subscribe Youtube HoiDanIT",
  //     isComplete: true,
  //   },
  //   {
  //     id: 3,
  //     title: "Learn English",
  //     isComplete: true,
  //   },
  // ];

  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  const addNewToDo = (todo: ITodo) => {
    setListTodo([...listTodo, todo]);
  };

  const handleDeleteTodo = (id: number) => {
    const newTodos = listTodo.filter((item) => item.id !== id);
    setListTodo(newTodos);
  };
  return (
    <div
      style={{
        width: "600px",
        margin: "50px auto",
        border: "1px solid #ccc",
        borderRadius: 10,
        padding: "10px",
      }}>
      <div
        style={{
          padding: "10px 0",
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
          borderBottomStyle: "solid",
        }}>
        My todo List:
      </div>
      <br />
      <TodoInput name="your Todo" addNewToDo={addNewToDo} />
      <TodoData
        todos={listTodo}
        owner={"HoidanIt"}
        age={21}
        isDevelop={true}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default TodoList;
