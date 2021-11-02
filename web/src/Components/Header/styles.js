import styled from "styled-components";

export const Container = styled.div`
        width:100%;
        height:70px;
        background: #006400;
        border-bottom:6px solid #90EE90;
`
export const Menu = styled.div`
        width:50%;
        height: 70px;
        display: flex;
        align-items: center;
        

        a{
                font-family: Impact, Charcoal, sans-serif;
                color: #FFF;
                font-weight: normal;
                text-decoration: none;
                margin: 0 10px;
        }

        .barra::after{
                content: "|";
                margin: 0 10px;
                color: #FFF;
            }
        
            a:hover{
                color: #90EE90;
            }
`