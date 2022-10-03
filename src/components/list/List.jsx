import Todobox from "../todo/Todo"

function List(props){
    console.log(props)
    return(
    <div className='list-box'>
        <h2>{props.name}..!!</h2>
        <div className="todo-box">
            <Todobox formValue={props.formValue}/>
        </div>
    </div>
    )
}

export default List