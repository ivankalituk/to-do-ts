import { FC } from "react";

import './mainPage.scss'

import MainTask from "@/components/mainTask/mainTask";


const MainPage: FC = () => {
    return(
        <div className="mainPage">
            <div className="mainPage_container">
                
                <div className="mainPage_heading">
                    <div className="mainPage_heading_text">Your current tasks</div>
                    <div className="mainPage_heading_additional">Powered with local storage</div>
                </div>

                <div className="mainPage_taskList">
                    <MainTask />

                    <button className="mainPage_taskList_addTask">Add Main task</button>
                </div>                

            </div>
        </div>
    )
}

export default MainPage