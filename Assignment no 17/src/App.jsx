import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import InputTodo from './TodoApp/InputTodo';
import ListTodo from './TodoApp/ListTodo';
import { collection, onSnapshot, query, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from './FirebaseConfig';

const App = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "todos"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let todosArray = [];
            querySnapshot.forEach((doc) => {
                todosArray.push({ ...doc.data(), id: doc.id });
            });
            setTodos(todosArray);
        });
        return () => unsub();
    }, []);

    const toggleComplete = async (todo) => {
        await updateDoc(doc(db, "todos", todo.id), {
            completed: !todo.completed
        });
    };

    const handleEdit = async (todo, newTitle) => {
        await updateDoc(doc(db, "todos", todo.id), {
            title: newTitle
        });
    };

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "todos", id));
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    TodoApp
                </Typography>
                <InputTodo />
                <Box mt={4}>
                    {todos.map((todo) => (
                        <ListTodo
                            key={todo.id}
                            todo={todo}
                            toggleComplete={toggleComplete}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    ))}
                </Box>
            </Paper>
        </Container>
    );
};

export default App;
