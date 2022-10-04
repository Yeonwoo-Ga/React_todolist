import Todo from "../todo/Todo"
import css from './style.css'
function List(props){
    return(
    <div className='content-listbox'>   
        <div className='list-box'>
            <h2>{props.name}..!!</h2>
            <div className="todo-box">
                {
                props.formValue.map((item)=>
                    <Todo key={item.id} item={item} changeIsDone={props.changeIsDone} deleteItem={props.deleteItem}/>
                )
                }
            </div>
        </div>
    </div>
    )
}

export default List