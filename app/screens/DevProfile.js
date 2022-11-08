// Added 20221105
import * as React from 'react';
import { View, Text, Image } from 'react-native';

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Meet the Developers!</Text>
      <Text></Text>
      <Text></Text>
      <View>
        <Image source={require('./DevPics/Aure.png')}
            style={{width:40, height:40}}
         />
      </View>
      <Text>Aurelia Yarcia</Text>
      <Text>BSCS</Text>
      <Text>18 years old</Text>
      <Text>aureliayarcia@gmail.com</Text>
      <Text></Text>
      <View>
        <Image source={require('./DevPics/Celis.png')}
            style={{width:40, height:40}}
         />
      </View>
      <Text>John Carlos Celis</Text>
      <Text>BSCS</Text>
      <Text>20 years old</Text>
      <Text>johncarloscelis05@gmail.com</Text>
      <Text></Text>
      <View>
        <Image source={require('./DevPics/Clark.png')}
            style={{width:40, height:40}}
         />
      </View>
      <Text>Clark Czedrick F. Limson</Text>
      <Text>BSCS</Text>
      <Text>19 years old</Text>
      <Text>clarklimson@gmail.com</Text>
      <Text></Text>
      <View>
        <Image source={require('./DevPics/Luci.png')}
            style={{width:40, height:40}}
         />
      </View>
      <Text>Richard Reynald Guevarra</Text>
      <Text>BSCS</Text>
      <Text>21 years old</Text>
      <Text>richardguevarra666@gmail.com</Text>
   
     
      
    </View>   
  );
}

export default Profile;