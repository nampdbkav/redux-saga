import React, { useContext } from "react";
import { ThemeContext } from './ThemeContext'

const Footer = ({ countActive }) => {
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
            </div>
        </div>
    )
}

export default Footer