import React, {useState} from 'react'
import './Navbar.css'

function Navbar() {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("burger-menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("navbar-menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("navbar-menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div className='navbar-wrapper'>
            <div className='navbar-container'>
                <h1 className='navbar-logo'>Zac Fletcher</h1>
                <div className="burger" onClick={updateMenu}>
                    <div className={`${burger_class} first`} ></div>
                    <div className={burger_class} ></div>
                </div>
                <div className={menu_class}>
                    <ul className='navbar-menu-items'>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>Projects</li>
                        <li>About me</li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Navbar