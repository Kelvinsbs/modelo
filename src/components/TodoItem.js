function TodoItem({name, index}){
    return (
        <li key={index}>
            {name}
        </li>
    )
}

export default TodoItem;