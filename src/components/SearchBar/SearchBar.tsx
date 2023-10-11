import React, { useState } from "react";
import { Button, Input,  Container, } from "./style";
import { Text } from "react-native";


const SearchBar: React.FC = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    // Lógica de pesquisa aqui
    console.log("Pesquisando por:", search);
  };

  return (
    
        <Container>
      <Input
        placeholder="Digite sua pesquisa"
        value={search}
        onChangeText={setSearch}
      />

      <Button onPress={handleSearch}>
        <Text>Pesquisar</Text>
      </Button>
    </Container>
  );
};



export default SearchBar;
