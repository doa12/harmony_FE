import styled from "styled-components";

export const Input = styled.input`
    width: 335px;
    height: 52px;
    padding-left: 18px;
    border: 1px solid #DDDDDD;
    margin-top: 8px;
    font-size: 13px;
    color: #000000;
    }
`

export const Checkinput = styled.input`
    width: 20px;
    height: 20px;
    border: 1px solid #DDDDDD;
    border-radius: 10px;
    appearance: none;

    :checked {
        background: #7D7D7D;
    }
`

export const RadioInput = styled.input`
    display: none;

    :checked + label{
        border: 1px solid #7D7D7D;
        font-weight: 600;
    }
`