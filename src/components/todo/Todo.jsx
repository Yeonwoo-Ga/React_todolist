import './style.css'



function Todo(props){
    if(props.item.isDone == false){
    return(  
                        <>
                        <div className="content-box">
                            <div>
                                <h2>{props.item.title}</h2>
                                <div>{props.item.body}</div>
                            </div>
                            <div className='btn-box'>
                                <button id="del-btn" onClick={() => {props.deleteItem(props.item.id)}}>삭제하기</button>
                                <button id="com-btn" onClick={() => {props.changeIsDone(props.item.id)}}>완료</button>
                            </div>
                        </div>
                        </>

    )
}else{
    return(  
        <>
        <div className="content-box">
            <div>
                <h2>{props.item.title}</h2>
                <div>{props.item.body}</div>
            </div>
            <div className='btn-box'>
                <button id="del-btn" onClick={() => {props.deleteItem(props.item.id)}}>삭제하기</button>
                <button id="com-btn" onClick={() => {props.changeIsDone(props.item.id)}}>취소</button>
            </div>
        </div>
        </>
    )
}
}


export default Todo