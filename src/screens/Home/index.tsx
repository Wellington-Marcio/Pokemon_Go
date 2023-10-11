import { Text } from "react-native";
import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Container } from "../../components/Global/style";
import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from "../../components/Card/PokemonCards";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    const endpoints = [];
    for (let i = 1; i <= 10; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    const response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  };

  return (
    <Container>
      <Text>POKEMON CHALLENGE</Text>
      <SearchBar />
      <Container>
        {pokemons.map((pokemon, key) => (
          <Container item xs={12} sm={6} md={4} lg={3}key={key}>
          
              <PokemonCard name={pokemon.name}/>
          
          </Container>
        ))}
      </Container>
    </Container>
      );
};


export default Home;
