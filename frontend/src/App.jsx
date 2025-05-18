import { useState } from 'react'
import './App.css'
import { CreateTodo } from './component/CreateTodo'
import { Todo } from './component/Todo'
function App() {
  
const [todos, setTodo] = useState([]);

// fetch('http://localhost:3000/todos')
// .then(async function(res){
// const json = await res.json();
// setTodo(json.todos)
// })

  return (
    <div>
      <CreateTodo/>
      <Todo todos={todos}/>
    </div>
  )
}

export default App
