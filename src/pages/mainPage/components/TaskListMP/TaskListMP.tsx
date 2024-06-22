import { Link } from "react-router-dom"

import '@/pages/mainPage/components/TaskListMP/TaskListMP.scss'


import taskListWhite from '@/assets/images/taskListWhite.png'

function TaskListMP(){
    return(
        <li>
            <Link to={'/taskPage'}>
                <img src = {taskListWhite} alt="taskList" />

                <div className="taskList_info">
                    <h2 className="taskList_info_heading">Task List Name</h2>
                    <div className="taskList_info_additional">Additional info</div>
                    <div className="taskList_info_type">Local</div>
                </div>
            </Link>
        </li>
    )
}

export default TaskListMP