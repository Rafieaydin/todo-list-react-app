import './AddTodo.css'
import { useState } from 'react';




const AddTodo = (props) => {
    const [GetInput,SetInput] = useState('') // membuat state untuk set input dan get input
    const SubmitData = (event) => { // funtion yg di gunakan untuk submit data
        event.preventDefault();

        const data = { // sebuat data biasa yg di gunakan untuk di masukan ke object todos
                id: (Math.random * 100 + 1),
                title: GetInput 
            }
        
        props.OnCreate(data); // props oncreate adlaah propery yg di kirimkan di todo

        SetInput('') // set 0
    }
    const handleinput = (event) => {
        SetInput(event.target.value); // set input todo menggunkana state
        console.log(GetInput); // mendapat handle value
    }
    return (
        <div>
            <form  onSubmit={SubmitData}>
            {/* getinput = value ari input state */}
            <input type="text" value={GetInput} onChange={handleinput}/> 
            <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddTodo