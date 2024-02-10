import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { blue } from "@mui/material/colors";
import FormControlLabel from "@mui/material/FormControlLabel";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import "./todoList.style.css";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    if (todo !== "") {
      setTodoList([...todoList, { text: todo }]);
      setTodo("");
    }
  };

  const toggleTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index].completed = !newTodoList[index].completed;
    setTodoList(newTodoList);
  };

  const deleteTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <div className="box">
      <Typography variant="h4">📝 Todo App 📝</Typography>
      <div className="input-box">
        <TextField
          id="inputBx"
          label="Add Todo"
          variant="outlined"
          value={todo}
          onChange={onChangeHandler}
        />
        <Button onClick={addTodo} variant="contained" color="primary">
          <AddIcon />
        </Button>
      </div>
      <List
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {todoList.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={item.completed}
                  onChange={() => toggleTodo(index)}
                />
              }
              label={
                <ListItemText
                  primary={item.text}
                  sx={{
                    textDecoration: item.completed ? "line-through" : "none",
                    color: item.completed ? blue[500] : "inherit",
                  }}
                />
              }
            />
            <Button onClick={() => deleteTodo(index)}>
              <DeleteForeverTwoToneIcon />
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
