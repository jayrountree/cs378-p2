import React from 'react';

import "./MenuItem.css";
// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, desc, image, price }) => {
    return (    
        <div className="menu-parent">
            <div className="info row">
                <div className="col">
                    <img className="image" src={require("../images/" + image)} alt={desc}></img>
                </div>
                <div className="col">
                    <div className="item">
                        <div>
                            <p className="item-name">{title}</p>
                            <p className="item-desc">{desc}</p>
                        </div>
                    </div>
                    <div className="pricing-items row">
                        <div className="col"> 
                            <div className="price">
                                <p className="price-text">${price}</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="add">
                                <button className="add-button">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default MenuItem;
