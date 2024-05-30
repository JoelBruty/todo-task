import { useEffect, useState } from "react";
import { readTodos } from "../api/readTodos";
import Card from '../components/Card'
import { deleteTodo } from "../api/deleteTodo";
const Home = () => {
    const [todos, setTodos] = useState([])


    const deleteHandler = async (todo) => {
        // what function will run?
        // console.log(todo._id)
        let response = await deleteTodo(todo, deleteHandler)
        console.log(response)
        
        let updated = [...todos] //create array of current todos
        updated = updated.filter(items => items._id !== response._id) //return elements that do not match the entry that was deleted (exclude the deleted entry)
        setTodos(updated) //set todos to array (removing deleted entry)

        alert("Deleted item")
    }
    useEffect(() => {
        const fetchTodos = async () => {
            let data = await readTodos()
            setTodos(data.todos)
            console.log(data.message)
        }
        fetchTodos()
    }, [])

    if (!todos) return <h1>loading...</h1>
    return (
        <div>
            <>
                {
                    todos ? todos.map((todo) => <Card key={todo._id} deleteHandler={deleteHandler} todo={todo}/>)
                        : <p>loading...</p>
                }
            </>
        </div>
    );

}

export default Home