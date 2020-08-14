import React, { useState, useEffect } from "react";
import axios from 'axios';
import CharacterCard from "./characterCards";
import styled from "styled-components";

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: lightgray;
  opacity: 0.7;
`

export default function DisplayCharacter() {

  const [char, setChar] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        console.log(response)
        setChar(response.data.results)
      })
  }, []);
  
  return (
    <div className='container'>
      <Cards>
        {char.map(character => {
          return <CharacterCard character={character} key={character.created} />;
        })}
      </Cards>
    </div>
  );
} 

// Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.