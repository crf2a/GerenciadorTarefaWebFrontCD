import styled from "styled-components";

export const Container = styled.div`
        width: 150px;
        height: 40px;
        background: ${props => props.activation ? '#90EE90' : '#006400'};
        border-radius: 10px;
        padding: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        cursor: pointer;
        box-shadow: 4px 5px 5px rgba(0, 0, 0, 0.450);
        

        img{
            width: 35px;
            height: 35px;
            
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

        button{
            border: none;
            
        }

`