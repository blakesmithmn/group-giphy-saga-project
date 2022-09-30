import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import './CategoryForm.css'

// MUI imports
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function CategoryForm() {

    useEffect(() => {
        dispatch({ type: 'SAGA_FETCH_CATS' });
    }, [])

    const [categoryInput, setCategoryInput] = useState('');

    const categoriesArray = useSelector(store => store.categories);
    const dispatch = useDispatch();

    const submitNewCategory = () => {
        dispatch({type: 'SAGA_ADD_CATEGORY', payload: categoryInput});
        setCategoryInput('');
    }

    const deleteCategory = (id) => {
        dispatch({type: 'SAGA_DELETE_CATEGORY', payload: id});
    }

    return (
        <section className="categoryForm">
            <Box sx={{'& > :not(style)': { m: 1, width: '25ch' },}}>
                <TextField 
                        id="outlined-basic" 
                        placeholder="Add a Category"
                        variant="outlined"
                        value={categoryInput}
                        onChange={(e) => setCategoryInput(e.target.value)}
                        />
                <Button variant="contained" onClick={submitNewCategory}>Add</Button>
            </Box>
            <ul className="categoryFormList">
                {categoriesArray.map(category => {
                    return (
                        <li key={category.id}>{category.name} 
                        <button className="deleteCategoryButton" onClick={() => deleteCategory(category.id)}>x</button></li>
                    );
                })}
            </ul>
        </section>
    );
}