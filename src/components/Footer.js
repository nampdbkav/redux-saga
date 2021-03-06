import React, { Fragment, useContext } from "react";
import { ThemeContext } from './ThemeContext'
import Link from "./Link";
import { setShow } from "../action/action";

const Footer = ({ todos, countActive, clearComplete, onClearComplete }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <Fragment>
            {todos.length > 0 && (
                <div className="footer">
                    <div className={theme}>
                        {countActive}
                        <span>: items left</span>
                    </div>
                    <div>
                        <Link filter={setShow.SHOW_ALL}>All</Link>
                        <Link filter={setShow.SHOW_ACTIVE}>Active</Link>
                        <Link filter={setShow.SHOW_COMPLETED}>Complete</Link>
                        {clearComplete && (
                            <button onClick={onClearComplete}>Clear Complete</button>
                        )}
                    </div>

                </div>
            )}
        </Fragment>
    )
}

export default Footer