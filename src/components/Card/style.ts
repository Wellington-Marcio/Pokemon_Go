import { styled } from 'styled-components/native'
import { Dimensions } from 'react-native';

const deviceWidth = Math.round(Dimensions.get("window").width);
export const ContainerCard = styled.View`
    flex: 1;
    width: ${deviceWidth} ;
    height: 120px;
    background-color: #b9f9b9;
    color: black;
    border-Radius: 20px;
    width: ${deviceWidth};
    elevation: 9px; 
    margin: 5px;
    padding: 5px;
    align-items: center;
    justify-content: center;
     flex-direction: row;
    flex-wrap: wrap;
    border: 1px solid black; 

  
  

`;


export const Content = styled.View`
    width: 100px;
    height: 100px;
    margin: 5px;
    position:absolute;
`;
