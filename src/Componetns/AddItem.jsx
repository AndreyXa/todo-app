import {useContext, useState} from 'react';
import {AlertContext} from "../Context/alert/alertContext";
import {addTodo} from "../Request/request";

export const AddItem = ({updateDetector}) => {
    const [item, setItem] = useState('');
    const alert = useContext(AlertContext);

    const submitHandler = async (event) => {
        event.preventDefault();
    }

    const handleAdd = async () => {
        if (item.trim()) {
            await addTodo(item.trim()).then(() => {
                alert.show('The note has been created', 'success');
            }).catch(() => {
                alert.show('Something went wrong', 'danger');
            })
            setItem('');
        } else {
            alert.show('Enter a title for the note');
        }
        updateDetector();
    };

    const handleaddPress = async (e) => {
        if (e.key === 'Enter') {
            updateDetector();
        }
    };

    const handleInput = (e) => {
        setItem(e.target.value);
    };

    return (
        <form onSubmit={submitHandler}>
            <h1>What's the Plan for Today?</h1>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={item}
                    placeholder="Add a notes"
                    onChange={handleInput}
                    onKeyPress={handleaddPress}
                />

                <button
                    onClick={handleAdd}
                    className="btn btn-outline-secondary">
                    Add a notes
                </button>
            </div>

        </form>
    );
};
