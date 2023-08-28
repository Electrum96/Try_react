import React from "react";
import './header.scss';

const Header = function() {

    return (
        <div className="header">
            <div className="header__container">
                <span>Header</span>
                <div className="header__themes">
                    <img className="header__themes-light"></img>
                    <img className="header__themes-dark"></img>
                </div>

            </div>
        </div>
        
    )
}
export default Header;