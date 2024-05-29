const API_URL = `http://localhost:4000`

export const updateTodo = async (todo) => {
    console.log(`${API_URL}/todos/edit/${todo._id}`) //temp
    
    const response = await fetch(`${API_URL}/todos/edit/${todo._id}`, {
        // what method?
        method: 'PATCH',
        // type of content?
        headers: {
            'Content-Type': 'application/json'
        },
        // body updated the "text" in your model with the text you sent as parameter 
        body: JSON.stringify(todo.text)
    })
    const json = await response.json()
    return json
}