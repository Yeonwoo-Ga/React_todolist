import Header from '../header/Header'
import Formbox from '../form/Form'
import Todo from '../todo/Todo'
import './style.css'



function Layout(){
    return(
    <div className="layout">
        <Header/>
        <Formbox/>
    </div>
    )
}

export default Layout