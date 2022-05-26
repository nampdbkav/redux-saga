import React, { useContext } from "react";
import { ThemeContext } from './ThemeContext'

const Footer = ({ countActive, clearComplete, onClearComplete }) => {
    const theme = useContext(ThemeContext)
    return (
        <div className="footer" style={{ theme }}>
            <div>
                {countActive}
                <span>: items left</span>
            </div>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Complete</button>
                {clearComplete ? (
                    <button onClick={onClearComplete}>Clear Complete</button>
                ) : null}
            </div>
        </div>
    )
}

export default Footer