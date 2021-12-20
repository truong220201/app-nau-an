import React, { useState } from 'react';
import { Dimensions,TouchableOpacity,ScrollView, Text, View,Button,StyleSheet,Image, ImageBackground} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import data from '../../data.json';
import datamatl from '../../datamonantheoloai.json';


const Home = ({navigation}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
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
            <ScrollView snapToInterval={windowWidth-84}  decelerationRate="fast"  horizontal={true} style={styles.container2}>
            {
                [...Array(i)].map((o,n) => {
                  return(
                  <ImageBackground imageStyle={{ borderRadius: 6}} source={{uri:data.monan[n].img}} resizeMode="cover"  style={styles.inscontainer2}>
                    <View style={{borderRadius:5,overflow:'hidden',}}>
                    <LinearGradient colors={['#faebd700', 'black', '#192f6a']} style={styles.inscontainer2a}>
                      <Text style={styles.txtInfoFood}>{data.monan[n].name}</Text>
                      <Text style={styles.txtTagFood}>{data.monan[n].intro}</Text>
                    </LinearGradient>
                    </View>
                  </ImageBackground>
                  
                  )
              })
            }
            </ScrollView>
            
          </View>
          <View style={styles.div3}>
            <Text style={styles.txthnag2}>Phổ biến</Text>
            <ScrollView snapToInterval={windowWidth-84}  decelerationRate="fast"  horizontal={true} style={styles.container2}>
            {
                [...Array(i)].map((o,n) => {
                  return(
                  <ImageBackground imageStyle={{ borderRadius: 6}} source={{uri:data.monan[n].img}} resizeMode="cover"  style={styles.inscontainer2}>
                    <View style={{borderRadius:5,overflow:'hidden',}}>
                      <LinearGradient  colors={['#faebd700', 'black', '#192f6a']} style={styles.inscontainer2a}>
                        <Text style={styles.txtInfoFood}>{data.monan[n].name}</Text>
                        <Text style={styles.txtTagFood}>{data.monan[n].intro}</Text>
                      </LinearGradient>
                    </View>
                  </ImageBackground>
                  )
              })
            }
            </ScrollView>
          </View>
          <View style={styles.div4}>
            <Text style={styles.txthnag3}>Bí quyết nấu ăn</Text>
            <View style={styles.container3}>
            {
                [...Array(i)].map((o,n) => {
                  return(
                  <View  style={styles.inscontainer3}>
                    <View style={{borderRadius:5,overflow:'hidden',padding:5,}}>
                      <View style={{flexDirection:'row'}}>
                        <FontAwesome5 style = {{top:3,margin:3,}} name="user-alt" size={12} color="orange"/>
                        <Text style={styles.txttacgia}>{data.food[n].tacgia}</Text>
                        <FontAwesome5 style = {{top:3,margin:3,left:55,}} name="chevron-right" size={13} color="grey"/>
                      </View>
                      <Text style={styles.txttenmonan}> {data.food[n].name}</Text>
                      <Text style={styles.txthuongdan}>{data.food[n].cachlam.b1}...</Text>
                      <Text style={styles.txthuongdan}>...</Text>
                      <Text style={styles.txthuongdan}>{data.food[n].cachlam.b2}...</Text>
                      <Text style={styles.txthuongdan}>...</Text>
                      <Text style={styles.txttag}>{data.food[n].tag}</Text>
                    </View>
                  </View>
                  )
              })
            }
            </View>
          </View>
        </View>
        
      </ScrollView>
      
      </View>
      
)};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f7f6f2',
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
    elevation:2,
  },
  inscontainer2a:{
    top:90,
    width:300,
    height:'100%',
    marginRight:10,
    padding:10,
  },
  container3:{
    flex:1,
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding:3,
  },
  inscontainer3:{
    width:'48%',
    height:'25%',
    borderRadius:2,
    backgroundColor:'#fff',
    marginBottom:5,
    elevation:2,
  },
  txthnag:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:10,
    marginBottom:10,
  },
  txthnag2:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:10,
    marginBottom:10,
    color:'#fff',
  },
  txthnag3:{
    fontSize:20,
    fontWeight:'bold',
    margin:10,
    color:'orange',
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
    backgroundColor: '#f7f6f2',
    alignItems: 'center',
    width:'100%',
    
  },
  div:{
    flex:1,
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height:200,
    backgroundColor:'#f7f6f2',
    padding:3,
    marginTop:3,
    
  },
  div2:{
    flex:1,
    width:'100%',
    height:250,
    paddingTop:10,
    paddingLeft:10,
    paddingBottom:10,
    margin:3,
    backgroundColor:'#fff',
    elevation:2,
  },
  div3:{
    flex:1,
    width:'100%',
    height:250,
    paddingTop:10,
    paddingLeft:10,
    paddingBottom:10,
    margin:3,
    backgroundColor:'#ffbb22eb',
    elevation:2,
  },
  div4:{
    flex:1,
    width:'100%',
    height:750,
    paddingTop:10,
    paddingBottom:10,
    margin:3,
    backgroundColor:'#f7f6f2',
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
    elevation:2,
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
  txttacgia:{
    fontWeight:'bold',
    fontSize:14,
    color:'grey',
    padding:3,
  },
  txttenmonan:{
    fontWeight:'bold',
    fontSize:14,
    color:'orange',
  },
  txthuongdan:{
    maxHeight:21,
    maxWidth:140,
    color:'grey',
    fontSize:12,
    padding:3,
    fontStyle:'italic'
  },
  txttag:{
    marginTop:1,
    color:'orange',
    padding:3,
  }
});
export default Home;

