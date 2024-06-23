import { SecondaryTaskInterface } from "@/intefaces/interface"
import { FC } from "react"

import '@/components/secondaryTask/secondaryTask.scss'

const SecondaryTask: FC <SecondaryTaskInterface> =() =>{
    return(
        <div className="secTask">
            <div className="secTask_Group">
                <input type="checkbox" />
                <h5>TASK</h5>
            </div>
        </div>
    )
}

export default SecondaryTask