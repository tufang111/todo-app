import styled from "@emotion/styled";

export const ButtonStyled = styled.div`



#add-button {
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: capitalize;
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    border-radius: 6px;
    /* width: 108px; */
    /* height: 40px; */
    background-color: #AF273E;
    justify-content: center;
    padding: 11px 18px;
    transition: .3s;
    cursor: pointer;

    
    span {
    display: flex;
    align-items: center;
}
.move-icon {
    transform: rotate(180deg);
    transition: .3s;
}

}
 #modual-btn.active .move-icon {
    transform: rotate(0deg);
}

`