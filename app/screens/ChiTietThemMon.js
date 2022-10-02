import React from 'react';

import { Text, View } from 'react-native';
import { TouchableOpacity,ScrollView,Button,StyleSheet,Image,TextInput } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 
export default function ChiTietThemMon() {
  
    return (
      <ScrollView style={styles.ScrollView}>
        <View style={styles.container}>
            
           <View style={styles.input}>
          <TextInput style={styles.txtinput}             
              placeholder='Tên món ăn:'
            >
            </TextInput>
          </View>

          <View style={styles.input1}>
          <TextInput style={styles.txtinput1}             
              placeholder='Món ăn này đến từ đâu? '
            >
            </TextInput>
          </View>
          <Text style={styles.txt}>Thời gian nấu</Text>
          <View style={styles.input2}>
          <TextInput style={styles.txtinput2}             
              placeholder='1 tiếng 30 phút' 
            >
            </TextInput>
            </View>
            <View style={{ width:'100%' ,borderWidth: 3,borderColor: '#1111110d',
         marginTop: 25,}} 
      ></View>
        <Text style={styles.nguyenlieu}>Nguyên Liệu</Text>
        <FontAwesome5 style = {{marginLeft:20,marginTop:20}} name="bars" size={20} color="gray"
                />
        <View style={styles.input3}>
          <TextInput style={styles.txtinput3}             
              placeholder='30g muối'
            >
            </TextInput>
          </View>
          <FontAwesome5 style = {{marginLeft:20,marginTop:35}} name="bars" size={20} color="gray"
                />
        <View style={styles.input3}>
          <TextInput style={styles.txtinput3}             
              placeholder='1 chút tiêu'
            >
            </TextInput>
          </View>
          <FontAwesome5 style = {{marginLeft:20,marginTop:35}} name="bars" size={20} color="gray"
                />
        <View style={styles.input3}>
          <TextInput style={styles.txtinput3}             
              placeholder='100ml nước'
            >
            </TextInput>
          </View>
          <TouchableOpacity>
          <FontAwesome5 style = {{marginLeft:110,marginTop:35}} name="plus" size={20} color="black"
                />
                <Text style = {{marginLeft:140,marginTop:-23,fontSize:18}}>Nguyên liệu</Text>
                </TouchableOpacity>
                <View style={{ width:'100%' ,borderWidth: 3,borderColor: '#1111110d',
         marginTop: 25,}} ></View>

         <Text style={styles.nguyenlieu}>Cách làm</Text>
         <FontAwesome5 style = {{marginLeft:20,marginTop:35}} name="bars" size={20} color="gray"
                />
        <View style={styles.input3}>
          <TextInput style={styles.txtinput3}             
              placeholder='1 chút tiêu'
            >
            </TextInput>
          </View>
          <FontAwesome5 style = {{marginLeft:20,marginTop:35}} name="bars" size={20} color="gray"
                />
        <View style={styles.input3}>
          <TextInput style={styles.txtinput3}             
              placeholder='100ml nước'
            >
            </TextInput>
          </View>
          <TouchableOpacity style={{width:300,height:200,alignSelf:'center'}}>
          <FontAwesome5 style = {{marginLeft:90,marginTop:35}} name="plus" size={20} color="black"
                />
                <Text style = {{ marginLeft:120,marginTop:-23,fontSize:18}}>Thêm bước</Text>
                </TouchableOpacity>
        
        </View>
        </ScrollView>
        

    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,  
     backgroundColor:'#fff'
    },
    input:{
      marginTop:10,
      width:"90%",
      marginLeft:20,      
      borderRadius:6,
      backgroundColor:'#1111110d'
    },
    txtinput:{
      width:200,
      height:45,
      marginLeft:20,
      fontSize:20,
    },
    input1:{
      marginTop:10,
      width:"90%",
      height:'17%',
      marginLeft:20,      
      borderRadius:6,
      backgroundColor:'#1111110d'
    },
    input2:{
      marginTop:-30,
      width:"37%",
      height:'5%',
      marginLeft:200,      
      borderRadius:6,
      backgroundColor:'#1111110d'
    },
    txtinput1:{
      width:500,     
      height:45,
      marginLeft:20,
      
      fontSize:17,
    },
    ScrollView: {
      flex: 15,
      width:'100%',
    },
    txtinput2:{
      width:500,     
      height:45,
      marginLeft:10,
      fontSize:17,
    },
    txt:{
      marginTop:30,
      marginLeft:20,
      fontSize:17,
      color:'#111111bf'
    },
    nguyenlieu:{
      marginTop:30,
      marginLeft:20,
      fontSize:19,
      fontWeight:'bold',
      color:'#111111bf'
    },
    input3:{
      marginTop:-26,
      width:"80%",
      height:'4%',
      marginLeft:50,      
      borderRadius:6,
      backgroundColor:'#1111110d'
    },
    txtinput3:{
      width:200,
      height:45,
      marginLeft:20,
      marginTop:-5,
      fontSize:18,
    },
   
  });
