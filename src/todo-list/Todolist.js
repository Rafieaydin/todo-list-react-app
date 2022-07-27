import './Todolist.css';

const ListTodo = (props) => {
    const val = props.dataTodos.map((data) => <li key={data.id}>{data.title}</li>)  // loops props data yg di kirim di todos
    return (
        <ul>
            {/* example loops in page */}
            {/* {props.dataTodos.map((data) => {return <li key={data.id}>{data.title}</li>})} */}
            {val}
        </ul>
    )
}

export default ListTodo