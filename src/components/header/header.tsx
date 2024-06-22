import "@/components/header/header.scss"
import { Link } from "react-router-dom"

import taskListBlack from '@/assets/images/taskListBlack.png'
import taskListWhite from '@/assets/images/taskListWhite.png'

function Header(){
    return(
        <header>
            <div className="header_container">
                <Link to={'/'}><h1>ToDoAdvanced</h1></Link>


                <nav className="header_taskLists">
                    
                    <Link className="header_taskLists_taskList" to={'/TaskPage'}>
                        <img src={taskListWhite} alt="sdasd" />
                        <h2>TASK LIST NAME</h2>
                    </Link>

                    <Link className="header_taskLists_taskList" to={'/TaskPage'}>
                        <img src={taskListWhite} alt="sdasd" />
                        <h2>TASK LIST NAME</h2>
                    </Link>

                    <Link className="header_taskLists_taskList" to={'/TaskPage'}>
                        <img src={taskListWhite} alt="sdasd" />
                        <h2>TASK LIST NAME</h2>
                    </Link>

                </nav>
            </div>

        </header>
    )
}

export default Header