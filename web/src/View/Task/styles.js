import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.div `   
    width: 50%;
`

export const Icons = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
        img{
            width: 75px;
            heigth: 75px;
            cursor: pointer;
            margin: 10px;
            
        }
        button {
            border: none;
            background: none;
            
        }
        .off{
            opacity: 0.4;
        }
`

export const Input = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    box-shadow: 0px 2px 15px -1px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 2px 15px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 2px 15px -1px rgba(0,0,0,0.75);
       input{
           font-size: 16px;
           padding: 15px;
           border: 1px solid #90EE90;
       }
`
export const TextArea = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    box-shadow: 0px 2px 15px -1px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 2px 15px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 2px 15px -1px rgba(0,0,0,0.75);
       input{
           font-size: 16px;
           padding 15px;
           border: 1px solid #90EE90;
       }
`
export const Option = styled.div `
       display: flex;
       justify-content: space-between;
       button{
            font-family: Impact, Charcoal, sans-serif;
            color: #006400;
            border: none;
            background: none;
            cursor: pointer;
            font-size: 15px;
            &:hover{
            opacity: 0.7;
           }
       }
       div{
        font-family: Impact, Charcoal, sans-serif;
        display: flex;
        align-items: center;
        color: #006400;
        font-size: 15px;
    }
`

export const Save = styled.div `  
    margin-top: 10px;
    button{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        background: #006400;
        border: none;
        font-size: 20px;
        color: white;
        border-radius: 10px;
        cursor: pointer;
        font-family: Impact, Charcoal, sans-serif;
        box-shadow: 3px 0px 20px 8px rgba(0,0,0,0.58);
        -webkit-box-shadow: 3px 0px 20px 8px rgba(0,0,0,0.58);
        -moz-box-shadow: 3px 0px 20px 8px rgba(0,0,0,0.58);

        &:hover{
            background: #90EE90
            
        }
    }
`
