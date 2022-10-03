import './style.css'



function Todobox(props){
    console.log(props)

    return(
        <div className='content-listbox'>
            {
                props.formValue.map((contents)=>{
                    return(
                        <>
                        <div className="content-box">
                            <div>
                                <h2 key={props.formValue.id}>{contents.title}</h2>
                                <div key={props.formValue.id}>{contents.body}</div>
                            </div>
                            <div className='btn-box'>
                                <button id="del-btn">삭제하기</button>
                                <button id="com-btn">완료</button>
                            </div>
                        </div>
                        </>
                    )
                })

            }
        </div>
    )
        
}


export default Todobox