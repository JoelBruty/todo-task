import { Link } from "react-router-dom"

const Card = ({ todo, deleteHandler }) => {

    return (
        <div>
            <h3>{todo.text}</h3>
            <button onClick={deleteHandler}>Delete</button>
            <br/>
            <Link
                to={`/edit/${todo._id}`} 
            >
            Edit
            </Link>
        </div>
    )
}
export default Card