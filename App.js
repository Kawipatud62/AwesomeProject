/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import { Input, Button, Image } from 'react-native-elements'
 import React from 'react';
 import type {Node} from 'react';
 import firestore from '@react-native-firebase/firestore'
 import Icon from 'react-native-vector-icons/FontAwesome';
 import {
   TextInput,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
  const Section = ({children, title}): Node => {
    firestore().collection('Users').doc('ABC').get().then((user) => {
      console.log(user)
    });
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
 
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <Input placeholder="Hint"></Input>
       <Text style={{fontSize:20}}>NUTTZO</Text>
       <TextInput style={{backgroundColor:"#DDDDDD"}} keyboardType="default"></TextInput>
       <ScrollView>
       <Image
  source={{ uri: 'https://static.wikia.nocookie.net/umamusume/images/3/3b/TokaiTeio_Uniform.png/revision/latest?cb=20180425085144' }}
  style={{ width: 250, height: 540, padding:30}}
/>
<Image
  source={{ uri: 'https://static.wikia.nocookie.net/umamusume/images/3/3b/TokaiTeio_Uniform.png/revision/latest?cb=20180425085144' }}
  style={{ width: 250, height: 540, padding:30}}
/>
<Image
  source={{ uri: 'https://static.wikia.nocookie.net/umamusume/images/3/3b/TokaiTeio_Uniform.png/revision/latest?cb=20180425085144' }}
  style={{ width: 250, height: 540, padding:30}}
/>
<Image
  source={{ uri: 'https://static.wikia.nocookie.net/umamusume/images/3/3b/TokaiTeio_Uniform.png/revision/latest?cb=20180425085144' }}
  style={{ width: 250, height: 540, padding:30}}
/></ScrollView>
       <Button
  icon={
    <Icon
      name="arrow-right"
      size={30}
      color="red"
    />
  }
  iconRight
  title="Button with right icon "
/>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;