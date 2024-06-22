import React from "react";
import CourseHeader from "../../components/cource-header/Course-header";
import ModualHead from "../../components/create-modul/ModualHead";
import AddLinkModual from "../../components/add-link/AddLinkModual";
import FileUplaodModual from "../../components/file-upload/FileUploadModual";

function CourseBody() {
    return (
        <>
            <div className="body-wrapper">
                <div className="container">
                    <CourseHeader />
                    <ModualHead />
                    <AddLinkModual />
                    <FileUplaodModual />
                </div>
            </div>
        </>
    )
} export default CourseBody;