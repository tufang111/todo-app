import styled from "@emotion/styled";
// import upImg from "../../images/uploadimg.svg";

export const FileUploadWrapper = styled.div`



.file-upload-wrapper {
    .drp-btn {
        position: relative;

        input {
        width: 100%;
        position: relative;
        cursor: pointer;
        opacity: 0;
        z-index: 9;
        }
        .inner-data {
        display: flex;
        align-items: center;
        gap: 10px;
        position: absolute;
        left: 0;
        padding-left: 16px;
        z-index: 1;
        cursor: pointer;

           img {
            opacity: .6;
           }
        } 
        &:hover img {
            opacity: 9;
        } 
    }

}
`