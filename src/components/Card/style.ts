import { styled } from 'styled-components/native'
import { Dimensions } from 'react-native';

const deviceWidth = Math.round(Dimensions.get("window").width);
export const ContainerCard = styled.View`
    flex: 1;
    width: ${deviceWidth} -10;
    height: 120px;
    background-color: #b9f9b9;
    color: black;
    border-Radius: 20px;
    width: ${deviceWidth};
    /* shadowOffset: {
        width: 15px;
        height: 5px;
    }; */
    /* shadow-Opacity: 0.5;
    shadow-Radius: 5px;
    elevation: 5; */
    margin: 5px;
    padding: 5px;
    align-items: center;
    justify-content: center;
    /* flex-direction: row;
    flex-wrap: wrap; */
    /* border: 1px solid black; */

  
  

`;


export const ContainerImage = styled.Image`
    width: 100px;
    height: 100px;
    margin: 5px;
    position:absolute;
`;
