import React from "react";
import {Text} from "react-native";
import {ContainerCard, ContainerImage} from "./style";


const PokemonCard = ({name, image}) => { 
    return (
        
        <ContainerCard>
            <ContainerImage>
            <img src={image} alt="" />
            </ContainerImage>
            <Text>{name}</Text>
        </ContainerCard>
    )

}
// const deviceWidth = Math.round(Dimensions.get("window").width);
// const styles = StyleSheet.create({
// cardContainer: {
//     width: deviceWidth - 20,
//     backgroundColor: '#b9f',
//     color: 'black',
//     borderRadius: 20,
//     shadowOffset: {
//         width: 5,
//         height: 5,
//     },
//     shadowColor: '#000',
//     shadowOpacity: 0.75,
//     shadowRadius: 5,
//     elevation: 9,

// },
// });
export default PokemonCard;