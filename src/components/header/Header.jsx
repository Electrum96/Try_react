import React from "react";
import Brightness3OutlinedIcon from '@material-ui/icons/Brightness3Outlined';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import './header.scss';


const Header = function() {

    function handleChahgeThemes() {
       console.log("work");


    }

    return (
        <div className="header">
            <div className="header__container">
                <span className=" header__title">Todo list</span>
                <button className="header__button-dark">
                <Brightness3OutlinedIcon/>
                <span className="header__descr-dark">Тёмный режим</span>
                </button>
                <button className="header__button-light" onClick={handleChahgeThemes}>
                <WbSunnyOutlinedIcon/>
                <span className="header__descr-light">Светлый режим</span>
                </button>
            </div>
        </div>
        
    )
}
export default Header;