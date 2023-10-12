import React from "react";
import { Image, Text } from "react-native";
import { ContainerCard, Content } from "./style";

const PokemonCard = ({ name, image }) => {
  return (
    <ContainerCard>
      <Content>
      
      <Image src={image} 
      height="140"
      alt="pokemon" />
      </Content>

      <Text>{name}</Text>
    </ContainerCard>
  );
};

export default PokemonCard;
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// export default function PokemonCard({name}) {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image=""
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {name}
//           </Typography>
//        </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }