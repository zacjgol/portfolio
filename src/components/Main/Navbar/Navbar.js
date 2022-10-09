import React, {useEffect, useState} from 'react'
import './Navbar.css'

function Navbar(props) {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("burger-menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [offsetY, setOffsetY] = useState(0)

    const handleScroll = () => {
        console.log(offsetY)
        setOffsetY(window.pageYOffset)}

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
        window.removeEventListener('scroll', handleScroll)
        }
    }, []);

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
         <div className='navbar-container' style={{ background: `${offsetY > 950 ? '#020d19': 'none'}` }}>
            <h1 className='navbar-logo'>Zac Fletcher</h1>
            <div className="burger" onClick={updateMenu}>
                <div className={`${burger_class} first`} ></div>
                <div className={burger_class} ></div>
            </div>
                <div className={menu_class}>
                <ul className='navbar-menu-items'>
                    <li>Projects</li>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About me</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar