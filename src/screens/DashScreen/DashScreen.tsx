import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, FlatList } from "react-native";
import axios from "axios";
import PokemonCard from "../../components/Card/PokemonCards";
import PokemonLogo from "../../components/SearchBar/PokemonLogo";

const DashScreen = ({ navigation }) => {
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

  const handlePokemonSelect = (id, name) => {
    navigation.navigate("ProfileScreen", { id, name });
  };
  return (
    <View style={styles.container}>
      <PokemonLogo />
      <TextInput
        style={styles.searchBar}
        value={search}
        onChangeText={setSearch}
        placeholder="Search for Pokémon..."
        onSubmitEditing={() => handlePokemonSelect(null, search)}
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
            onPress={() => handlePokemonSelect(index + 1, item.name)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  searchBar: {
    width: 296,
    padding: 10,
    margin: 40,
    backgroundColor: "#E5E5E5",
    borderRadius: 30,
    fontSize: 18,
    textAlign: "center",
  },
});

export default DashScreen;

