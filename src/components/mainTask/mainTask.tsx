import './mainTask.scss'

import { FC } from "react";

// custom CheckBox

import SecondaryTask from '@/components/secondaryTask/secondaryTask';

const MainTask: FC = () =>{
    return (
        <div className="mainTask">
            <div className="mainTask_heading">
                <div className="mainTask_heading_checkbox">
                    <input type="checkbox" />
                </div>

                <div className='mainTask_heading_text'>Main task heading</div>
            </div>

            <div className="mainTask_secondatyTasks">
                <SecondaryTask />
                <SecondaryTask />
                <SecondaryTask />
                <SecondaryTask />
            </div>


        </div>
    )
}

export default MainTask