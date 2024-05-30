// import { useEffect } from "react"
import { Link } from "react-router-dom"
import { deleteTodo } from "../api/deleteTodo"

// const Card = ({ todo, deleteHandler }) => {
const Card = ({ todo }) => {

    const deleteHandler = async (e) => {
        e.preventDefault()
        // what function will run?
        console.log(todo._id)
        let response = await deleteTodo(todo)
        console.log(response)

        alert("Deleted item")
    }

    // useEffect(() => {

    // })

    return (
        <div>
            <h3>{todo.text}</h3>
            <button onClick={deleteHandler}>Delete</button>
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