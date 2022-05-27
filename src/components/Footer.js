import React, { useContext } from "react";
import { ThemeContext } from './ThemeContext'
import Link from "./Link";
import { setShow } from "../action/action";

const Footer = ({ countActive, clearComplete, onClearComplete }) => {
    const theme = useContext(ThemeContext)
    return (
        <div className="footer">
            <div className={theme}>
                {countActive}
                <span>: items left</span>
            </div>
            <div>
                <Link filter={setShow.SHOW_ALL}>All</Link>
                <Link filter={setShow.SHOW_ACTIVE}>Active</Link>
                <Link filter={setShow.SHOW_COMPLETED}>Complete</Link>
                {clearComplete ? (
                    <button onClick={onClearComplete}>Clear Complete</button>
                ) : null}
            </div>
        </div>
    )
}

export default Footer