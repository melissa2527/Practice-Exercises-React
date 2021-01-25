import React, {useState} from 'react'

export const DropDown = () => {
    const [menu, setMenu] = useState(false)

    const showMenu = () => {
        setMenu(!menu)
    }
    return (
        <div>
            <button onClick={showMenu}>Menu</button>
            <nav className={`drop-down ${menu} ? 'active' : 'inactive'`}></nav>
            
        </div>
    )
}
