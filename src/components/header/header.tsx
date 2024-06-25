import './header.scss'

import { FC } from "react";

const Header: FC = () => {
    return (
        <header>
            <div className="header_container">
                <div className="header_inner">
                    <h1>ToDo Advanced</h1>
                </div>
            </div>
        </header>
    )
}

export default Header