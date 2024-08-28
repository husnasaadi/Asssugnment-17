import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../FirebaseConfig';

const InputTodo = () => {
    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title !== "") {
            await addDoc(collection(db, "todos"), {
                title,
                completed: false
            });
            setTitle("");
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
                fullWidth
                label="Enter Todo Task"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ ml: 2 }}>
                Add
            </Button>
        </Box>
    );
};

export default InputTodo;
