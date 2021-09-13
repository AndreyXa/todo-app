import {useReducer, useState} from 'react';
import {deleteTodo, updateTodo} from "../Request/request";

export const TodoItem = ({listItem: {todo, id}, onUpdate}) => {
    const [item, setItem] = useState(todo);

    const handleEdit = async () => {
        await updateTodo(id, item);
        onUpdate();
    };

    const handleDelete = async () => {
        await deleteTodo(id);
        onUpdate();
    };

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                value={item}
                onChange={(e) => {
                    setItem(e.target.value);
                }}
            />
            <button
                onClick={handleDelete}
                className="btn btn-outline-secondary">
                Delete
            </button>
            <button
                onClick={handleEdit}
                className="btn btn-outline-secondary">
                Update
            </button>
        </div>
    );
};
