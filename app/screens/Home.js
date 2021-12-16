import React, { useState } from 'react';
import { TouchableOpacity,ScrollView, Text, View,Button,StyleSheet,Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

import data from '../../data.json';


const Home = ({navigation}) => {
    const i = data.food.length;
    return(
    <View style={styles.container}>
        <View style={styles.content}>
        <ScrollView style={styles.scrollView}>
      <View style={styles.body}>
        <View style={styles.div}>
            {
                [...Array(i)].map((o,n) => {
                        return(
                            <TouchableOpacity style={styles.OnDiv} onPress={()=>navigation.navigate('ChiTiet',
                            {itemId: data.food[n].id})}>
                                <View style={styles.Content}>
                                <Image
                                    style={styles.imgMonAn}
                                    source={require('./banhtrangheo.jpg')}
                                />
                                <Text style={styles.TenMonAn}>
                                    {
                                        data.food[n].name
                                    }
                                </Text>
                                <Text style={styles.TacGiaMonAn}>
                                    {
                                        data.food[n].intro
                                    }
                                </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
            }
        </View>
        </View>
        </ScrollView>
        </View>
        
        <View style={styles.footer}>
            <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('Settings')}>
                <FontAwesome5 style = {{}} name="home" size={30} color="black"
                />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('DanhSach')}>
                <FontAwesome5 style = {{}} name="home" size={30} color="black"
                />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('ChiTiet')}>
                <FontAwesome5 style = {{}} name="home" size={30} color="black"
                />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('ChiTiet')}>
                <FontAwesome5 style = {{}} name="home" size={30} color="black"
                />
            </TouchableOpacity>
        </View>
    </View>
)};

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:'center',

    },
    content: {
        flex: 10,
        backgroundColor: '#f8f6f2',
        alignItems: 'center',
        width:'100%',

      },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection:'row',
      },
    c4: {
        padding:15,
        flex: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
      },
      header: {
        paddingTop:10,
        flexDirection:'row',
        textAlign:'center',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        backgroundColor:'#45908f',
      },
      headerIn: {
        marginTop:1,
        flexDirection:'row',
        justifyContent:'center',
        flex: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        backgroundColor:'#45908f',
      },
      scrollView:{
        flex: 15,
        width:'100%',
      },
      body: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
      div:{
        flex:1,
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      OnDiv:{
        padding:5,
        width:'33%',
      },
      Content:{
        borderRadius:5,
        height:230,
        backgroundColor:'#eee8ea',
      },
      imgMonAn:{
        width:'100%',
        height:'50%',
        resizeMode: 'stretch',
        borderRadius:5,
      },
      TenMonAn:{
        fontWeight:'bold',
        fontSize:15,
      },
      TacGiaMonAn:{
        color:'grey',
      },
  });