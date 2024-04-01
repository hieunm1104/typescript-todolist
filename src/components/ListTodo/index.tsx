import { Button } from "@mui/material";

interface Props {
  data: object[];
  handleDelete: (item: number) => void;
  handleDoneTodo: (item: number) => void;
  handleEditTodo: (item: object) => void;
}

function ListTodo(props: Props) {
  const { data, handleDelete, handleDoneTodo, handleEditTodo } = props;
  const handleDeleteTodo = (item: any) => {
    handleDelete(item.id);
  };

  const handleDoneTodos = (item: any) => {
    handleDoneTodo(item.id);
  };

  const handleEditTodos = (item: object) => {
    handleEditTodo(item);
  };
  return (
    <div>
      {data.map((item: any) => (
        <div key={item.id} className="flex gap-2 items-center justify-between">
          <div
            className={`text-lg font-bold cursor-pointer ${
              item.finish ? "no-underline" : "line-through"
            }`}
            onClick={() => handleDoneTodos(item)}
          >
            {item.name}
          </div>
          <div>
            <Button
              className="text-sm text-red-500"
              onClick={() => handleDeleteTodo(item)}
            >
              Delete
            </Button>
            <Button
              className="text-sm text-red-500"
              onClick={() => handleEditTodos(item)}
            >
              Edit
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListTodo;
