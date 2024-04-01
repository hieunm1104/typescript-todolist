import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";

interface InputFieldProps {
  handleClickAdd: (name: string) => void;
  handleUpdateTodos: (name: string, isEditing: Boolean) => void;
  id: any;
}

function InputField({ handleClickAdd, id, handleUpdateTodos }: InputFieldProps) {

  const [value, setValue] = useState<string>("");
  const [updateValue, setUpdateValue] = useState<string>(id.name);
  const [isEditing, setIsEditing] = useState<Boolean>(id.isEditing);
  
  useEffect(() => {
    
  }, [id]);
  

  const handleClickAddTodo = () => {
    handleClickAdd(value);
    setValue("");
  };

  const handleUpdateTodo = () =>{
    handleUpdateTodos(updateValue, isEditing);
    setUpdateValue("");
    setIsEditing(false);
  }

  return (
    <div className="flex">
      {isEditing ? (
        <>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            color="warning"
            value={updateValue}
            onChange={(e) => {
              setUpdateValue(e.target.value);
              e.preventDefault();
            }}
          />
          <Button variant="contained" onClick={handleUpdateTodo}>
            Update task
          </Button>
        </>
      ) : (
        <>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            color="warning"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              e.preventDefault();
            }}
          />
          <Button variant="contained" onClick={handleClickAddTodo}>
            Add task
          </Button>
        </>
      )}
    </div>
  );
}

export default InputField;
