import React from 'react';

import "./MenuHeader.css";

const MenuHeader = () => {
    return (    
        <div className="title">
            <div className="title-box">
                <img className="logo" src={require("../images/logo.png")} alt={"Logo for the restaurant"}></img>
                <p className="header">Japanese Menu</p>
                <p className="subheader">おいしい日本料理</p>
            </div>
        </div>
    );
};

export default MenuHeader;
