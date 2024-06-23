import '@/pages/taskPage/taskPage.scss'

import Task from '@/components/task/task'

function TaskPage(){
    return(
        <div className="taskPage">

            <div className="taskPage_listNameGroup">
                <h2 className="taskPage_listNameGroup_name">Название списка задач</h2>
            
                <div className="taskPage_listNameGroup_change">
                    <input type="text" placeholder='Введите название списка задач'/>
                    <button>Подтвердить</button>
                </div>
            </div>

            
            <div className="taskPage_aditionalGroup">
                <h3 className="taskPage_aditionalGroup_adtitional">Текст дополнительной информации</h3>
            
                <div className="taskPage_aditionalGroup_change">
                    <input type="text" placeholder='Введите дополнительну информацию'/>
                    <button>Подтвердить</button>
                </div>
            </div>

            <div className="taskPage_taskListGroup">
                <div className="taskPage_taskListGroup_heading">Список задач</div>

                <div className="taskPage_taskListGroup_taskList">
                    <Task task ={'gay'} check = {false} id={2}/>
                    <Task task ={'gay'} check = {false} id={2}/>
                    <Task task ={'gay'} check = {false} id={2}/>
                    <Task task ={'gay'} check = {false} id={2}/>
                </div>

            </div>


        </div>
    )
}

export default TaskPage