import '@/components/task/task.scss'

import { UpperTask } from "@/intefaces/interface"
import { FC } from "react"

import SecondaryTask from '../secondaryTask/secondaryTask'

const Task: FC <UpperTask> = () => {
    return(
        <div className="task">
            <div className="task_group">
                <input type="checkbox" />
                <h4>ЗаданиеЗаданиеЗаданиеЗаданиеЗаданиеЗадание ЗаданиеЗаданиеЗаданиеЗаданиеЗадание ЗаданиеЗаданиеЗадание</h4>

                {/* <div className="task_change">
                    <input type="text" />
                    <button>Подтвердить</button>
                </div> */}
            </div>

            <div className="task_secondaryTasksList">
                <SecondaryTask task = {'SEC TASK'} id = {1} fatherId={0} check = {false}/>
                <SecondaryTask task = {'SEC TASK'} id = {1} fatherId={0} check = {false}/>
                <SecondaryTask task = {'SEC TASK'} id = {1} fatherId={0} check = {false}/>
                <SecondaryTask task = {'SEC TASK'} id = {1} fatherId={0} check = {false}/>
            </div>
        </div>
    )
}

export default Task