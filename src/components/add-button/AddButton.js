import React, { useState } from "react";
import { ButtonStyled } from "./style";
import buttonPlusIcon from "../../images/plus.svg";
import moveIcon from "../../images/arrowmove.svg";
import CreateModuale from "../create-modul/Create-modul";
import AddALink from "../add-link/Add-a-link";
import FileUpload from "../file-upload/FileUpload";

function AddButton() {
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(prevIsActive => !prevIsActive);
    };

    return (
        <>
            <ButtonStyled>
                <div id="modual-btn" className={isActive ? 'active' : ''} onClick={toggleClass}>
                    <button id="add-button">
                        <span className="icon"><img src={buttonPlusIcon} alt="Shape" /></span>
                        add
                        <span className="move-icon"><img src={moveIcon} alt="Shape" /></span>
                    </button>
                    <div className="dropdawn-wrap">
                        <div className="dropdawn-inner-wrap">
                            <div className="dropdawn-data">
                                <CreateModuale />
                                <AddALink />
                                <FileUpload />
                            </div>
                        </div>
                    </div>
                </div>


            </ButtonStyled>
        </>
    )
}

export default AddButton;
