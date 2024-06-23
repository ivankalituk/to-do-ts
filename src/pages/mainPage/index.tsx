import '@/pages/mainPage/mainPage.scss'
// import { Link } from 'react-router-dom'

import TaskListMP from '@/pages/mainPage/components/TaskListMP/TaskListMP'
import { TaskList } from '@/intefaces/interface'

function MainPage(){

    // на мейнпейджи должно быть создание таска и отображение всех созданных тасков 

    // добавить возможность показывания тасклистов сеткой, либо списком

    const tasks: TaskList[] = 
    [
        {
            name: "Программирование",
            type: "Fetched",
            additional: "Список для программирования"
        },

        {
            name: "Качалка",
            type: "Fetched",
            additional: "Список для качалки"
        },

        {
            name: "Еда",
            type: "Local",
            additional: "Список для еды"
        },

    ]

    return(
        <div className="mainPage">

            <section className="mainPage_additionalInfo">
                SOME ADITIONAL LONG INFO
            </section>

            <section className="mainPage_previousLists">
                <h3>Previous task lists</h3>

                <ul>
                    {tasks.map((data, index) => (
                        <TaskListMP name ={data.name} aditional={data.additional} type={data.type} id = {index} />
                    ))}
                </ul>

            </section>

        </div>
    )
}

export default MainPage