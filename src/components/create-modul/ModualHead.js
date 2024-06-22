import React, { useState } from "react";
import dotIcon from "../../images/dots.svg";
import arrowIcon from "../../images/blckarro.svg";
import editIcon from "../../images/penciel.svg";
import deleteIcon from "../../images/Delete.svg"


function ModualHead() {

    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(prevIsActive => !prevIsActive);
    };
    return (

        <div className="modual-head-wrapper">
            <ul className="modual-head-data-append">
                <li>
                    <div className="modual-main-wrap">
                        <div className="modual-main-icon">
                            <div className="modual-arrow">
                                <img src={arrowIcon} alt="Shape" />
                            </div>
                        </div>
                        <div className="modual-data-fatch">
                            <h5>Introduction to Trigonometry</h5>
                            <p>Add items to this module</p>
                        </div>
                        <div className="modual-data-fatch">
                            <div id="modual-dot-btn" className={isActive ? 'active' : ''} onClick={toggleClass} style={{ textAlign: "right" }}>
                                <button className="cst-btn">
                                    <span className="move-icon"><img src={dotIcon} alt="Shape" /></span>
                                </button>
                            </div>
                            <div className="sub-modual">
                                <div className="sub-modual-list">
                                    <span><img src={editIcon} alt="icon" /></span>
                                    <p>Edit modual name</p>
                                </div>
                                <div className="sub-modual-list">
                                    <span><img src={deleteIcon} alt="icon" /></span>
                                    <p className="dlt">Delete</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default ModualHead;