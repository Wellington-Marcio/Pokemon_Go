// import { StyleSheet, Dimensions} from 'react-native'
import React from 'react'
import { Container } from './src/components/Global/style'
import Home from './src/screens/Home'



const App = () => {
  return (<>
    
    <Container>
      
      <Home/>
      
    </Container>
    </>
  )
}


// const deviceWidth = Math.round(Dimensions.get('window').width);
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: deviceWidth,
//     backgroundColor: 'linear-gradient(180deg, #FF3FFF 0%, #d55F2 100%)',
//     alignItems: 'center',
//     justifyContent:'center',
//     padding: 10,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 10,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
// })

export default App

