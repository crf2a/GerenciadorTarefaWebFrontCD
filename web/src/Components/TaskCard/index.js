import React from 'react';
import styled from 'styled-components';
import * as Styled from './styles';

function TaskCard(props){
    return (
        <Styled.Container>
            <Styled.TopCard>
                <img src={props.img} alt="Tarefa"></img>
                <h3>{props.title}</h3>
            </Styled.TopCard>
            <Styled.BottomCard>
                <strong>16/09/2020</strong>
                <span>10:00</span>
            </Styled.BottomCard>
        </Styled.Container>
    )
}

export default TaskCard;