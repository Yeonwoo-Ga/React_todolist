import './style.css'
import { useState } from 'react';
import List from '../list/List';





function Formbox() {
        const [formValue,setFormValue] = useState([])
        const [title,setTitle] = useState('')
        const [body,setBody] = useState('')
        const [id,setId] = useState(0)
        const handleGetTitleValue = (e) => {
            setTitle(e.target.value)
            
        }
        const handleGetBodyValue = (e) => {
            setBody(e.target.value)
           
        }

        const addFormValue = () => {
            setId(id + 1)
            setFormValue([...formValue,{title : title, body : body, id : id, isDone : false}])
            
        }
        
        

    return(
    <>
        <form className='form-box'>
            <div className='input-box'>
                <span className='input-title'>제목</span>
                <input type='text' className='input' onChange={handleGetTitleValue} />
                <span className='input-title'>내용</span>
                <input type='text' className='input' onChange={handleGetBodyValue}/>
            </div>
            <button type='button' className='input-btn' onClick={addFormValue}>추가하기</button>
        </form>
        <List name='Working' formValue={formValue}/>
    </>
    )
}

export default Formbox