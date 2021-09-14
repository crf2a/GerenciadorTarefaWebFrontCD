import React from 'react';
import * as Styled from './styles';
import Image from '../../Images/filter.png'

function Filter({title}){
    return (
        <Styled.Container>
            <img src={Image} alt="FILTRO"/>
            <span>{title}</span>
        </Styled.Container>
    )
}

export default Filter;