import Todo from "../todo/Todo"
import css from './style.css'
function List(props){
    return(
    <>
    <div className='content-listbox'>   
        <div className='list-box'>
            <h2>Working..!!</h2>
            <div className="todo-box">
                {
                props.formValue.map((item)=>
                 item.isDone ==false ? <Todo key={item.id} item={item} changeIsDone={props.changeIsDone} deleteItem={props.deleteItem}/> : null
                )
                }
            </div>
        </div>
    </div>
    <div className='content-listbox'>   
        <div className='list-box'>
            <h2>Done..!!</h2>
            <div className="todo-box">
                {
                props.formValue.map((item)=>
                  item.isDone ==true ?  <Todo key={item.id} item={item} changeIsDone={props.changeIsDone} deleteItem={props.deleteItem}/> : null
                )
                }
            </div>
        </div>
    </div>
    </>
    )
}

export default List