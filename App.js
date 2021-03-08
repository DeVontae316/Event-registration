import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
/* ------------------------------------------*/
import Main from './Navigation/Main';
import { UserContext } from './Context/userContext';
import Login from './Navigation/Auth';
import Form from './components/form';











function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [auth, setAuth] = useState(false);
  const [photo, setPhoto] = useState();
  const [id, setId] = useState(null);

  return (

    <UserContext.Provider value={{
      nameInput: [name, setName],
      emailInput: [email, setEmail],
      occupationInput: [occupation, setOccupation],
      authInput: [auth, setAuth],
      idInput: [id, setId],
      picInput: [photo, setPhoto],
    }}>

      <NavigationContainer>
        {!auth ?
          <Login /> : (
            <Main />
          )

        }

      </NavigationContainer>




    </UserContext.Provider>

  )
}

export default App;


/*  <SafeAreaView
   style={{
     justifyContent: "center",
     alignItems: "center",

   }}
 >
   <TouchableWithoutFeedback onPress={() => console.log("clicked")}>
     <Image source={require("./assets/favicon.png")}
       style={{
         width: 100,
         height: 100,
         borderRadius: 50,
         borderWidth: 3,

       }}

     />
   </TouchableWithoutFeedback>
   <TouchableWithoutFeedback onPress={() => console.log("clicked")}>
     <Image
       style={{
         borderRadius: 50,
         borderWidth: 3,
         marginTop: 15,
         overflow: "hidden",


       }}
       source={{
         uri: "https://picsum.photos/seed/picsum/200/300",
         width: 100,
         height: 100,

       }}
     />
   </TouchableWithoutFeedback>
 </SafeAreaView> */











