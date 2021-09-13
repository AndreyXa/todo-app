import {useContext, useEffect, useState} from 'react';
import {getTodos} from "../Request/request";
import {AddItem} from "./AddItem";
import {TodoList} from "./TodoList";


export const ToDo = () => {
    const [list, setList] = useState([]);
    const [detector, setDetector] = useState({});
    useEffect(() => {
        const updateList = async () => {
            const todos = await getTodos();
            setList(todos);
        };
        updateList();
    }, [detector]);

    const updateDetector = () => {
        setDetector({});
    };

    return (
        <div>
            <AddItem updateDetector={updateDetector}/>
            <TodoList list={list} onUpdate={updateDetector}/>
        </div>
    );
};
