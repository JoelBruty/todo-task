// import { useEffect } from "react"
import { Link } from "react-router-dom"
import { deleteTodo } from "../api/deleteTodo"

const Card = ({ todo, deleteHandler }) => {

    return (
        <div>
            <h3>{todo.text}</h3>
            <button onClick={() => deleteHandler(todo)}>Delete</button>
            <br />
            <Link
                to={`/edit/${todo._id}`}
            >
                Edit
            </Link>
        </div>
    )
}
export default Card