import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import InputField from "../InputField";
import ListTodo from "../ListTodo";

interface item {
  id: number;
  name: string;
  finish: boolean;
}

function TodoApp() {
  const [data, setData] = useState<object[]>([]);
  const [isDone, setIsDone] = useState<Boolean>(false);
  const [isPending, setIsPending] = useState<Boolean>(false);
  const [objectTodo, setObjectTodo] = useState<any>({
    isEditing: false,
    id: null
  });
  const handleOnclickAdd = (value: string) => {
    if (!value) return;
    const newData: item = {
      id: Date.now(),
      name: value,
      finish: false,
    };
    setData((prev) => [...prev, newData]);
  };

  const handleDeleteTodos = (id: number) => {
    setData((prev) => prev.filter((item: any) => item.id !== id));
  };
  const handleDoneTodos = (id: number) => {
    setData((prev) =>
      prev.map((item: any) =>
        item.id === id ? { ...item, finish: !item.finish } : item
      )
    );
  };
  const handleEditTodos = (todo: any) => {
    setObjectTodo({
      isEditing: true,
      id: todo.id,
      name: todo.name
    })
  }
  const handleUpdateTodos = (name: string, isEditing: Boolean) => {
    const keys = Object.keys(objectTodo);
    for(const key in keys){
      if(keys[key] === "isEditing"){
        setData((prev) =>
          prev.map((item: any) =>
            item.id === objectTodo.id ? { ...item, name: name } : item
          )
        );
      }
     
    }
  }
  useEffect(() => {
    setData((prev) => prev.filter((item: any) => item.finish));
  }, [isDone]);
  
  useEffect(() => {
    setData((prev) => prev.filter((item: any) => !item.finish));
  }, [isPending]);
  return (
    <div className="flex flex-col items-center gap-5 p-5 bg-[white] w-[400px] h-full rounded-xl">
      <div className="text-3xl font-bold text-black">Get Thinks Done!</div>
      <InputField handleClickAdd={handleOnclickAdd} id={objectTodo} handleUpdateTodos={handleUpdateTodos} />
      <ListTodo
        data={data}
        handleDelete={handleDeleteTodos}
        handleDoneTodo={handleDoneTodos}
        handleEditTodo={handleEditTodos}
      />
      <div>
        <Button onClick={() => setIsDone(!isDone)}>Completed</Button>
        <Button onClick={() => setIsPending(!isPending)}>Pending</Button>
      </div>
    </div>
  );
}

export default TodoApp;
