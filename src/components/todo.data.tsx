interface IProps {
  todos: {
    id: number;
    title: string;
    isComplete: boolean;
  }[];
  owner?: string;
  age?: number;
  isDevelop?: boolean;

  handleDeleteTodo: (value: number) => void;
}

const TodoData = (props: IProps) => {
  const { todos, owner = "Unknown", handleDeleteTodo } = props;
  return (
    <div>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <div style={{ padding: "10px 0px" }}>
              {item.id} - {item.title} &nbsp;{" "}
              <button
                onClick={() => {
                  handleDeleteTodo(item.id);
                }}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
