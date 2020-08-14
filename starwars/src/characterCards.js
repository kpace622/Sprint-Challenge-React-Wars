import React from 'react';
import styled from 'styled-components';

const Width = styled.div`
    width: 500px;
`
const CharacterCard = ({ character }) => {
    return (
        <Width>
            <h2>{character.name}</h2> 
            <h4>Birth Year: {character.birth_year}</h4>
        </Width> 
    );
;}

export default CharacterCard;