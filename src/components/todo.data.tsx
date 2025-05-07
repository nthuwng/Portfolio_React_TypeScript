interface IProps {
  todos: {
    id: number;
    title: string;
    isComplete: boolean;
  }[];
  owner?: string;
  age?: number;
  isDevelop?: boolean;
}

const TodoData = (props: IProps) => {
  const { todos, owner = "Unknown" } = props;
  return (
    <div>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <div style={{ padding: "10px 0px" }}>{item.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
