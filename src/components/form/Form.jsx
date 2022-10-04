import './style.css'
import { useState } from 'react';
import List from '../list/List';





function Formbox() {
        const [formValue,setFormValue] = useState([])
        const [title,setTitle] = useState('')
        const [body,setBody] = useState('')
        const [id,setId] = useState(0)
        const [doneValue,setDoneValue] = useState([])
        const handleGetTitleValue = (e) => {
            setTitle(e.target.value)
            
        }
        const handleGetBodyValue = (e) => {
            setBody(e.target.value)
           
        }

        const addFormValue = () => {
            setId(id + 1)
            const copy = [...formValue]
            setFormValue([...copy,{title : title, body : body, id : id, isDone : false}])
            setTitle('')
            setBody('')
            
        }
        const changeIsDone = (id) =>{
            setFormValue(
                formValue.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
                )
                );

                console.log(formValue)
            
        }

        const deleteItem = (id) =>{
            setFormValue(formValue.filter((todo) => todo.id !== id))
        }
        

    return(
    <>
        <form className='form-box'>
            <div className='input-box'>
                <span className='input-title'>제목</span>
                <input type='text' className='input' onChange={handleGetTitleValue} value={title}/>
                <span className='input-title'>내용</span>
                <input type='text' className='input' onChange={handleGetBodyValue} value={body}/>
            </div>
            <button type='button' className='input-btn' onClick={addFormValue}>추가하기</button>
        </form>
        <List name='Working' formValue={formValue} changeIsDone={changeIsDone} deleteItem={deleteItem}/>
    </>
    )
}

export default Formbox