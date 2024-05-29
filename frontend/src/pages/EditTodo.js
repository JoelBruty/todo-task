import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getTodo } from "../api/getTodo"
import { updateTodo } from "../api/updateTodo"
const EditTodo = () => {

    const { id } = useParams()
    const [toUpdate, setToUpdate] = useState('')
    const [userInput, setUserInput] = useState('')

    const submitHandler = async () => {
        let obj = {
            _id: toUpdate._id,
            text: userInput
        }
        console.log(obj)
        console.log(obj._id)
        console.log(obj.text)
        let response = await updateTodo(obj)
        console.log(response)

        alert('Edited item')
    }

    useEffect(() => {
        const fetchTodo = async () => {
            let data = await getTodo(id)
            setToUpdate(data)
        }
        fetchTodo()
    },[])
    return (
        <div>
            <h1>Edit Item</h1>
            <h2>Current: {toUpdate.text}</h2>
            <input 
                value={userInput}
                onChange={(e) => {setUserInput(e.target.value)}}
            />
            <button onClick={submitHandler}>Submit</button>
        </div>
    )
}
export default EditTodo