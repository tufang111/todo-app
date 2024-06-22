import React from "react";
import { CourseStyled } from "./style";
import AddButton from "../add-button/AddButton";




function CourseHeader() {
    return (
        <>
            <CourseStyled>
                <div className="cource-main-wrapper">

                    <div className="cource-main-inner-wrapper">
                        <div className="heading-text">
                            <h2>Course builder</h2>
                        </div>
                        <div className="course-button-bar">
                            <AddButton />
                        </div>
                    </div>
                </div>
            </CourseStyled>

        </>
    )
} export default CourseHeader;