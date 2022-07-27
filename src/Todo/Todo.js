import './Todo.css';
import ListTodo from '../todo-list/Todolist'
import AddData from '../add-todo/AddTodos';
import { useState } from 'react';

const Todo = () => {

    // tanpa state ( tidak real time )
    // const todos = [
    //     {id: 1, title: "List 1"},
    //     {id: 2, title: "List 2"},
    //     {id: 3, title: "List 3"}
    // ];

    // const CreateData = (data) => {
    //     todos.push(data);
    //     console.log(todos);
        
    // }

    // memakai state
    const [GetData, SetData] = useState([ // contoh todo untuk memakai state
        {id: 1, title: "List 1"},
        {id: 2, title: "List 2"},
        {id: 3, title: "List 3"}
    ])

    const CreateData = (data) => {
        SetData(GetData.concat(data)); // menambahkan data menggunakan state
        console.log(GetData);
        
    }
    
    return (
        <div className='Apps'>
        <h3 className='Todo'>Todo List</h3>
        <AddData OnCreate={CreateData} />  {/* mengambil component input dan membuat props oncreate yg di gunakan untuk menambah data */}
        <ListTodo dataTodos={GetData} />   {/* mengirim data tods */}
        </div>
    )
}



export default Todo;