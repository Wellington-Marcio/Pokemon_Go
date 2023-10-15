import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import axios from "axios";
import PokemonCard from "../../components/Card/PokemonCards";
import PokemonLogo from "../../components/SearchBar/PokemonLogo";
import { Container, InputSheared } from "./style";


function DashScreen({navigation}) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=1000"
        );
        setData(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSelect = ({id, name}) => {
    navigator.navigate("ProfileScreen", { id, name });
  };
  return (
    <Container>
      <PokemonLogo />
      <InputSheared
        style={styles.searchBar}
        value={search}
        onChangeText={setSearch}
        placeholder="Search"
        onSubmitEditing={() => handleSelect(null, search)}
      />
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <PokemonCard
            key={index}
            sprites={{
              front_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`,
            }}
            id={index + 1}
            name={item.name}
            onPress={() => handleSelect(index + 1, item.name)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </Container>
  );
};


export default DashScreen;
