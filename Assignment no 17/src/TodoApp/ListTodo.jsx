import React, { useState } from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

const ListTodo = ({ todo, toggleComplete, handleDelete, handleEdit }) => {
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleChange = (e) => {
        e.preventDefault();
        setNewTitle(e.target.value);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <TextField
                fullWidth
                value={newTitle}
                onChange={handleChange}
                sx={{
                    textDecoration: todo.completed ? "line-through" : "none"
                }}
            />
            <IconButton color="success" onClick={() => toggleComplete(todo)} sx={{ ml: 1 }}>
                <TaskAltIcon />
            </IconButton>
            <IconButton color="primary" onClick={() => handleEdit(todo, newTitle)} sx={{ ml: 1 }}>
                <EditIcon />
            </IconButton>
            <IconButton color="error" onClick={() => handleDelete(todo.id)} sx={{ ml: 1 }}>
                <ClearIcon />
            </IconButton>
        </Box>
    );
};

export default ListTodo;
