import React from 'react';
import { Text, View } from 'react-native';

import data from '../../data.json';
 
const ChiTiet = ({route, navigation }) =>{ 
    const { itemId, otherParam } = route.params;
    return(
    <View>
        <Text>Chi tiet Sp,{itemId}</Text>
    </View>
)};

export default ChiTiet;
