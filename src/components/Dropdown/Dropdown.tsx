import { useState } from "react"
import './DropdownStyles.css'

export function Dropdown({optionItems,selected , setSelected}: any)
{
    const [isActive, setIsActive] = useState(false);
    const options = optionItems as Array<string>
    return(
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                {selected}
                <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
            <div className="dropdown-content">
                {options.map(option => (
                    <div onClick={(e) => {
                        setSelected(option);
                        setIsActive(false);
                    }
                    } 
                    className="dropdown-item">{option}</div>
                ))}
                
            </div>
            )}
        </div>
    )
}