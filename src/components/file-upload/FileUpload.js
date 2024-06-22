import React from "react";
import uploadImg from "../../images/uploadimg.svg";
import { FileUploadWrapper } from "./style";

function FileUpload() {
    return (
        <>
            <FileUploadWrapper>
                <div className="file-upload-wrapper">
                    <button className="drp-btn">
                        <input type="file" />
                        <div className="inner-data">
                            <img src={uploadImg} alt="img" />
                            <p>Upload</p>
                        </div>
                    </button>
                </div>
            </FileUploadWrapper>
        </>
    )
} export default FileUpload;