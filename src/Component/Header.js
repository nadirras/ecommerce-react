import React from "react";
import "../index.css";
import Navigation from './Navigation';
function Header(){
    return(
        <h1 className="border-b p-3 flex justify-between items-center">
            <span className="font-bold">
                AppName
            </span>

            <Navigation />
        </h1>
        )
}

export default Header;