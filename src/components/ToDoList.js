import "./ToDoList.css"

export default function ToDoList(props){

    return(
        <ul className="toDoList">
            {props.itemsList.map(item => <li key={item.index} className="toDoList__Item">{item.text}</li>)}
        </ul>
    )
}