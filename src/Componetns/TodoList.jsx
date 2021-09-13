import { TodoItem } from './TodoItem';

export const TodoList = ({ list, onUpdate }) => {
    return list.map((listItem) => (
        <TodoItem key={listItem.id} listItem={listItem} onUpdate={onUpdate} />
    ));
};
