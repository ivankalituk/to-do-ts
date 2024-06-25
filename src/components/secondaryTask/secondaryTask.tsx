import './secondaryTask.scss'

import { FC } from "react";

const SecondaryTask: FC = () => {
    return (
        <div className="secondaryTask">
            <input type="checkbox" />
            
            <div className="secondaryTask_Text">TASK TEXT</div>


        </div>
    )
}

export default SecondaryTask