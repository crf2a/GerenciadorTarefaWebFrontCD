import styled from "styled-components";

export const Container = styled.div`
        width: 150px;
        height: 40px;
        background: #006400;
        border-radius: 10px;
        padding: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        cursor: pointer;
        

        img{
            width: 25px;
            height: 25px;
        }
       
        span{
            color: #FFF;
            font-weight: bold;
            font-size: 15px;
            align-self: flex-end;            
        }

        &:hover{
            background: #90EE90
        }
`