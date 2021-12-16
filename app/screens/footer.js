import React from 'react';
import { Text, View,Button,StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import {enableScreens} from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';

const footer = ({navigation}) => (
        <View style={styles.footer}>
            <View  style={styles.c4} onPress={()=>navigation.navigate('Settings')}>
                <FontAwesome5 style = {{}} name="home" size={30} color="#91918f"
                />
            </View>
            <View  style={styles.c4} onPress={()=>navigation.navigate('Settings')}>
                <FontAwesome5 style = {{}} name="home" size={30} color="#91918f"
                />
            </View>
            <View  style={styles.c4} onPress={()=>navigation.navigate('Settings')}>
                <FontAwesome5 style = {{}} name="home" size={30} color="#91918f"
                />
            </View>
            <View  style={styles.c4} onPress={()=>navigation.navigate('Settings')}>
                <FontAwesome5 style = {{}} name="home" size={30} color="#91918f"
                />
            </View>
            <View  style={styles.c4} onPress={()=>navigation.navigate('Settings')}>
                <FontAwesome5 style = {{}} name="home" size={30} color="#91918f"
                />
            </View>
        </View>
);


const styles = StyleSheet.create({
    footer: {
        flex: 1,
        backgroundColor: '#fcfcfb',
        alignItems: 'center',
        flexDirection:'row',
        borderWidth:1,
      },
    c4: {
        padding:25,
        flex: 10,   
        backgroundColor: '#fff',
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
      },
  });
  export default footer;