import { Link } from "react-router-dom"

import '@/pages/mainPage/components/TaskListMP/TaskListMP.scss'
import { FC } from "react"

import taskListWhite from '@/assets/images/taskListWhite.png'

interface TaskListInterface {
    name: string,
    aditional: string,
    id: number,
    type: string
}


const TaskListMP: FC<TaskListInterface> = ({name, aditional, id, type}) =>{
    return(
        <li>
            <Link to={`/taskPage/${id}`}>
                <img src = {taskListWhite} alt="taskList" />

                <div className="taskList_info">
                    <h2 className="taskList_info_heading">{name}</h2>
                    <div className="taskList_info_additional">{aditional}</div>
                    <div className="taskList_info_type">{type}</div>
                </div>
            </Link>
        </li>
    )
}

export default TaskListMP