import React from "react";
import './container.scss';

const Container = function({children}) {

    return(
        <div className="container">
            {children}
        </div>
    )
}
export default Container;