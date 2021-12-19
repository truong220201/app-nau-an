import React, { useState } from 'react';
import { TouchableOpacity,ScrollView, Text, View,Button,StyleSheet,Image, ImageBackground} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import data from '../../data.json';
import datamatl from '../../datamonantheoloai.json';


const Home = ({navigation}) => {
    const i = data.category.length;
    const j = datamatl.loai.length;
    return(
      <View style={{flex:1,}}>
      <ScrollView  style={styles.container}>
        <View style={styles.content}>
          <Image 
            source={require('./images/title.jpg')}
            style={styles.imgtitle}
          />
          <View style={styles.div}>
            {
                [...Array(j)].map((o,n) => {
                        return(
                            <TouchableOpacity style={styles.OnDiv}
                            onPress={()=>navigation.navigate('ChiTiet',
                            {itemId: data.category[n].id})}>
                                <View style={styles.Content}>
                            
                                  <Image
                                      style={styles.imgMonAn}
                                      source={{uri:datamatl.loai[n].img}}
                                  />
                                 <Text style={styles.txtloai}>{datamatl.loai[n].name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
            }
          </View>
          <View style={styles.div2}>
            <Text style={styles.txthnag}>Hôm nay ăn gì?</Text>
            <ScrollView  horizontal={true} style={styles.container2}>
            {
                [...Array(i)].map((o,n) => {
                  return(
                  <ImageBackground source={{uri:data.monan[n].img}} resizeMode="cover"  style={styles.inscontainer2}>
                    <LinearGradient colors={['#faebd700', 'black', '#192f6a']} style={styles.inscontainer2a}>
                      <Text style={styles.txtInfoFood}>{data.monan[n].name}</Text>
                      <Text style={styles.txtTagFood}>{data.monan[n].intro}</Text>
                    </LinearGradient>
                  </ImageBackground>
                  )
              })
            }
            </ScrollView>
            
          </View>
        </View>
        
      </ScrollView>
      <View style={styles.footer}>
            <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('Settings')}>
                <FontAwesome5 style = {{}} name="home" size={30} color="orange"
                />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('DanhSach')}>
                <FontAwesome5 style = {{}} name="book" size={30} color="black"
                />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('DanhSach')}>
                <View  style={styles.c5}>
                  <FontAwesome5 style = {{}} name="search" size={30} color="black"
                  />
                </View>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('DanhSach')}>
                <FontAwesome5 style = {{}} name="heart" size={30} color="black"
                />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('DanhSach')}>
                <FontAwesome5 style = {{}} name="user-circle" size={30} color="black"
                />
            </TouchableOpacity>
        </View>
      </View>
      
)};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f6f7fb',
  },
  container2:{
    width: '100%',
    height:'100%',
    borderRadius:5,
  },
  inscontainer2:{
    width:300,
    height:'100%',
    marginRight:10,
    borderRadius:5,
  },
  inscontainer2a:{
    top:90,
    width:300,
    height:'100%',
    marginRight:10,
    padding:10,
  },
  txthnag:{
    fontSize:28,
    fontWeight:'bold',
    marginTop:10,
    marginBottom:10,
  },
  txtInfoFood:{
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    textTransform:'uppercase',
  },
  txtTagFood:{
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    
  },
  imgtitle:{
    width:'100%',
    height:200,
    flex:1,
  },
  content: {
    flex: 5,
    backgroundColor: '#f8f6f2',
    alignItems: 'center',
    width:'100%',

  },
  div:{
    flex:1,
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height:200,
    backgroundColor:'#e5eaff',
    padding:3,
  },
  div2:{
    flex:1,
    width:'100%',
    height:250,
    paddingTop:10,
    paddingLeft:10,
    paddingBottom:10,
  },
  OnDiv:{
    padding:1,
    width:'25%',
    height:'50%',
  },
  Content:{
    borderRadius:2,
    height:'100%',
    backgroundColor:'#fff',
    padding:15,
    alignItems:'center',
  },
  txtloai:{
    top:'-20%',
    fontSize:13,
    fontWeight:'bold'
  },
  imgMonAn:{
    top:-10,
    width:'100%',
    height:'100%',
    resizeMode: 'stretch',
    borderRadius:5
  },
  TenMonAn:{
    fontWeight:'bold',
    fontSize:15,
  },
  TacGiaMonAn:{
    color:'grey',
  },
  footer: {
    height:70,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection:'row',
    elevation:3,
  },
  c4: { 
    padding:15,
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  }
});
export default Home;

