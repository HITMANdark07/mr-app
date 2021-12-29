import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"

const theme1="#5DBCB0";
const Report = ({navigation}) => {
    return (
        <View style={{flex:1, backgroundColor:theme1}}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={35} color={'#fff'} />
                </TouchableOpacity>
                <Text style={{color:'#fff', alignSelf:'center', fontSize:22, fontWeight:'600'}}>Report</Text>
                <View>
                    <Image style={{height:35, width:35}} source={require("../../assets/logowhite.png")} />
                </View>
            </View>
            <View style={styles.body}>
                <View style={{width:'10%',borderWidth:3,borderRadius:12, borderColor:'#5DBCB0',alignSelf:'center', marginTop:10}} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    header:{
        flexDirection:'row',
        top:0,
        justifyContent:'space-between',
        margin:15,
        marginBottom:60
    },
    body:{
        flex:1,
        width:'100%',
        backgroundColor:'#fff',
        borderTopLeftRadius:40,
        borderTopRightRadius:40
    },
    add:{
        position:'absolute',
        backgroundColor:'#fff',
        padding:9,
        margin:10,
        right:0,
        borderRadius:50,
        bottom:0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }
})

export default Report;
