// Added 20221105
import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function HowTo({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>There are several Note-Taking app, But this app is the simpliest one.
Go to the note page and start your writing! If there are lots of notes already, go to search bar and search any keywords or word of your work. You can delete and edit notes too! Your work will be saved and you'll see the date on when you did that work
 </Text>
 <Text></Text>
 <Text>Pages: NOTE, HOW TO USE, ABOUT</Text>
 <Text></Text>
 <Image style={styles.image} source={require('./HowToPic/bn.png')}/> 


 <Text>Want to Ask our developers for help? Go to the About Page and click Developer Profiles and send them a message via email.</Text>

    </View>    
  );
}

const styles = StyleSheet.create({
  image: {
    width: 380,
    height: 380,

    overflow: "hidden",
    
    borderColor: "black"
  }
});
export default HowTo;