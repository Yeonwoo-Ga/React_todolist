import Todobox from "../todo/Todo"

function List(props){
    return(
        <div className='list-box'>
        <h2>{props.name}..!!</h2>
        <div className="todo-box">
            <Todobox/>
        </div>
    </div>
    )
}

export default List